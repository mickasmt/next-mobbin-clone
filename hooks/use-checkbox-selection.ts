import { create } from "zustand";

type CheckboxSelectionStore = {
  selectedItems: number[];
  toggleItem: (item: number) => void;
  clearSelection: () => void;
};

export const useCheckboxSelection = create<CheckboxSelectionStore>((set) => ({
  selectedItems: [],
  toggleItem: (item) =>
    set((state) => ({
      selectedItems: state.selectedItems.includes(item)
        ? state.selectedItems.filter((i) => i !== item)
        : [...state.selectedItems, item],
    })),
  clearSelection: () => set({ selectedItems: [] }),
}));