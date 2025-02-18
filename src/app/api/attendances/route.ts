import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import type { NextRequest } from "next/server";
import Attendance from "@/lib/models/Attendance";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const attendances = await Attendance.find({});
    // Calculate total pax
    const totalPax = attendances.reduce((sum, att) => sum + (att.pax || 0), 0);

    // Calculate pax by category
    const paxByCategory = attendances.reduce(
      (acc, att) => {
        const category = att.pihakKeluarga || "unknown"; // Default to 'unknown' if missing
        acc[category] = (acc[category] || 0) + (att.pax || 0);
        return acc;
      },
      { maznan: 0, hamran: 0 } // Initialize both categories to 0
    );

    return NextResponse.json(
      { attendances, totalPax, paxByCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching attendances:", error); // Log the error for debugging
    return NextResponse.json(
      { error: "Failed to fetch attendances" },
      { status: 500 }
    ); // 500 for server error
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { namaKeluarga, pihakKeluarga, nombor, pax } = await req.json(); // Use req.json() to parse the body
    const newAttendance = await Attendance.create({
      namaKeluarga,
      pihakKeluarga,
      nombor,
      pax,
    });
    return NextResponse.json(newAttendance, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error); // Log the error
    return NextResponse.json(
      { error: "User could not be created" },
      { status: 400 }
    );
  }
}

// Optional: Handle other methods or return a default response
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
