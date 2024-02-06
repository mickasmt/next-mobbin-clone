"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useCheckboxSelection } from "@/hooks/use-checkbox-selection";

export function CheckboxToolbar() {
  const [selectedItems, setSelectedItems] = useCheckboxSelection();

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 flex justify-center p-4 z-50">
      <div
        className={cn(
          "flex h-[52px] flex-row items-center justify-between pl-4 pr-2 min-w-[420px] max-w-full bg-background rounded-2xl shadow-dropdown transition duration-300 ease-in-out pointer-events-auto select-none",
          selectedItems.length > 0
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        )}
      >
        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-body-medium-bold text-fg-primary">
          {selectedItems.length} selected
        </h2>

        <div className="flex flex-row gap-2 pl-4">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-sm rounded-xl z-50"
                  onClick={() => {
                    setSelectedItems([]);
                  }}
                >
                  Clear all
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent sideOffset={8} className="rounded-lg text-xs">
                  <p>Clear selection</p>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-2 rounded-xl z-50"
                  onClick={() => alert("Download!!")}
                >
                  <Icons.download className="size-5" />
                  <Badge className="px-2 font-medium uppercase border-none">
                    PRO
                  </Badge>
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent sideOffset={8} className="rounded-lg text-xs">
                  <p>Download as PNG</p>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full text-sm rounded-xl z-50"
                  onClick={() => alert("Copied!!")}
                >
                  Save
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent sideOffset={8} className="rounded-lg text-xs">
                  <p>Save to collection</p>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  className="w-full text-sm rounded-xl z-50"
                  onClick={() => alert("Copied!!")}
                >
                  Copy to Figma
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent sideOffset={8} className="rounded-lg text-xs">
                  <p>Paste into Mobbin&apos;s Figma plugin</p>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
