import { MdFamilyRestroom } from "react-icons/md"
import { BsFillRocketFill } from "react-icons/bs"
import { AiOutlineSafety } from "react-icons/ai"
import FadeIn from "./ui/fadeIn"
import Transformer from "./ui/transformer"

const KeyPoints = () => (
    <section className="my-container">
        <FadeIn className="flex flex-wrap justify-start gap-12 my-20 md:gap-0 lg:justify-evenly">
            <div className="max-w-xs p-2 text-center mx-auto">
                <BsFillRocketFill className="mb-6 mx-auto text-7xl text-purple" />
                <h1 className="mb-1 lg:mb-3 text-2xl">
                    <Transformer content="keySectionMissionTitle" />
                </h1>
                <p className="opacity-80 font-light">
                    <Transformer content="keySectionMissionSubtitle" />
                </p>
            </div>
            <div className="max-w-xs p-2 text-center mx-auto">
                <AiOutlineSafety className="mb-6 mx-auto text-7xl text-green-400" />
                <h1 className="mb-1 lg:mb-3 text-2xl">
                    <Transformer content="keySectionSafetyTitle" />
                </h1>
                <p className="opacity-80 font-light">
                    <Transformer content="keySectionSafetySubtitle" />
                </p>
            </div>
            <div className="max-w-xs p-2 text-center mx-auto">
                <MdFamilyRestroom className="mb-6 mx-auto text-7xl text-orange" />
                <h1 className="mb-1 lg:mb-3 text-2xl">
                    <Transformer content="keySectionParentsTitle" />
                </h1>
                <p className="opacity-80 font-light">
                    <Transformer content="keySectionParentsSubtitle" />
                </p>
            </div>
        </FadeIn>
    </section>
)

export default KeyPoints
