/*
  Install dependencies:
    npm install framer-motion
    npm install classnames
*/

"use client"
import { useEffect, useRef } from "react"
import classNames from "classnames"
import { motion, useAnimation, useInView } from "framer-motion"

type Props = {
    children: string | JSX.Element | JSX.Element[]
    className?: string
}

export default function RevealMotion({ children, className }: Props) {
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
            transition={{ duration: 1.2, delay: 0.2 }}
            className={classNames(className, "relative w-full")}
        >
            {children}
        </motion.div>
    )
}
