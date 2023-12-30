"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";

const slides = [
  {
    title: "Find login screen references.",
    imageUrl: "/images/hero-banner-1.webp",
  },
  {
    title: "Discover best-in-class apps.",
    imageUrl: "/images/hero-banner-2.webp",
  },
  {
    title: "Find onboarding flows.",
    imageUrl: "/images/hero-banner-3.webp",
  },
  {
    title: "Explore searchbar references.",
    imageUrl: "/images/hero-banner-4.webp",
  },
];

const BlockInfos = () => (
  <>
    <p className="max-w-[480px] px-4 text-balance font-normal text-lg md:text-xl md:px-0 md:max-w-[550px]">
      <span className="hidden md:inline">
        Save hours of UI &amp; UX research with our library of 100,000+ fully
        searchable mobile &amp; web screenshots.
      </span>
      <span className="inline md:hidden">
        Save hours of UI &amp; UX research by searching across our library of
        100k+ mobile &amp; web screenshots.
      </span>
    </p>
    <div className="flex gap-4   md:pt-4  ">
      <Button variant="default" size="lg">
        <Link href="/">Try Mobbin Free</Link>
      </Button>
      <Button variant="outline" size="lg">
        <Link href="/">Learn more</Link>
      </Button>
    </div>
  </>
);

export default function CarouselProgressBar() {
  return (
    <section className="h-[420px] w-full overflow-hidden border-b-2 md:h-[480px]">
      {/* <div className="absolute flex h-full w-full flex-col items-center justify-between pb-6 pt-10 md:pt-4">
        
        <Image
          // key={slides[0].title}
          className="absolute top-0 -z-10 hidden h-full w-auto max-w-[unset] min-720:block"
          src={slides[0].imageUrl}
          alt={slides[0].title}
          layout="fill"
        />
        <div className="flex max-w-[355px] flex-col items-center justify-center gap-10 md:max-w-fit md:gap-7 md:px-6">
          <h1 className="px-3 md:px-0 md:text-heading">{slides[0].title}</h1>
          <BlockInfos />
        </div>
        <div>dots</div>
      </div> */}
      <Carousel className="relative h-full" opts={{ loop: true}}>
        <CarouselContent className="h-full">
          {slides.map((item) => (
            <CarouselItem key={item.title} className="h-full">
              <div className="relative flex h-full w-full flex-col items-center justify-between pb-6 pt-10 md:pt-16">
                <Image
                  className="absolute top-0 -z-10 hidden h-full w-auto max-w-[unset] md:block"
                  src={item.imageUrl}
                  alt={item.title}
                  width={2000}
                  height={480}
                />
                <div className="flex max-w-[355px] flex-col items-center justify-center gap-10 md:max-w-fit md:gap-7 md:px-6">
                  <h1 className="px-3 md:px-0 md:text-heading-xl">
                    {item.title}
                  </h1>
                  <BlockInfos />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>dots</div>
      </Carousel>
    </section>
  );
}
