"use client";

import { useSearchModal } from "@/hooks/use-search-modal";
import { cn } from "@/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { CommandCategoriesList, Trending } from "@/components/command-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect } from "react";
import { categoriesCommand } from "@/lib/_data";

export function SearchCommandDialog() {
  const searchModal = useSearchModal();
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("trending");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchModal.onOpen();
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const currentIndex = categoriesCommand.findIndex(
          (item) => item.key === category
        );
        const nextIndex = (currentIndex + 1) % categoriesCommand.length;
        setCategory(categoriesCommand[nextIndex].key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchModal, category]);

  return (
    <CommandDialog
      open={searchModal.isOpen}
      onOpenChange={searchModal.onClose}
      className={cn(
        "max-w-full h-full md:max-h-[720px] sm:max-w-[816px] !rounded-none md:!rounded-3xl md:!top-[41.5%]",
        "data-[state=closed]:max-md:!slide-out-to-bottom-5 data-[state=open]:max-md:!slide-in-from-bottom-5",
        "data-[state=closed]:max-md:!zoom-out-100 data-[state=open]:max-md:!zoom-in-100",
        "search-command pt-3"
      )}
    >
      <CommandInput
        placeholder="Search on iOS..."
        autoFocus
        value={search}
        onValueChange={setSearch}
      />

      <CommandEmpty>No results found.</CommandEmpty>

      <section className="flex pl-3 pt-2 h-full overflow-hidden">
        <CommandCategoriesList category={category} setCategory={setCategory} />

        <ScrollArea>
          <CommandList className="relative size-full !max-h-none px-3 pb-10">
            <CommandItem className="absolute inset-0 z-0 !bg-transparent !text-transparent">
              hidden item
            </CommandItem>

            {category === "trending" && <Trending />}

            {category === "screens" && (
              <>
                <CommandItem>Screens 1</CommandItem>
                <CommandItem>Screens 2</CommandItem>
              </>
            )}

            {category === "ui-elements" && (
              <>
                <CommandItem>ui element 1</CommandItem>
                <CommandItem>ui element 2</CommandItem>
              </>
            )}

            {category === "flows" && (
              <>
                <CommandItem>Flows 1</CommandItem>
                <CommandItem>Flows 2</CommandItem>
              </>
            )}
          </CommandList>
        </ScrollArea>
      </section>
    </CommandDialog>
  );
}
