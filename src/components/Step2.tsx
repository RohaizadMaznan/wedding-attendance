"use client";

import { FormValues } from "@/app/page";
import { Button, Input } from "@heroui/react";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type Step2Props = {
  form: UseFormReturn<FormValues, any, undefined>;
};

export default function Step2({ form }: Step2Props) {
  return (
    <div className="space-y-4 p-8">
      <p className="text-lg font-bold">
        Undangan bagi pihak{" "}
        {form.watch("pihakKeluarga") === "maznan" ? "lelaki" : "perempuan"}
      </p>

      <p className="pb-8 text-sm">
        Diminta untuk mengisi butiran kehadiran anda ke{" "}
        <span className="font-bold underline">
          Mahligai Perkahwinan{" "}
          {form.watch("pihakKeluarga") === "maznan"
            ? "Rohaizad & Husna"
            : "Husna & Rohaizad"}
        </span>
      </p>

      <div className="grid grid-cols-1 gap-6 text-left">
        <Controller
          name="namaKeluarga"
          control={form.control}
          render={({ field }) => (
            <Input
              label="Nama keluarga"
              description="Isikan nama ketua keluarga"
              errorMessage={form.formState.errors.namaKeluarga?.message}
              isInvalid={!!form.formState.errors.namaKeluarga}
              {...field}
            />
          )}
        />

        <Controller
          name="pax"
          control={form.control}
          render={({ field }) => (
            <Input
              type="number"
              label="Jumlah bilangan ahli (pax)"
              value={String(field.value)}
              onChange={(event) => {
                form.setValue("pax", Number(event.target.value), {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              description="Maksimum ahli yang dibenarkan hanya 10 orang sahaja"
              errorMessage={form.formState.errors.pax?.message}
              isInvalid={!!form.formState.errors.pax}
              max={10}
              min={1}
            />
          )}
        />

        <Controller
          name="nombor"
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              label="Nombor telefon"
              placeholder="0129876543"
              errorMessage={form.formState.errors.pax?.message}
              isInvalid={!!form.formState.errors.pax}
            />
          )}
        />

        {/* <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              label="Email"
              description="Isikan emel untuk terima kad jemputan online"
              errorMessage={form.formState.errors.email?.message}
              isInvalid={!!form.formState.errors.email}
              {...field}
            />
          )}
        /> */}
      </div>

      <Button
        className="w-full lg:w-fit"
        variant="bordered"
        type="submit"
        isDisabled={!form.formState.isValid}
      >
        Hantar
      </Button>
    </div>
  );
}
