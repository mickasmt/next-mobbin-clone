"use client";

import { SearchCommandDialog } from "@/components/modals/search-command-dialog";
import { useMounted } from "@/hooks/use-mounted";

export const ModalProvider = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SearchCommandDialog />
      {/* add your own modals here... */}
    </>
  );
};
