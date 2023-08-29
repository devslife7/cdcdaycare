"use client"
import { create } from "zustand"

type GlobalStoreType = {
    lang: "eng" | "esp"
    changeLang: () => void
}
export const useGlobalStore = create<GlobalStoreType>(set => ({
    lang: "eng",
    changeLang: () => set(state => ({ lang: state.lang === "eng" ? "esp" : "eng" })),
}))
