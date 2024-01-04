"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// import { useMounted } from "@/hooks/use-mounted";

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
  <div className="flex flex-col mx-auto max-w-[355px] items-center justify-center gap-10 md:max-w-fit md:gap-7 md:px-6">
    <p className="max-w-[480px] px-4 text-balance text-center font-normal text-lg md:text-xl md:px-0 md:max-w-[550px]">
      <span className="hidden md:inline">
        Save hours of UI &amp; UX research with our library of 100,000+ fully
        searchable mobile &amp; web screenshots.
      </span>
      <span className="inline md:hidden">
        Save hours of UI &amp; UX research by searching across our library of
        100k+ mobile &amp; web screenshots.
      </span>
    </p>
    <div className="flex gap-4 md:pt-4">
      <Button variant="default" size="lg">
        <Link href="/">Try Mobbin Free</Link>
      </Button>
      <Button variant="outline" size="lg">
        <Link href="/">Learn more</Link>
      </Button>
    </div>
  </div>
);

const intervalAutoplay: number = 4000;

export function CarouselProgressBar() {
  // const mounted = useMounted();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(slides.length);
  // FIX: Why slides.length ? The first dot don't show the animation progress bar if its 0. And current is set in useEffect after initial render

  const goToIndex = (index: number) => {
    if (!api) {
      return;
    }
    setCurrent(index);
    api?.scrollTo(index, true);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // if (!mounted)
  //   return (
  //     <div className="h-[420px] w-full overflow-hidden border-b-2 md:h-[480px]" />
  //   );

  return (
    <section className="h-[420px] w-full overflow-hidden border-b-2 md:h-[480px]">
      <Carousel
        className="relative h-full"
        opts={{
          loop: false,
          inViewThreshold: 1,
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[
          Autoplay({
            delay: intervalAutoplay,
            stopOnInteraction: false,
          }),
          ClassNames(),
        ]}
        setApi={setApi}
      >
        <CarouselContent
          className={cn("fade__container", !!api ? "fade__is-ready" : "")}
        >
          {slides.map((item) => (
            <CarouselItem key={item.title} className="fade__slide">
              <div className=" flex h-full w-full flex-col items-center justify-between pb-6 pt-6 md:pt-16">
                <Image
                  className="absolute top-0 hidden h-full w-auto md:block object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                  width={2000}
                  height={480}
                  priority
                />
                <div className="flex max-w-[355px] text-center items-center justify-center md:max-w-fit md:px-6">
                  <h1 className="px-3 md:px-0 text-heading-xl">{item.title}</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute z-10 h-full inset-0 flex items-center justify-center">
          <BlockInfos />
        </div>

        <div className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-3">
            {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className="relative h-[3px] w-12 overflow-hidden rounded-full"
                >
                  <div className="w-full h-full bg-muted-foreground/30 dark:bg-muted-foreground/70 absolute"></div>
                  <div
                    className={cn(
                      "h-full bg-primary relative w-0 z-10",
                      current === index ? "animation-progress-bar w-full" : ""
                    )}
                    style={
                      current === index
                        ? {
                            transitionDuration: `${intervalAutoplay}ms`,
                            animationDuration: `${intervalAutoplay}ms`,
                          }
                        : {}
                    }
                  />
                </button>
              ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
