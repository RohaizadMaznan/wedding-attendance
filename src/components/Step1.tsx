"use client";

import { FormValues } from "@/app/page";
import { Select, SelectItem } from "@heroui/react";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type Step1Props = {
  form: UseFormReturn<FormValues, any, undefined>;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const listPihakKeluarga = [
  { key: "maznan", label: "Pihak Lelaki (Maznan Bin Shair)" },
  { key: "hamran", label: "Pihak Perempuan (Hamran Bin Daud)" },
];

export default function Step1({ form, setSteps, setIsLoading }: Step1Props) {
  return (
    <div className="space-y-8 bg-[url('/wallpaper/VIN001.png')] p-8 bg-cover bg-center bg-no-repeat h-screen text-background">
      <div className="absolute top-[33%] left-0 w-full flex flex-col items-center place-items-center justify-items-center justify-center">
        <div className="space-y-4">
          <p className="text-lg pb-3">وَلِيمَةُ ٱلْعُرُسِ</p>
          <div className="text-3xl lg:text-4xl font-bold ">
            <p className="font-courgette">Rohaizad</p>
            <p className="font-courgette">&</p>
            <p className="font-courgette">Husna</p>
          </div>
        </div>
        <Controller
          name="pihakKeluarga"
          control={form.control}
          render={({ field }) => (
            <Select
              label="Sila pilih..."
              errorMessage={form.formState.errors.pihakKeluarga?.message}
              isInvalid={!!form.formState.errors.pihakKeluarga}
              classNames={{
                base: "text-black",
                listbox: "text-black",
                trigger: "bg-white/50",
              }}
              selectedKeys={new Set([field.value])}
              className="mt-8 max-w-[250px]"
              size="sm"
              onSelectionChange={(keys) => {
                form.setValue("pihakKeluarga", Array.from(keys).join(""), {
                  shouldDirty: true,
                  shouldValidate: true,
                });

                setTimeout(() => {
                  setIsLoading(true);
                  setSteps(1);
                }, 500);
              }}
            >
              {listPihakKeluarga.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
}
