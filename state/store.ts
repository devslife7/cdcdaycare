"use client"
import { create } from "zustand"

type StoreType = {
    name: string
    price: number
    carTotals: number
    lang: "eng" | "esp"
    changeLang: (arg: "eng" | "esp") => void
}
export const useStore = create<StoreType>(set => ({
    name: "",
    price: 0,
    carTotals: 0,
    lang: "eng",
    changeLang: (lang: "eng" | "esp") => set({ lang }),
}))
