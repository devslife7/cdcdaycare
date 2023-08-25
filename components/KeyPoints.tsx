import { MdFamilyRestroom } from "react-icons/md"
import { BsFillRocketFill } from "react-icons/bs"
import { AiOutlineSafety } from "react-icons/ai"

export default function KeyPoints() {
    return (
        <div className="my-container">
            <div className="flex flex-wrap justify-start gap-12 my-20 md:gap-0 lg:justify-evenly">
                <div className="max-w-xs p-2 md:text-center">
                    <BsFillRocketFill className="mb-6 md:mx-auto text-7xl text-purple" />
                    <h1 className="mb-1 lg:mb-3 text-2xl">Mission</h1>
                    <p className="opacity-80 font-light">
                        Our mission is to create a nurturing and stimulating environment where children can
                        explore, learn, and grow.
                    </p>
                </div>
                <div className="max-w-xs p-2 md:text-center">
                    <AiOutlineSafety className="mb-6 md:mx-auto text-7xl text-green-400" />
                    <h1 className="mb-1 lg:mb-3 text-2xl">Safety</h1>
                    <p className="opacity-80 font-light">
                        Safety is our top priority. Our daycare is equipped with a secure entry system, and
                        our staff undergoes regular safety training.
                    </p>
                </div>
                <div className="max-w-xs p-2 md:text-center">
                    <MdFamilyRestroom className="mb-6 md:mx-auto text-7xl text-orange" />
                    <h1 className="mb-1 lg:mb-3 text-2xl">Parents</h1>
                    <p className="opacity-80 font-light">
                        Regular parent-teacher meetings, progress reports, and family events allow parents to
                        actively participate in their child's learning journey
                    </p>
                </div>
            </div>
        </div>
    )
}
