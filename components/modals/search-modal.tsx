"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSearchModal } from "@/hooks/use-search-modal";
import { cn } from "@/lib/utils";

export function SearchModal() {
  const searchModal = useSearchModal();
  const { isDesktop } = useMediaQuery();

  return (
    <Dialog open={searchModal.isOpen} onOpenChange={searchModal.onClose}>
      <DialogContent
        closeButtonDisabled={true}
        className={cn(
          "max-w-full sm:max-w-[816px] !rounded-none md:!rounded-3xl !top-[19.6%]",
          "data-[state=closed]:max-md:!slide-out-to-bottom-5 data-[state=open]:max-md:!slide-in-from-bottom-5",
          "data-[state=closed]:max-md:!zoom-out-100 data-[state=open]:max-md:!zoom-in-100"
        )}
      >
        <Content />
      </DialogContent>
    </Dialog>
  );
}

function Content() {
  return (
    <div className="h-72">
      <Button>asdasd</Button>
    </div>
  );
}
