import { ReactNode } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BentoState {
  selectedElements: Array<EventTarget>;
  add: (element: EventTarget) => void;
  remove: (element: EventTarget) => void;
}

export const useBentoStore = create<BentoState>()((set) => ({
  selectedElements: [],
  add: (element) =>
    set((state) => ({
      selectedElements: [...state.selectedElements, element],
    })),
  remove: (element) =>
    set((state) => {
      const index = state.selectedElements.indexOf(element);

      console.log({ index });

      if (index > -1) {
        state.selectedElements.splice(index, 1);
      }

      return {
        selectedElements: state.selectedElements,
      };
    }),
}));
