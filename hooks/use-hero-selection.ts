import { create } from "zustand";

interface useHeroStore {
  isChecked: boolean;
  toggleCheckbox: () => void;
}

export const useHero = create<useHeroStore>((set) => ({
  isChecked: false,
  toggleCheckbox: () => set((state) => ({ isChecked: !state.isChecked })),
}));