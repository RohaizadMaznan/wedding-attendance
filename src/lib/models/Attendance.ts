import mongoose, { Schema, Document } from "mongoose";

export interface IAttendance extends Document {
  namaKeluarga: string;
  pihakKeluarga: string;
  nombor: string;
  pax: number;
}

const AttendanceSchema = new Schema<IAttendance>(
  {
    namaKeluarga: { type: String, required: true },
    pihakKeluarga: { type: String, required: true },
    nombor: { type: String, required: true, unique: true },
    pax: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Attendance ||
  mongoose.model<IAttendance>("Attendance", AttendanceSchema, "attendances");
