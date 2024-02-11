"use client";

import { ScreensContent } from "@/components/hover-card-content";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { categoriesCommand, categoriesList } from "@/lib/_data";
import { cn } from "@/lib/utils";
import SquareLogo from "@/public/images/square-logo.webp";
import { HoverCardPortal } from "@radix-ui/react-hover-card";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CommandCategoriesListProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function CommandCategoriesList({
  category,
  setCategory,
}: CommandCategoriesListProps) {
  return (
    <aside className="hidden w-60 shrink-0 flex-col items-stretch gap-y-1 pt-3 pb-5 md:flex">
      {categoriesCommand.map(({ key, label, icon }) => (
        <Button
          key={key}
          variant="ghost"
          className={cn(
            "flex items-center justify-start gap-x-3 py-2 pl-2 pr-3 h-14 focus-visible:ring-0",
            category === key ? "bg-accent" : ""
          )}
          onClick={() => setCategory(key)}
          tabIndex={-1}
        >
          <div className="flex justify-center items-center border size-10 rounded-xl bg-background">
            {icon}
          </div>
          {label}
        </Button>
      ))}
    </aside>
  );
}

export function Trending() {
  return (
    <>
      <Apps />
      <Screens />
      <UiElements />
      <Flows />
      <TextInScreenshot />
    </>
  );
}

export function ItemsLines({ title }: { title: string }) {
  return (
    <CommandGroup
      heading={title}
      className="!px-0 [&_[cmdk-group-heading]]:!px-4 [&_[cmdk-group-heading]]:!pb-0"
    >
      <div className="flex gap-0 w-full flex-wrap">
        {categoriesList.map((category, index) => (
          <CommandItem
            key={category}
            className="w-full cursor-pointer rounded-xl !px-4 !py-2 data-selected"
          >
            <span className="grow truncate text-base font-medium">
              {category}
            </span>
            <span className="text-sm text-muted-foreground">
              {(index + 1) * 17}
            </span>
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

export function ItemsLinesHoverCard({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("");
  const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (selectedCat && isLargeDesktop) {
      setOpen(true);
    } else setOpen(false);
  }, [selectedCat, isLargeDesktop]);

  const handleItemHover = (category: string) => {
    console.log(category)
    if(isLargeDesktop) setOpen(true);
    setSelectedCat(category);
  };

  return (
    <CommandGroup
      heading={title}
      className="!px-0 [&_[cmdk-group-heading]]:!px-4 [&_[cmdk-group-heading]]:!pb-0"
    >
      <div className="flex gap-0 w-full flex-wrap">
        {categoriesList.map((category, index) => (
          <HoverCard
            open={open && selectedCat === category}
            openDelay={0}
            key={category}
          >
            <HoverCardTrigger asChild>
              <CommandItem
                className={cn(
                  "w-full cursor-pointer rounded-xl !px-4 !py-2",
                  selectedCat === category ? "bg-accent" : ""
                )}
                // ={(e) => console.log(e.currentTarget.dataset.selected)}
                onMouseOver={() => handleItemHover(category)}
                key={category}
              >
                <span className="grow truncate text-base font-medium">
                  {category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {(index + 1) * 19}
                </span>
              </CommandItem>
            </HoverCardTrigger>

            <HoverCardPortal>
              <HoverCardContent
                collisionPadding={8}
                avoidCollisions={false}
                align="start"
                // updatePositionStrategy="always"
                side="right"
                sideOffset={20}
                className={cn(
                  "rounded-2xl border w-[--radix-hover-card-content-available-width] min-w-[296px] max-w-[400px]"
                )}
              >
                <ScreensContent name={category} />
              </HoverCardContent>
            </HoverCardPortal>
          </HoverCard>
        ))}
      </div>
    </CommandGroup>
  );
}

function Apps() {
  return (
    <CommandGroup heading="Apps">
      <div className="flex flex-nowrap gap-x-2 [&_[cmdk-item]]:shrink-0">
        {Array.from({ length: 7 }).map((_, index) => (
          <CommandItem key={index} className="group !p-0 md:!bg-transparent rounded-t-2xl">
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
              className="max-md:text-sm px-4 rounded-full data-selected-bg"
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
              className="max-md:text-sm px-4 rounded-full data-selected-bg"
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
