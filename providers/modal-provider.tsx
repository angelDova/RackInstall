import { create } from "zustand";

type ModalState = {
  data: ModalData;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export type ModalData = {};

export const useModal = create<ModalState>((set) => ({
  data: {},
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
