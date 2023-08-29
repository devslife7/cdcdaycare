"use client"
import translator from "@/data/translator.json"
import { useGlobalStore } from "@/state/store"

export default function Translator({ content = "heroSubtext" }: { content: keyof typeof translator }) {
    const { lang } = useGlobalStore()
    return translator[content][lang].toString()
}
