"use client";

import {
  MapIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/16/solid";
import {
  Button,
  Divider,
  Input,
  Link,
  Select,
  SelectItem,
  Spinner,
  Tooltip,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
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
  email: z.string().email(),
});
type FormValues = z.infer<typeof attendanceSchema>;

const listPihakKeluarga = [
  { key: "maznan", label: "Pihak Lelaki (Maznan Bin Shair)" },
  { key: "hamran", label: "Pihak Perempuan (Hamran Bin Daud)" },
];

export default function Home() {
  const [steps, setSteps] = React.useState(0);

  const [isLoading, setIsLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      pax: 1,
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [steps]);

  if (isLoading)
    return (
      <div className="flex mx-auto">
        <Spinner color="default" />
      </div>
    );

  // Pilih pihak keluarga
  const Step1 = () => {
    return (
      <>
        <div className="space-y-4">
          <p className="text-2xl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="text-2xl">❤️</p>
          <p className="text-3xl lg:text-4xl font-bold uppercase">
            <span>Undangan Walimatulurus</span>
            <br />
            <u>Rohaizad & Husna</u>
          </p>
        </div>
        <Controller
          name="pihakKeluarga"
          control={control}
          render={({ field }) => (
            <Select
              label="Pilih pihak keluarga/kenalan pengantin"
              errorMessage={errors.pihakKeluarga?.message}
              isInvalid={!!errors.pihakKeluarga}
              classNames={{
                base: "text-black",
                listbox: "text-black",
              }}
              selectedKeys={new Set([field.value])}
              onSelectionChange={(keys) => {
                setValue("pihakKeluarga", Array.from(keys).join(""), {
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
      </>
    );
  };

  // Keluarkan invitation
  const Step2 = () => {
    return (
      <div className="space-y-4">
        <p className="underline text-lg">
          Undangan bagi pihak{" "}
          {watch("pihakKeluarga") === "maznan" ? "lelaki" : "perempuan"}
        </p>

        <p className="pb-8 text-sm">
          Diminta untuk mengisi butiran kehadiran anda ke{" "}
          <span className="font-bold underline">
            Mahligai Perkahwinan{" "}
            {watch("pihakKeluarga") === "maznan"
              ? "Rohaizad & Husna"
              : "Husna & Rohaizad"}
          </span>
        </p>

        <div className="grid grid-cols-1 gap-6 text-left">
          <Controller
            name="namaKeluarga"
            control={control}
            render={({ field }) => (
              <Input
                label="Nama keluarga"
                description="Isikan nama ketua keluarga"
                errorMessage={errors.namaKeluarga?.message}
                isInvalid={!!errors.namaKeluarga}
                {...field}
              />
            )}
          />

          <Controller
            name="pax"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                label="Jumlah bilangan ahli (pax)"
                value={String(field.value)}
                onChange={(event) => {
                  setValue("pax", Number(event.target.value), {
                    shouldDirty: true,
                    shouldValidate: true,
                  });
                }}
                description="Maksimum ahli yang dibenarkan hanya 10 orang sahaja"
                errorMessage={errors.pax?.message}
                isInvalid={!!errors.pax}
                max={10}
                min={1}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                description="Isikan emel untuk terima kad jemputan online"
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
                {...field}
              />
            )}
          />
        </div>

        <Button
          className="w-full lg:w-fit"
          isDisabled={!isValid}
          onPress={() => setSteps(2)}
        >
          Hantar
        </Button>
      </div>
    );
  };

  // Terima kasih
  const TerimaKasih = () => {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-2xl">السَّلَامُ عَلَيْكُمْ</p>

          <p>Dengan ini,</p>

          <div className="leading-5">
            <p className="font-bold uppercase">
              {watch("pihakKeluarga") === "maznan"
                ? "Maznan Bin Shair"
                : "Hamran Bin Daud"}
            </p>

            <p className="uppercase">&</p>

            <p className="font-bold uppercase">
              {" "}
              {watch("pihakKeluarga") === "maznan"
                ? "Mariamah Binti Sharif"
                : "Marosiah Binti Hamat"}
            </p>
          </div>

          <p className="">
            dengan tulis ikhlas dan kesyukuran menjemput
            <br />
            Dato&apos; / Datin / Tuan / Puan / Encik / Cik
          </p>

          <p className="uppercase underline font-bold text-xl py-4 text-[#fdb924]">
            {watch("namaKeluarga")} serta keluarga
          </p>

          <p className="">untuk hadir ke majlis perkahwinan Anakanda kami</p>

          <div className="leading-5">
            <p className="font-bold uppercase">Rohaizad Bin Maznan</p>

            <p className="uppercase">&</p>

            <p className="font-bold uppercase">Nur Husna Binti Hamran</p>
          </div>
        </div>

        <Divider />

        <div className="space-y-2">
          <p className="font-bold">Aturcara majlis</p>
          <p>12 petang - 4 petang</p>
        </div>

        <Divider />

        <div className="space-y-2">
          <div className="flex items-center justify-center  space-x-1">
            <MapIcon className="w-4 h-4" />
            <p className="font-bold">Lokasi majlis</p>
          </div>
          <div>
            <p className="underline">Moment Glass House Permas</p>
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/NLM2rqMzUMbbVpQk9"
              className="text-[#fdb924] text-sm"
              anchorIcon
              showAnchorIcon
            >
              81750, Jalan Permas Utara 5 Bandar Baru
              <br />
              Permas Jaya, 80150 Johor Bahru, Johor
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          <div>
            <Tooltip
              placement="bottom"
              content="Google Maps"
              classNames={{
                content: "text-black",
              }}
            >
              <Button
                as={Link}
                href="https://maps.app.goo.gl/NLM2rqMzUMbbVpQk9"
                target="_blank"
                isIconOnly
                size="sm"
                className="hover:bg-[#fdb924]"
              >
                <MapPinIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
          </div>

          {/* <div>
            <Tooltip
              placement="bottom"
              content="Google Maps"
              classNames={{
                content: "text-black",
              }}
            >
              <Button
                as={Link}
                href="https://maps.app.goo.gl/NLM2rqMzUMbbVpQk9"
                target="_blank"
                isIconOnly
                size="sm"
                className="hover:bg-[#fdb924]"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
          </div> */}
        </div>

        <p className="text-sm opacity-50">
          Kehadiran dan restu tuan puan kami dahului dengan ucapan terima kasih
        </p>
      </div>
    );
  };

  return (
    <div className="flex justify-center mx-auto w-full">
      <form
        onSubmit={onSubmit}
        className="text-center container lg:max-w-screen-lg space-y-8"
      >
        {steps === 0 && <Step1 />}
        {steps === 1 && <Step2 />}
        {steps === 2 && <TerimaKasih />}
      </form>
    </div>
  );
}
