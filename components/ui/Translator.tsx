"use client"
import translator from "@/data/translator.json"
import { useStore } from "@/state/store"

export default function Translator({ content = "heroSubtext" }: { content: keyof typeof translator }) {
    const { lang } = useStore()
    return translator[content][lang].toString()
}
