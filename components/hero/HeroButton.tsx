"use client"
import { Link as ScrollLink } from "react-scroll"
import { buttonStyles } from "../ui/button"

export default function HeroButton({ children }: { children: React.ReactNode }) {
  return (
    <ScrollLink to="contact" className={buttonStyles({ size: "lg" })}>
      {children}
    </ScrollLink>
  )
}
