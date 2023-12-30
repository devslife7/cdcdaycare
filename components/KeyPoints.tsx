import { MdFamilyRestroom } from "react-icons/md"
import { BsFillRocketFill } from "react-icons/bs"
import { AiOutlineSafety } from "react-icons/ai"
import FadeIn from "./ui/fadeIn"
import Translator from "./ui/translator"

const KeyPoints = ({ dictionary }: { dictionary: any }) => (
  <section className="my-container">
    <FadeIn className="flex flex-wrap justify-start gap-12 my-20 md:gap-0 lg:justify-evenly">
      <div className="max-w-xs p-2 text-center mx-auto">
        <BsFillRocketFill className="mb-6 mx-auto text-7xl text-purple" />
        <h1 className="mb-1 lg:mb-3 text-2xl">
          <Translator content="keySectionMissionTitle" />
        </h1>
        <p className="opacity-80 font-light">
          <Translator content="keySectionMissionSubtitle" />
        </p>
      </div>
      <div className="max-w-xs p-2 text-center mx-auto">
        <AiOutlineSafety className="mb-6 mx-auto text-7xl text-green-400" />
        <h1 className="mb-1 lg:mb-3 text-2xl">
          <Translator content="keySectionSafetyTitle" />
        </h1>
        <p className="opacity-80 font-light">
          <Translator content="keySectionSafetySubtitle" />
        </p>
      </div>
      <div className="max-w-xs p-2 text-center mx-auto">
        <MdFamilyRestroom className="mb-6 mx-auto text-7xl text-orange" />
        <h1 className="mb-1 lg:mb-3 text-2xl">
          <Translator content="keySectionParentsTitle" />
        </h1>
        <p className="opacity-80 font-light">
          <Translator content="keySectionParentsSubtitle" />
        </p>
      </div>
    </FadeIn>
  </section>
)

export default KeyPoints
