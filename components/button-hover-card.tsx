"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { HoverCardPortal } from "@radix-ui/react-hover-card";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const buttons = [
  "Artificial Intelligence",
  "Education",
  "Food & Drink",
  "Health & Fitness",
  "Lifestyle",
  "Entertainment",
  "Travel & Transportation",
];

const ScreensContent = ({ name }: { name: string }) => {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 rounded-2xl p-4 bg-foreground/5 dark:bg-foreground/10 grid-cols-3 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg h-56 w-full">
            <Image
              className="h-full w-full object-cover"
              src="/images/phone-screen.webp"
              alt="Phone Screen App"
              width={400}
              height={863}
              priority
            />
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground font-normal">
        <b>{name}</b> - Screens display the user’s profile information and/or
        account settings.
      </p>
    </div>
  );
};

const WebContent = ({ name }: { name: string }) => {
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
        <b>{name}</b> - Screens display the user’s profile information and/or
        account settings.
      </p>
    </div>
  );
};

export const ButtonHoverCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");

  const handleMouseEnter = (button: string) => {
    setActiveButton(button);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveButton("");
    setIsOpen(false);
  };

  return (
    <div className="relative flex gap-2 py-3" onMouseLeave={handleMouseLeave}>
      {buttons.map((button, index) => (
        <HoverCard
          open={isOpen && activeButton === button}
          openDelay={2000}
          closeDelay={2000}
          key={button}
        >
          <HoverCardTrigger
            onMouseEnter={() => handleMouseEnter(button)}
            asChild
          >
            <Button variant="outline" size="lg" className="rounded-full" asChild>
            <motion.div layout>
              {button}
              </motion.div>
            </Button>
          </HoverCardTrigger>

          <HoverCardPortal>
            {/* <AnimatePresence key={button}> */}
              {isOpen ? (
                <HoverCardContent
                  key={button}
                  align="center"
                  sideOffset={12}
                  className={cn(
                    "w-full h-auto rounded-2xl border overflow-hidden max-w-[400px]"
                  )}
                  asChild
                  forceMount
                >
                  <motion.div
                    layout
                    layoutId="hover"
                    variants={{
                      closed: {
                        opacity: 0,
                        scale: 0.9,
                      },
                      open: {
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{
                      duration: isOpen ? 0.5 : 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <ScreensContent name={button} />
                  </motion.div>
                </HoverCardContent>
              ) : null}
            {/* </AnimatePresence> */}
          </HoverCardPortal>
        </HoverCard>
      ))}
    </div>
  );
};
