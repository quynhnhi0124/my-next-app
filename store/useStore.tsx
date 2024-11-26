import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StateStorage } from 'zustand/middleware';
import Cookies from "js-cookie";

interface State {
  openNav: boolean,
  setOpenNav: () => void;
}

const cookieStorage: StateStorage = {
  getItem: (name: string) => {
    return Cookies.get(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    console.log(2);
    
    Cookies.set(name, value);
  },
  removeItem: (name: string) => {
    Cookies.remove(name);
  }
}

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      openNav: false,
      setOpenNav: () => set({openNav: !get().openNav}),
    }),
    {
      name: "openNav",
      partialize: (state) => ({openNav: state.openNav}),
      storage: createJSONStorage(() => cookieStorage)
    }
  )
)