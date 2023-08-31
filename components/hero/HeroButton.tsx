"use client"
import { Link as ScrollLink } from "react-scroll"
import { buttonStyles } from "../ui/button"
import Translator from "../ui/translator"

export default function HeroButton() {
    return (
        <ScrollLink to="contact" className={buttonStyles({ size: "lg" })}>
            <Translator content="heroButton" />
            <Translator content="heroButton" />
            <Translator content="heroButton" />
            <Translator content="heroButton" />
        </ScrollLink>
    )
}
