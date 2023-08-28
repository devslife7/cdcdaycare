"use client"
import { create } from "zustand"

type StoreType = {
    name: string
    price: number
    carTotals: number
    lang: "eng" | "esp"
    changeLang: (arg: "eng" | "esp") => void
}
const getUserLanguage = () => (localStorage.getItem("lang") === "eng" || null ? "eng" : "esp")
export const useStore = create<StoreType>(set => ({
    name: "",
    price: 0,
    carTotals: 0,
    lang: getUserLanguage(),
    changeLang: (lang: "eng" | "esp") => {
        localStorage.setItem("lang", lang)
        set({ lang })
    },
}))
