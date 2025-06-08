import { create } from "zustand";
import { persist } from "zustand/middleware";
const useStore = create(
  persist(
    () => ({
      code: "",
      title: "untitled",
      theme: "hyper",
      darkMode: true,
      showBackground: true,
      language: "plaintext",
      autoDetectLanguage: false,
      fontsize: 18,
      fontStyle: "jetBrainsMono",
      padding: 64,
    }),
    { name: "user-preferences" }
  )
);
export default useStore;
