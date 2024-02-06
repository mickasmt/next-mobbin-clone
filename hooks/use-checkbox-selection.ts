import { useAtom, atom } from "jotai";

const selectedItemsAtom = atom<number[]>([]);

export function useCheckboxSelection() {
  return useAtom(selectedItemsAtom);
}
