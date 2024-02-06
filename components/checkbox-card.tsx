"use client";

import { ContextMenuCard } from "@/components/context-menu-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneScreen from "../public/images/phone-screen.webp";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useCheckboxSelection } from "@/hooks/use-checkbox-selection";

export function CheckboxCard({ id }: { id: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useCheckboxSelection();

  const handleCheckboxChange = (item: number) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <ContextMenuCard>
      <TooltipProvider delayDuration={0}>
        <div className="group relative flex flex-col gap-y-3 md:gap-y-4">
          <div className="relative rounded-[28px] overflow-hidden w-full">
            <Image
              src={PhoneScreen}
              alt="phone screen"
              width={300}
              height={800}
              className="rounded-[28px] overflow-hidden w-full h-auto max-h-[680px]"
              priority
            />

            <Link
              href="/"
              className={cn(
                "peer absolute inset-0 z-10 rounded-[28px] overflow-hidden",
                selectedItems.includes(id) && "border-2 border-blue-400"
              )}
            />

            <div
              className={cn(
                "absolute z-50 top-4 left-4 group-hover:visible",
                menuOpen || selectedItems.includes(id) ? "visible" : "invisible"
              )}
            >
              <Checkbox
                className={cn(
                  "size-9 border-2 rounded-full overflow-hidden data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
                )}
                checked={selectedItems.includes(id)}
                onCheckedChange={() => handleCheckboxChange(id)}
              />
            </div>

            <div
              className={cn(
                "absolute z-40 top-4 w-full inset-x-0 group-hover:visible",
                menuOpen ? "visible" : "invisible"
              )}
            >
              <div className="flex items-center justify-end px-4">
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
                      <DropdownMenuContent
                        align="end"
                        sideOffset={5}
                        className="w-64"
                      >
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
                "hidden md:block absolute inset-0 z-0 pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity ease-out",
                menuOpen ? "opacity-100" : "opacity-0"
              )}
              style={{
                background:
                  "linear-gradient(rgba(21, 21, 21, 0.5) 0%, rgba(21, 21, 21, 0) 20.83%, rgba(21, 21, 21, 0) 79.17%, rgba(21, 21, 21, 0.5) 100%)",
              }}
            />

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
