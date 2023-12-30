"use client";

import { ButtonTag } from "@/components/button-tag";
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

const categories = [
  "All",
  "Business",
  "Finance",
  "CRM",
  "Shopping",
  "Artificial Intelligence",
  "Education",
  "Food & Drink",
  "Health & Fitness",
  "Lifestyle",
  "Entertainment",
  "Travel & Transportation",
  "Communication",
  "Crypto & Web3",
  "Social Networking",
  "Medical",
];

export default function CarouselButtonsTags() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [scrollPrev, setScrollPrev] = React.useState<boolean>(false);
  const [scrollNext, setScrollNext] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // change ms if you update duration on Carousel
      setTimeout(() => {
        setScrollPrev(api.canScrollPrev());
        setScrollNext(api.canScrollNext());
      }, 550);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        duration: 20,
        containScroll: "trimSnaps",
        align: "start",
        slidesToScroll: "auto",
      }}
      setApi={setApi}
    >
      <CarouselContent className="py-1">
        {categories.map((category) => (
          <CarouselItem
            key={category}
            className="basis-auto pl-2 first:pl-5 last:pr-1"
          >
            <ButtonTag title={category} />
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
