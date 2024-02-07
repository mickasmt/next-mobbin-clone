"use client";

import { CarouselButtonsTags } from "@/components/carousels/carousel-buttons-tags";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSearchModal } from "@/hooks/use-search-modal";

export function TagsList() {
  const searchModal = useSearchModal();

  return (
    <div className="flex items-center gap-4 -margin-x -my-3">
      <Button
        size="lg"
        variant="secondary"
        onClick={searchModal.onOpen}
        className="max-md:hidden rounded-full"
        asChild
      >
        <div className="flex items-center gap-x-2">
          <Icons.settings2 className="size-4" />
          <span>Filters</span>
        </div>
      </Button>

      <Separator orientation="vertical" className="max-md:hidden h-8" />
      <div className="flex-grow overflow-hidden">
        <CarouselButtonsTags />
      </div>
    </div>
  );
}
