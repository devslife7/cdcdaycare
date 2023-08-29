"use client"
import { create } from "zustand"

type StoreType = {
    lang: "eng" | "esp"
    changeLang: () => void
}
export const useGlobalStore = create<StoreType>(set => ({
    lang: "eng",
    changeLang: () => set(state => ({ lang: state.lang === "eng" ? "esp" : "eng" })),
}))
