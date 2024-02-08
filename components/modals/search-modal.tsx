"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSearchModal } from "@/hooks/use-search-modal";
import { cn } from "@/lib/utils";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import SquareLogo from "../../public/images/square-logo.webp";
import Image from "next/image";
import { Icons } from "../icons";
import React from "react";

export function SearchModal() {
  const searchModal = useSearchModal();
  // const { isDesktop } = useMediaQuery();

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
        "overflow-y-auto md:overflow-hidden !p-3"
      )}
    >
      <CommandInput placeholder="Type a command or search..." />
      
      <CommandList className="h-full">
        <CommandEmpty>No results found.</CommandEmpty>

        <TrendingApps />
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

function TrendingApps() {
  return (
    <CommandGroup heading="Trending Apps">
      <div className="flex gap-x-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <CommandItem key={index}>
            <div
              className="group shrink-0 z-10 rounded-t-2xl overflow-hidden md:h-16"
              // tabIndex={0}
            >
              <div className="flex flex-col items-center gap-y-1 group-hover:md:-translate-y-5 transition-transform duration-300 ease-out cursor-pointer">
                <Image
                  src={SquareLogo}
                  alt="square-logo"
                  width={200}
                  height={200}
                  className="shrink-0 rounded-2xl overflow-hidden size-16 object-cover"
                  priority
                />
                <span className="shrink-0 text-xs text-center truncate font-normal text-muted-foreground">
                  AppName
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
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 max-md:[&>*:nth-child(n+7)]:hidden md:[&>*:nth-child(3)]:col-span-2">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-start p-3 bg-muted hover:bg-muted-foreground/30 rounded-2xl overflow-hidden size-full max-h-52 md:max-h-32 aspect-square cursor-pointer transition duration-300 ease-out"
          tabIndex={0}
        >
          <span className="text-sm">Fake text</span>
          <Icons.bookmark className="size-9 ml-2 mb-3" />
        </div>
      ))}
    </div>
  );
}

function UiElements() {
  return (
    <div className="flex gap-2  w-full flex-wrap">
      {Array.from({ length: 7 }).map((_, index) => (
        <Button
          variant="secondary"
          size="sm"
          className="text-sm px-4"
          key={index}
        >
          Lorem ipsum
        </Button>
      ))}
    </div>
  );
}

function Flows() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 max-md:[&>*:nth-child(n+4)]:hidden gap-x-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-start p-3 bg-muted hover:bg-muted-foreground/30 rounded-2xl overflow-hidden size-full max-h-52 aspect-square cursor-pointer transition duration-300 ease-out"
          tabIndex={0}
        >
          <span className="text-sm">Fake text</span>
          <Icons.bookmark className="size-9 ml-2 mb-3" />
        </div>
      ))}
    </div>
  );
}

function TextInScreenshot() {
  return (
    <div className="flex gap-2  w-full flex-wrap">
      {Array.from({ length: 5 }).map((_, index) => (
        <Button
          variant="secondary"
          size="sm"
          className="text-sm px-4"
          key={index}
        >
          &quot;Fake words&quot;
        </Button>
      ))}
    </div>
  );
}
