"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import { cn } from "@/lib/utils";
import { ScreensContent } from "@/components/hover-card-content";
import { categoriesList } from "@/lib/_data";
import { HoverCardPortal } from "@radix-ui/react-hover-card";

export function CarouselButtonsTags() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [scrollPrev, setScrollPrev] = React.useState<boolean>(false);
  const [scrollNext, setScrollNext] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // add duration for hiding arrows after carousel slide animation
      setTimeout(() => {
        setScrollPrev(api.canScrollPrev());
        setScrollNext(api.canScrollNext());
      }, 550);
    });
  }, [api]);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [activeButton, setActiveButton] = React.useState<string>("");

  const handleMouseEnter = (button: string) => {
    setActiveButton(button);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveButton("");
    setIsOpen(false);
  };

  return (
    <Carousel
      opts={{
        duration: 20,
        containScroll: "trimSnaps",
        align: "start",
        slidesToScroll: "auto",
      }}
      setApi={setApi}
      className="py-3"
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent className="relative">
        {/* All button */}
        <CarouselItem className="basis-auto pl-2 first:pl-5 last:pr-1">
          <Button variant="default" size="lg" className="rounded-full">
            All
          </Button>
        </CarouselItem>

        {/* Tags buttons */}
        {categoriesList.map((category) => (
          <CarouselItem
            key={category}
            className="basis-auto pl-2 first:pl-5 last:pr-1"
          >
            <HoverCard
              // open={isOpen && activeButton === category}
              openDelay={150}
              closeDelay={150}
              key={category}
            >
              <HoverCardTrigger
                onMouseEnter={() => handleMouseEnter(category)}
                asChild
              >
                <Button variant="outline" size="lg" className="rounded-full">
                  {category}
                </Button>
              </HoverCardTrigger>

              <HoverCardPortal>
                <HoverCardContent
                  align="center"
                  side="bottom"
                  sideOffset={12}
                  className={cn(
                    "w-full h-auto rounded-2xl border overflow-hidden max-w-[400px]",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95"
                  )}
                >
                  <ScreensContent name={category} />
                </HoverCardContent>
              </HoverCardPortal>
            </HoverCard>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        variant="ghost"
        className={cn(
          "ml-12 size-11 bg-background",
          scrollPrev ? "" : "hidden"
        )}
      />
      <CarouselNext
        variant="ghost"
        className={cn(
          "mr-12 size-11 bg-background",
          scrollNext ? "" : "hidden"
        )}
      />
    </Carousel>
  );
}
