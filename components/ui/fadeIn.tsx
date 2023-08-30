"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

type Props = {
    children: React.ReactNode
    className?: string
}

export default function FadeIn({ children, className }: Props) {
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
            transition={{ duration: 1.1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
