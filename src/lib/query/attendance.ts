import { useQuery } from "@tanstack/react-query";

interface RootObject {
  attendances: Attendance[];
  totalPax: number;
  paxByCategory: PaxByCategory;
}

interface PaxByCategory {
  maznan: number;
  hamran: number;
}

interface Attendance {
  _id: string;
  namaKeluarga: string;
  pax: number;
  nombor: string;
  pihakKeluarga: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export function useAttendance() {
  return useQuery<RootObject>({
    queryKey: ["attendances"],
    queryFn: async () => {
      const response = await fetch("/api/attendances");

      if (!response.ok) {
        throw new Error("Failed to fetch attendances");
      }

      return response.json();
    },
  });
}
