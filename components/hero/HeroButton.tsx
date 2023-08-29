"use client"
import { Link as ScrollLink } from "react-scroll"
import Translator from "../ui/translator"
import { buttonStyles } from "@/components/ui/button"

export default function HeroButton() {
    return (
        <ScrollLink to="contact" className={buttonStyles({ size: "lg" })}>
            <Translator content="heroButton" />
        </ScrollLink>
    )
}
