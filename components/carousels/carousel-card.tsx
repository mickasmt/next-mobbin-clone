"use client";

import { ContextMenuCard } from "@/components/context-menu-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import PhoneScreen from "../../public/images/phone-screen.webp";

// import DesktopScreen from "/images/phone-screen.webp";

export default function CarouselCard() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ContextMenuCard>
      <div className="group relative flex flex-col gap-y-3 md:gap-y-4">
        <Link href="/" className="peer absolute inset-0 z-10" />

        <div className="rounded-3xl overflow-hidden w-full lg:bg-foreground/5 lg:group-hover:bg-foreground/10 transition duration-500 lg:p-10">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={PhoneScreen}
                    alt="phone screen"
                    width={300}
                    height={800}
                    className="rounded-3xl overflow-hidden max-h-[583px]"
                    priority={index === 0 ? true : false}
                  />
                  {/* <img src="/images/phone-screen.webp" /> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="invisible group-hover:visible -mr-20 z-10" />
            <CarouselNext className="invisible group-hover:visible z-10" />
          </Carousel>
        </div>

        <div className="flex items-center gap-x-3 w-full">
          <div className="shrink-0 h-10 w-10 bg-[#eaeaea] rounded-xl overflow-hidden" />

          <div className="flex grow flex-col">
            <span className="line-clamp-1 text-body-medium-bold underline decoration-transparent group-hover:decoration-current transition-colors ease-out">
              Fake Name App
            </span>
            <span className="line-clamp-1 text-sm text-muted-foreground font-normal">
              Fake sentence for test
            </span>
          </div>

          <div
            className={cn(
              "flex gap-x-2 md:flex invisible group-focus-within:visible group-hover:visible transition ease-out",
              menuOpen ? "visible" : ""
            )}
          >
            <Button size="icon" className="rounded-xl">
              <Icons.bookmark className="h-5 w-5" />
            </Button>

            <DropdownMenu onOpenChange={() => setMenuOpen(!menuOpen)}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-xl z-50"
                >
                  <Icons.options className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link
                    className="flex justify-start items-center gap-x-2"
                    href="/"
                  >
                    <Icons.download className="size-5" />
                    <span>Download all screens</span>
                    <Badge className="px-2 font-medium uppercase border-none">
                      PRO
                    </Badge>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="flex justify-start items-center gap-x-2"
                    href="/"
                  >
                    <Icons.link className="size-5" />
                    <span>Copy link app</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </ContextMenuCard>
  );
}
