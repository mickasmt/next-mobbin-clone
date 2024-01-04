"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
// import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { HoverCardPortal } from "@radix-ui/react-hover-card";
import Image from "next/image";

const buttons = [
  "Artificial Intelligence",
  "Education",
  "Food & Drink",
  "Health & Fitness",
  "Lifestyle",
  "Entertainment",
  "Travel & Transportation",
];

const ScreensContent = () => {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 rounded-2xl p-4 bg-foreground/5 dark:bg-foreground/10 grid-cols-3 w-full">
        <div className="overflow-hidden rounded-lg h-56 w-full">
          <Image
            className="h-full w-full object-cover"
            src="/images/phone-screen.webp"
            alt="Phone Screen App"
            width={400}
            height={863}
          />
        </div>
        <div className="overflow-hidden rounded-lg h-56 w-full">
          <Image
            className="h-full w-full object-cover"
            src="/images/phone-screen.webp"
            alt="Phone Screen App"
            width={400}
            height={863}
          />
        </div>
        <div className="overflow-hidden rounded-lg h-56 w-full">
          <Image
            className="h-full w-full object-cover"
            src="/images/phone-screen.webp"
            alt="Phone Screen App"
            width={400}
            height={863}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground font-normal">
        My Account &amp; Profile screens display the user’s profile information
        and/or account settings.
      </p>
    </div>
  );
};

const WebContent = () => {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl p-4 bg-foreground/5 dark:bg-foreground/10 w-full">
        <div className="overflow-hidden rounded-lg h-56 w-full">
          <Image
            className="h-full w-full object-cover"
            src="/images/desktop-screen.webp"
            alt="Phone Screen App"
            width={1256}
            height={863}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground font-normal">
        My Account &amp; Profile screens display the user’s profile information
        and/or account settings.
      </p>
    </div>
  );
};

export const ButtonHoverCard = () => {
  const [openCard, setOpenCard] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");

  const handleMouseEnter = (button: string) => {
    setActiveButton(button);
    setOpenCard(true);
  };

  const handleMouseLeave = () => {
    setActiveButton("");
    setOpenCard(false);
  };


  return (
    <div className="relative flex gap-2 py-3" onMouseLeave={handleMouseLeave}>
      {buttons.map((button, index) => (
        <HoverCard open={openCard && activeButton === button} key={index} openDelay={1000} closeDelay={1000}>
          <HoverCardTrigger
            onMouseEnter={() => handleMouseEnter(button)}
            asChild
          >
            <Button variant="outline" size="lg" className="rounded-full">
              {button}
            </Button>
          </HoverCardTrigger>

          {openCard && activeButton === button && (
            <HoverCardPortal>
              <HoverCardContent
                align="center"
                sideOffset={10}
                className={cn(
                  "w-[480px] h-auto rounded-2xl border overflow-hidden transition duration-700",
                )}
                asChild
              >
                {/* {WebContent()} */}
                {ScreensContent()}
              </HoverCardContent>
            </HoverCardPortal>
          )}
        </HoverCard>
      ))}
    </div>
  );
};
