"use client"
import classNames from "classnames"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
type Props = {
    children: string | JSX.Element | JSX.Element[]
    width?: "fit-content" | "100%"
    className?: string
}

export default function RevealMotion({ children, width = "fit-content", className }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])
    return (
        <motion.div
            ref={ref}
            variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={classNames(className, "relative w-full")}
        >
            {children}
        </motion.div>
    )
}
