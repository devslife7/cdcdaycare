"use client"
import { Link as ScrollLink } from "react-scroll"
import Transformer from "../ui/transformer"
// import { buttonStyles } from "../ui/button"
import { buttonStyles } from "../ui/bresser"

export default function HeroButton() {
    return (
        <ScrollLink to="contact" className={buttonStyles({ size: "lg" })}>
            <Transformer content="heroButton" />
        </ScrollLink>
    )
}
