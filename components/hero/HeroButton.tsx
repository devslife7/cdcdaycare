"use client"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "../shared/Button"
import Translator from "../shared/Translator"

export default function HeroButton() {
    return (
        <div>
            <ScrollLink
                className="inline-flex items-center rounded-md transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-transparent"
                to="contact"
            >
                <Button size="lg" className="lg:text-lg">
                    <Translator content="heroButton" />
                </Button>
            </ScrollLink>
        </div>
    )
}
