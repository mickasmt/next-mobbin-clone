"use client";

import { CarouselProgressBar } from "@/components/carousels/carousel-progress-bar";
import { HeroHomepage } from "@/components/hero-homepage";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { useHero } from "@/hooks/use-hero-selection";

export function HeroCheckbox() {
  const { isChecked, toggleCheckbox } = useHero();
  return (
    <DropdownMenuCheckboxItem
      checked={isChecked}
      onCheckedChange={toggleCheckbox}
      className="cursor-pointer"
    >
      Static Hero
    </DropdownMenuCheckboxItem>
  );
}

export function HerosComponent() {
  const { isChecked } = useHero();

  return <>{isChecked ? <HeroHomepage /> : <CarouselProgressBar />}</>;
}
