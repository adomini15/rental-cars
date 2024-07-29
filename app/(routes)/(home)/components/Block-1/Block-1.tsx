import Reveal from "@/components/shared/Reveal/Reveal";
import Image from "next/image";
import React from "react";

function Block1() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center overflow-x-hidden">
      <Reveal position="bottom" className="p-6 lg:pl-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          Premium <span className="block">Rental Cars</span> in Spain
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Don&apos;t deny yourself pleasure of driving the best premium cars
          from around the world here and now.
        </p>
      </Reveal>

      <Reveal position="right" className="flex justify-end">
        <Image
          src="/images/tesla.png"
          alt="Rent cars"
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
}

export default Block1;
