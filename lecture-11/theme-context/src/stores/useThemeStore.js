import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useThemeStore = create(
  devtools(
    persist((set) => ({
      value: "light",
      toggleTheme: () =>
        set((state) => ({
          value: state.value === "light" ? "dark" : "light",
        })),
    })),
  ),
);

export default useThemeStore;
