"use client";

import { Button } from "@/components/ui/button";
import { useSearchModal } from "@/hooks/use-search-modal";
import { cn } from "@/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import Image from "next/image";
import React from "react";
import SquareLogo from "../../public/images/square-logo.webp";
import { Icons } from "../icons";
import { ScrollArea } from "../ui/scroll-area";

export function SearchModal() {
  const searchModal = useSearchModal();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchModal.onOpen();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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
      <CommandInput placeholder="Search on iOS..." />

      <CommandEmpty>No results found.</CommandEmpty>

      <section className="flex pl-3 pt-2 h-full">
        <aside className="hidden w-60 shrink-0 flex-col items-stretch gap-y-1 pt-3 pb-5 md:flex">
          <Button
            variant="ghost"
            className="flex items-center justify-start gap-x-3 py-2 pl-2 pr-3 h-14"
          >
            <div className="flex justify-center items-center border size-10 rounded-xl bg-background">
              <Icons.billing className="size-4" />
            </div>
            <span>Button</span>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center justify-start gap-x-3 py-2 pl-2 pr-3 h-14"
          >
            <div className="flex justify-center items-center border size-10 rounded-xl bg-background">
              <Icons.billing className="size-4" />
            </div>
            <span>Button</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center justify-start gap-x-3 py-2 pl-2 pr-3 h-14"
          >
            <div className="flex justify-center items-center border size-10 rounded-xl bg-background">
              <Icons.billing className="size-4" />
            </div>
            <span>Button</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center justify-start gap-x-3 py-2 pl-2 pr-3 h-14"
          >
            <div className="flex justify-center items-center border size-10 rounded-xl bg-background">
              <Icons.billing className="size-4" />
            </div>
            <span>Button</span>
          </Button>
        </aside>

        <ScrollArea>
          <CommandList className="relative size-full !max-h-none px-3 pb-20">
            <CommandItem className="absolute inset-0 z-0 !bg-transparent !text-transparent">
              hidden item
            </CommandItem>

            <TrendingApps />
            <Screens />
            <UiElements />
            <Flows />
            <TextInScreenshot />
          </CommandList>
        </ScrollArea>
      </section>
    </CommandDialog>
  );
}

function TrendingApps() {
  return (
    <CommandGroup heading="Apps">
      <div className="flex gap-x-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <CommandItem key={index} className="group !p-0 !bg-transparent">
            <div className="shrink-0 z-10 rounded-t-2xl overflow-hidden md:h-16">
              <div className="flex flex-col items-center gap-y-1 md:group-hover:-translate-y-5 md:group-data-selected:-translate-y-5 transition-transform duration-300 ease-out cursor-pointer">
                <Image
                  src={SquareLogo}
                  alt="square-logo"
                  width={200}
                  height={200}
                  className="shrink-0 rounded-2xl overflow-hidden size-16 object-cover"
                  priority
                />
                <span className="shrink-0 text-xs text-center truncate font-normal text-muted-foreground">
                  Name {index}
                </span>
              </div>
            </div>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

function Screens() {
  return (
    <CommandGroup heading="Screens">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 max-md:[&>*:nth-child(n+7)]:hidden md:[&>*:nth-child(3)]:col-span-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <CommandItem
            key={index}
            className="group !p-0 !bg-transparent data-selected"
          >
            <div className="flex flex-col justify-between items-start p-3 bg-muted data-selected-bg rounded-2xl overflow-hidden size-full max-h-52 md:max-h-32 aspect-square cursor-pointer transition duration-300 ease-out">
              <span className="text-sm">Screens {index}</span>
              <Icons.bookmark className="size-9 ml-2 mb-3" />
            </div>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

function UiElements() {
  return (
    <CommandGroup heading="UI Elements">
      <div className="flex gap-2  w-full flex-wrap">
        {Array.from({ length: 7 }).map((_, index) => (
          <CommandItem
            key={index}
            className="!p-0 !bg-transparent data-selected"
          >
            <Button
              variant="secondary"
              size="sm"
              className="text-sm px-4 data-selected-bg"
              tabIndex={-1}
            >
              Lorem {index}
            </Button>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

function Flows() {
  return (
    <CommandGroup heading="Flows">
      <div className="grid grid-cols-3 md:grid-cols-4 max-md:[&>*:nth-child(n+4)]:hidden gap-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <CommandItem
            key={index}
            className="!p-0 !bg-transparent data-selected"
          >
            <div className="flex flex-col justify-between items-start p-3 bg-muted hover:bg-muted-foreground/30 data-selected-bg rounded-2xl overflow-hidden size-full max-h-52 aspect-square cursor-pointer transition duration-300 ease-out">
              <span className="text-sm">Text {index}</span>
              <Icons.bookmark className="size-9 ml-2 mb-3" />
            </div>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

function TextInScreenshot() {
  return (
    <CommandGroup heading="Text In Screenshot">
      <div className="flex gap-2  w-full flex-wrap">
        {Array.from({ length: 5 }).map((_, index) => (
          <CommandItem
            key={index}
            className="!p-0 !bg-transparent data-selected"
          >
            <Button
              variant="secondary"
              size="sm"
              className="text-sm px-4 data-selected-bg"
              tabIndex={-1}
            >
              Screenshot {index}
            </Button>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}
