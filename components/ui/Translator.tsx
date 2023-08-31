"use client"
import translator from "@/data/translator.json"
import { useGlobalStore } from "@/state/store"

const Translator = ({ content }: { content: keyof typeof translator }) => {
    const { lang } = useGlobalStore()
    return translator[content][lang].toString()
}

export { Translator }
