"use client";

import { ButtonTag } from "@/components/button-tag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  "All",
  "Finance",
  "Business",
  "Health & Fitness",
  "Food & Drink",
  "Education",
  "Shopping",
  "Artificial Intelligence",
  "Travel & Transportation",
  "Lifestyle",
  "Entertainment",
  "Communication",
  "Crypto & Web3",
  "CRM",
  "Social Networking",
  "Medical",
];

export default function CarouselButtonsTags() {
  return (
    <Carousel
      opts={{
        containScroll: "trimSnaps",
        align: "start",
        slidesToScroll: "auto",
      }}
    >
      <CarouselContent className="py-1">
        {categories.map((category) => (
          <CarouselItem key={category} className="basis-auto pl-2 first:pl-5 last:pr-1">
            <ButtonTag title={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="ml-12 size-11 bg-background disabled:hidden"
        variant="ghost"
      />
      <CarouselNext className="mr-12 size-11 disabled:hidden" variant="ghost" />
    </Carousel>
  );
}
