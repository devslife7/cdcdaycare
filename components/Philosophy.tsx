import Image from "next/image"
import philoSection from "@/public/images/philosophy-section.jpg"
import FadeIn from "./ui/fadeIn"
import { Translator } from "./ui/translator"

export default function Philosophy() {
    return (
        <section id="philosophy" className="bg-secondary py-24 text-white">
            <FadeIn className="my-container lg:flex lg:justify-evenly space-y-10">
                <div className="max-w-xl space-y-6 lg:px-4 mx-auto">
                    <h2 className="text-primary text-5xl mt-8 relative">
                        <Translator content="philosophyTitle" />
                        <span className=" absolute left-0 top-2">___</span>
                    </h2>
                    <p className="text-xl font-extralight leading-10">
                        <Translator content="philosophySubtext" />
                    </p>
                </div>
                <Image className="mx-auto" src={philoSection} unoptimized alt="Child doing homework" />
            </FadeIn>
        </section>
    )
}
