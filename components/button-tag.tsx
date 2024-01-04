"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ButtonTagProps {
  title: string;
}


export const ButtonTag = ({ title }: ButtonTagProps) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
        }}
        asChild
      >
        <Button variant="outline" size="lg" className="rounded-full">
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[480px] h-auto rounded-2xl overflow-hidden"
        updatePositionStrategy="optimized"
      >
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

// screens
// const screens = () => (
// 	<aside className="flex flex-col gap-16 rounded-16 p-16 shadow-dropdown light:bg-bg-primary dark:bg-bg-secondary w-[--radix-hover-card-content-available-width] min-w-[296px] max-w-[400px] data-state-open:animate-in data-state-closed:animate-out [--tw-in-duration:150ms] [--tw-out-duration:150ms] [--tw-enter-opacity:0] [--tw-exit-opacity:0] min-720:[--tw-enter-scale:0.96] min-720:[--tw-exit-scale:0.96]" data-side="bottom" data-align="center" data-state="open" style="--radix-hover-card-content-transform-origin: var(--radix-popper-transform-origin); --radix-hover-card-content-available-width: var(--radix-popper-available-width); --radix-hover-card-content-available-height: var(--radix-popper-available-height); --radix-hover-card-trigger-width: var(--radix-popper-anchor-width); --radix-hover-card-trigger-height: var(--radix-popper-anchor-height);">
//       <div className="grid gap-12 rounded-16 p-16 light:bg-bg-secondary dark:bg-bg-tertiary grid-cols-1">
//          <div data-radix-aspect-ratio-wrapper="" style="position: relative; width: 100%; padding-bottom: 62.4376%;">
//             <div className="relative overflow-hidden rounded-8 bg-bg-secondary after:absolute after:inset-0 after:rounded-8 after:shadow-image-inset" style="position: absolute; inset: 0px;"><img src="https://upcdn.io/FW25bBB/image/static/dictionary/web_screen_patterns/dashboard_01.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover" alt="Dashboard example" className="h-full w-full object-cover"></div>
//          </div>
//       </div>
//       <p className="text-body-small text-fg-secondary">Dashboard pattern provides a high-level overview of data.</p>
//       <span style="position: absolute; top: 0px; transform-origin: center 0px; transform: rotate(180deg); left: 0px;">
//          <svg className="invisible w-[--radix-hover-card-content-available-width] min-w-[296px] max-w-[400px]" width="10" height="8" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;">
//             <polygon points="0,0 30,0 15,10"></polygon>
//          </svg>
//       </span>
//    </aside>
// )

// apps
// {
  /* <div data-radix-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(27px, 278px); min-width: max-content; z-index: auto; --radix-popper-available-width: 1031px; --radix-popper-available-height: 577px; --radix-popper-anchor-width: 100px; --radix-popper-anchor-height: 44px; --radix-popper-transform-origin: 244px -8px;">
   <aside class="flex flex-col gap-16 rounded-16 p-16 shadow-dropdown light:bg-bg-primary dark:bg-bg-secondary w-[--radix-hover-card-content-available-width] min-w-[296px] max-w-[488px] data-state-open:animate-in data-state-closed:animate-out [--tw-in-duration:150ms] [--tw-out-duration:150ms] [--tw-enter-opacity:0] [--tw-exit-opacity:0] min-720:[--tw-enter-scale:0.96] min-720:[--tw-exit-scale:0.96]" data-side="bottom" data-align="center" data-state="open" style="--radix-hover-card-content-transform-origin: var(--radix-popper-transform-origin); --radix-hover-card-content-available-width: var(--radix-popper-available-width); --radix-hover-card-content-available-height: var(--radix-popper-available-height); --radix-hover-card-trigger-width: var(--radix-popper-anchor-width); --radix-hover-card-trigger-height: var(--radix-popper-anchor-height);">
      <div class="grid gap-12 grid-cols-2">
         <div class="relative w-full overflow-hidden rounded-16 p-20 light:bg-bg-secondary dark:bg-bg-tertiary h-[133px]">
            <div data-radix-aspect-ratio-wrapper="" style="position: relative; width: 100%; padding-bottom: 62.4376%;">
               <div class="relative after:absolute after:inset-0 after:shadow-image-inset after:rounded-t-8" style="position: absolute; inset: 0px;">
                  <img src="https://upcdn.io/FW25bBB/image/content/app_screens/48b6edc4-5fb1-45b3-986e-2c63af327598.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover" alt="Cake Equity example" class="h-full w-full object-cover rounded-t-8">
                  <div class="absolute -left-8 -top-8 z-10 shadow rounded-12">
                     <div class="h-40 w-40 relative flex-shrink-0 overflow-hidden after:absolute after:inset-0 after:rounded-[--border-radius] after:shadow-logo-inset" style="--border-radius: 12px; border-radius: 12px;"><img class="h-full w-full transition-opacity" crossorigin="anonymous" src="https://upcdn.io/FW25bBB/image/content/app_logos/b20de838-8f97-48ef-bba1-2094a5b717a8.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover" alt="Cake Equity logo"></div>
                  </div>
               </div>
            </div>
         </div>
         <div class="relative w-full overflow-hidden rounded-16 p-20 light:bg-bg-secondary dark:bg-bg-tertiary h-[133px]">
            <div data-radix-aspect-ratio-wrapper="" style="position: relative; width: 100%; padding-bottom: 62.4376%;">
               <div class="relative after:absolute after:inset-0 after:shadow-image-inset after:rounded-t-8" style="position: absolute; inset: 0px;">
                  <img src="https://upcdn.io/FW25bBB/image/content/app_screens/bb75c187-de36-4cca-a1a3-23ec9b0de614.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover" alt="Canny example" class="h-full w-full object-cover rounded-t-8">
                  <div class="absolute -left-8 -top-8 z-10 shadow rounded-12">
                     <div class="h-40 w-40 relative flex-shrink-0 overflow-hidden after:absolute after:inset-0 after:rounded-[--border-radius] after:shadow-logo-inset" style="--border-radius: 12px; border-radius: 12px;"><img class="h-full w-full transition-opacity" crossorigin="anonymous" src="https://upcdn.io/FW25bBB/image/content/app_logos/fed39ee8-0e3f-4f40-b0e8-6fe38ea5818f.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover" alt="Canny logo"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="text-body-small text-fg-secondary">Business apps assist with running a business or provide a means to collaborate, edit, or share content.</p>
      <span style="position: absolute; top: 0px; transform-origin: center 0px; transform: rotate(180deg); left: 0px;">
         <svg class="invisible w-[--radix-hover-card-content-available-width] min-w-[296px] max-w-[488px]" width="10" height="8" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block;">
            <polygon points="0,0 30,0 15,10"></polygon>
         </svg>
      </span>
   </aside>
</div> */
// }
