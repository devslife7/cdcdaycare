import React, { ReactElement } from "react"
import { MdFamilyRestroom } from "react-icons/md"
import { BsFillRocketFill } from "react-icons/bs"
import { AiOutlineSafety } from "react-icons/ai"
import RevealMotion from "./shared/RevealMotion"

interface KeyPointProps {
    icon: ReactElement
    title: string
    description: string
}

const KeyPoint = ({ icon, title, description }: KeyPointProps) => (
    <div className="max-w-xs p-2 text-center mx-auto">
        {icon}
        <h1 className="mb-1 lg:mb-3 text-2xl">{title}</h1>
        <p className="opacity-80 font-light">{description}</p>
    </div>
)

const KeyPoints = () => (
    <section className="my-container">
        <div className="flex flex-wrap justify-start gap-12 my-20 md:gap-0 lg:justify-evenly">
            <KeyPoint
                icon={<BsFillRocketFill className="mb-6 mx-auto text-7xl text-purple" />}
                title="Mission"
                description="Our mission is to create a nurturing and stimulating environment where children can explore, learn, and grow."
            />
            <KeyPoint
                icon={<AiOutlineSafety className="mb-6 mx-auto text-7xl text-green-400" />}
                title="Safety"
                description="Safety is our top priority. Our daycare is equipped with a secure entry system, and our staff undergoes regular safety training."
            />
            <KeyPoint
                icon={<MdFamilyRestroom className="mb-6 mx-auto text-7xl text-orange" />}
                title="Parents"
                description="Regular parent-teacher meetings, progress reports, and family events allow parents to actively participate in their child's learning journey."
            />
        </div>
    </section>
)

export default KeyPoints
