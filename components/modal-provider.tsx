"use client";

import { SearchModal } from "@/components/modals/search-modal";
import { useMounted } from "@/hooks/use-mounted";

export const ModalProvider = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SearchModal />
      {/* add your own modals here... */}
    </>
  );
};
