"use client";

import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import TerimaKasih from "@/components/TerimaKasih";
import { Spinner } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const attendanceSchema = z.object({
  pihakKeluarga: z
    .string({ required_error: "Sila pilih satu pihak" })
    .min(1, "Sila pilih satu pihak"),
  namaKeluarga: z
    .string({ required_error: "Sila masukkan nama keluarga anda" })
    .min(3, "Sila masukkan nama keluarga anda"),
  pax: z
    .number({ required_error: "Sila masukkan semula bilangan ahli anda" })
    .min(1, "Sekurang-kurangnya satu(1) ahli")
    .max(10, "Tidak boleh melebihi 10 bilangan ahli"),
});
type FormValues = z.infer<typeof attendanceSchema>;

export const listPihakKeluarga = [
  { key: "maznan", label: "Pihak Lelaki (Maznan Bin Shair)" },
  { key: "hamran", label: "Pihak Perempuan (Hamran Bin Daud)" },
];

export default function Home() {
  const [steps, setSteps] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      pax: 1,
    },
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);

    toast("Kami telah menerima pengesahan daripada anda. Jumpa di majlis!");

    setSteps(2);
  });

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [steps]);

  if (isLoading)
    return (
      <div className="flex mx-auto mt-[30%]">
        <Spinner color="default" />
      </div>
    );

  return (
    <div className="flex justify-center mx-auto w-full">
      <form
        onSubmit={onSubmit}
        className="text-center container lg:max-w-screen-lg space-y-8 relative"
      >
        {steps === 0 && (
          <Step1 form={form} setSteps={setSteps} setIsLoading={setIsLoading} />
        )}
        {steps === 1 && <Step2 form={form} setSteps={setSteps} />}
        {steps === 2 && <TerimaKasih form={form} />}
      </form>
    </div>
  );
}
