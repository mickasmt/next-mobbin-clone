"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useSearchModal } from "@/hooks/use-search-modal";

export function SearchButtonNav() {
  const searchModal = useSearchModal();

  return (
    <Button
      size="lg"
      variant="secondary"
      onClick={searchModal.onOpen}
      className="h-10 md:h-12 w-full rounded-full justify-between cursor-pointer group relative"
      asChild
    >
      <div>
        <div className="flex items-center gap-x-2 px-4">
          <Icons.search className=" size-4 md:size-5" />
          <span className="text-sm sm:text-base text-muted-foreground/80">
            Search on iOS...
          </span>
        </div>
        <span className="absolute right-0 top-0 hidden sm:flex h-full items-center justify-end pr-5 pointer-events-none invisible group-hover:visible group-focus:visible text-muted-foreground">
          shortcut
        </span>
      </div>
    </Button>
  );
}
