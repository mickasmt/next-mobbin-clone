"use client";

import { ContextMenuCard } from "@/components/context-menu-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneScreen from "../public/images/phone-screen.webp";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CheckboxCard() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ContextMenuCard>
      <TooltipProvider delayDuration={0}>
        <div className="group relative flex flex-col gap-y-3 md:gap-y-4">
          <Link href="/" className="peer absolute inset-0 z-10" />

          <div className="relative rounded-[28px] overflow-hidden w-full">
            <Image
              src={PhoneScreen}
              alt="phone screen"
              width={300}
              height={800}
              className="rounded-3xl overflow-hidden w-full h-auto max-h-[680px]"
              priority
            />

            <div
              className={cn(
                "absolute z-50 top-4 w-full inset-x-0 group-hover:visible",
                menuOpen ? "visible" : "invisible"
              )}
            >
              <div className="flex items-center justify-between px-5">
                <span>checkbox</span>

                <div
                  className={cn(
                    "gap-x-2 group-focus-within:flex group-hover:flex transition ease-out",
                    menuOpen ? "flex" : "hidden"
                  )}
                >
                  <Tooltip>
                    <DropdownMenu
                      open={menuOpen}
                      onOpenChange={() => setMenuOpen(!menuOpen)}
                    >
                      <DropdownMenuTrigger asChild>
                        <TooltipTrigger asChild>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-xl z-50 bg-transparent hover:bg-transparent"
                          >
                            <Icons.options className="size-5" />
                          </Button>
                        </TooltipTrigger>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" sideOffset={5} className="w-64">
                        <DropdownMenuItem asChild>
                          <Link
                            className="flex justify-start items-center gap-x-2"
                            href="/"
                          >
                            <Icons.media className="size-5" />
                            <span>Copy screen</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            className="flex justify-start items-center gap-x-2"
                            href="/"
                          >
                            <Icons.download className="size-5" />
                            <span>Download as PNG</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            className="flex justify-start items-center gap-x-2"
                            href="/"
                          >
                            <Icons.link className="size-5" />
                            <span>Copy screen link</span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <TooltipPortal>
                      <TooltipContent className="rounded-lg text-xs">
                        <p>Download & Share</p>
                      </TooltipContent>
                    </TooltipPortal>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "absolute z-50 bottom-5 w-full inset-x-0 group-hover:visible",
                menuOpen ? "visible" : "invisible"
              )}
            >
              <div className="flex gap-x-3 px-5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      className="w-full rounded-xl z-50"
                      onClick={() => alert("Copied!!")}
                    >
                      Copy
                    </Button>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      sideOffset={6}
                      className="rounded-lg text-xs"
                    >
                      <p>Copy screen to clipboard</p>
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      className="w-full rounded-xl z-50"
                      onClick={() => alert("Saved!!")}
                    >
                      Save
                    </Button>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      sideOffset={6}
                      className="rounded-lg text-xs"
                    >
                      <p>Save to collection</p>
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-2 w-full z-20">
            <div className="shrink-0 size-6 bg-[#eaeaea] rounded-lg overflow-hidden" />

            <div className="flex grow flex-col">
              <Link href="/" className="line-clamp-1 hover:underline">
                Fake Name App
              </Link>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </ContextMenuCard>
  );
}
