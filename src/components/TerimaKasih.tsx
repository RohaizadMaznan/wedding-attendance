"use client";

import { FormValues } from "@/app/page";
import { MapIcon, MapPinIcon } from "@heroicons/react/16/solid";
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Link,
  Tooltip,
} from "@heroui/react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<FormValues, any, undefined>;
};

export default function TerimaKasih({ form }: Props) {
  return (
    <div className="space-y-4 p-8 px-4">
      <div className="space-y-2 border border-white p-4 rounded-lg">
        <p className="text-2xl">السَّلَامُ عَلَيْكُمْ</p>

        <p>Dengan ini,</p>

        <div className="leading-5">
          <p className="font-bold uppercase font-courgette">
            {form.watch("pihakKeluarga") === "maznan"
              ? "Maznan Bin Shair"
              : "Hamran Bin Daud"}
          </p>

          <p className="uppercase">&</p>

          <p className="font-bold uppercase font-courgette">
            {" "}
            {form.watch("pihakKeluarga") === "maznan"
              ? "Mariamah Binti Sharif"
              : "Marosiah Binti Hamat"}
          </p>
        </div>

        <p className="">
          dengan tulis ikhlas dan kesyukuran menjemput
          <br />
          Dato&apos; / Datin / Tuan / Puan / Encik / Cik
        </p>

        <div className="space-y-1 py-4">
          <p className="uppercase underline font-bold text-xl text-[#fdb924]">
            {form.watch("namaKeluarga")} serta keluarga
          </p>
          <p className="text-xs opacity-50">
            Kami telah menerima pengesahan{" "}
            <span className="font-bold text-[#fdb924] underline">
              {form.watch("pax")}
            </span>{" "}
            pax(s) bagi menghadiri majlis kami.
          </p>
        </div>

        <p className="">untuk hadir ke majlis perkahwinan Anakanda kami</p>

        <div className="leading-5">
          <p className="font-bold uppercase font-courgette">
            Rohaizad Bin Maznan
          </p>

          <p className="uppercase">&</p>

          <p className="font-bold uppercase font-courgette">
            Nur Husna Binti Hamran
          </p>
        </div>
      </div>

      <Divider />

      <div className="space-y-2 border border-white rounded-lg p-4">
        <p className="font-bold">Aturcara majlis</p>
        <p>Isnin</p>
        <p>12 Mei 2025 | 14 Zulkaedah 1446H</p>
        <p>12 petang - 4 petang</p>
      </div>

      <Divider />

      <div className="space-y-2 border border-white rounded-lg p-4">
        <p className="font-bold">Hubungi</p>
        <p>
          Roslinda:{" "}
          <Link color="foreground" href="tel:+60197667850" underline="always">
            +60197667850
          </Link>
        </p>
      </div>

      <Divider />

      <div className="space-y-2 border border-white p-4 rounded-lg">
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
            81750, Jalan Permas Utara 5<br /> Bandar Baru Permas Jaya,
            <br /> 80150 Johor Bahru, Johor
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
              size="sm"
              className="hover:bg-[#fdb924]"
            >
              <MapPinIcon className="w-4 h-4" />
              <p>Google Maps</p>
            </Button>
          </Tooltip>
        </div>
      </div>

      <Divider />

      <div className="space-y-4">
        <p className="font-bold">Peringatan ‼️</p>

        <p>
          Kami telah menerima pengesahan{" "}
          <span className="font-bold text-[#fdb924] underline">
            {form.watch("pax")}
          </span>{" "}
          pax(s) bagi menghadiri majlis kami.
        </p>

        <p>Sila screenshot paparan (nampak nama undangan) ini sebagai bukti</p>

        <Accordion variant="bordered" className="bg-[#384c82]">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Jika saya sudah menghantar pengesahan kehadiran keluarga saya,
            kemudian saya menjemput ahli keluarga lain
            (Ketua/kenalan/sepupu/saudara/adik/abang/dll keluarga) menghadiri
            majlis tanpa mengisi kehadiran. Apakah tidak dibenarkan?"
            classNames={{
              title: "text-sm",
              content: "text-sm text-left",
            }}
          >
            Betul. Anda tidak dibenarkan untuk menjemput tanpa mengisi
            pengesahan kehadiran majlis. Ini adalah untuk mengawal jumlah
            kehadiran tetamu di majlis kami. Jika tiada pengesahan dibuat
            melalui laman web ini, maka tetamu yang hadir tidak akan dibenarkan
            masuk ke dalam dewan majlis.
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Kami adalah sebahagian daripada keluarga dan adik beradik. Apakah kami tidak berhak untuk hadiri majlis?"
            classNames={{
              title: "text-sm",
              content: "text-sm text-left",
            }}
          >
            Kami menjemput, akan tetapi kami membuat sistem kehadiran bagi
            memastikan kehadiran dipantau dan juadah hidangan mencukupi. Kami
            faham akan keinginan pihak yang ingin menghadiri. Kami juga minta
            untuk pihak lain faham situasi kami.
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Adakah majlis ini berjalan secara langsung bagi kedua-dua belah pihak pengantin?"
            classNames={{
              title: "text-sm",
              content: "text-sm text-left",
            }}
          >
            Ye. Kami menjalankan majlis perkahwinan bersanding dan bertandang
            dalam satu majlis ini.
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="Accordion 1"
            title="Apakah bukti pengesahan yang diperlukan sebelum memasuki dewan majlis?"
            classNames={{
              title: "text-sm",
              content: "text-sm text-left",
            }}
          >
            Sila lampirkan screenshot/gambar paparan ini ATAU memberitahu nama
            keluarga anda dipintu masuk dewan.
          </AccordionItem>

          <AccordionItem
            key="5"
            aria-label="Accordion 1"
            title="Bagi tetamu yang tidak dapat memberikan bukti. Adakah para tetamu tersebut perlu pulang?"
            classNames={{
              title: "text-sm",
              content: "text-sm text-left",
            }}
          >
            Ye. Para tetamu yang hadir tanpa bukti atau mengisi pengesahan
            kehadiran tidak akan dapat memasuki dewan majlis dan terpaksa
            pulang. Kami minta maaf atas segala kesulitan.
          </AccordionItem>
        </Accordion>

        <p>
          Sila hormati jumlah ahli yang telah dihantar. Meja dan kerusi telah
          pun kami sediakan. Tempat adalah{" "}
          <span className="font-bold text-[#fdb924] underline">TERHAD!</span>
        </p>
      </div>

      <p className="text-sm opacity-50">
        Kehadiran dan restu tuan puan kami dahului dengan ucapan terima kasih
      </p>
    </div>
  );
}
