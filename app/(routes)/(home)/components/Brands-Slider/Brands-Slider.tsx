"use client";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { BrandsSliderProps } from "./Brands-Slider.types";
import Reveal from "@/components/shared/Reveal/Reveal";
import { brands } from "./Brands-Slider.data";
function BrandsSlider(props: BrandsSliderProps) {
  return (
    <Reveal
      position="bottom"
      className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[AutoPlay({ delay: 2500 })]}
      >
        <CarouselContent>
          {brands.map(({ url, name }, index) => (
            <CarouselItem
              className="basis-4/4 md:basis-2/4 lg:basis-1/6"
              key={index}
            >
              <Image
                src={`/images/brands/${url}`}
                alt={name}
                width={90}
                height={90}
                className="object-contain aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}

export default BrandsSlider;
