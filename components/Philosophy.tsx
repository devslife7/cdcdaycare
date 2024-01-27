import Image from "next/image"
import philoSection from "@/public/images/ball-pit-kid.webp"
import FadeIn from "./ui/fadeIn"

export default function Philosophy({ dictionary }: { dictionary: any }) {
  return (
    <section id="philosophy" className="bg-secondary py-10 lg:py-28 text-white">
      <FadeIn className="my-container grid lg:grid-cols-2 gap-8 lg:gap-16 justify-center content-center">
        <div className="max-w-lg grid items-center">
          <div>
            <h2 className="text-primary text-3xl lg:text-5xl relative mb-4 lg:mb-6">
              {dictionary.title}
              <span className=" absolute left-0 top-2">___</span>
            </h2>
            <p className="lg:text-lg lg:leading-loose font-extralight leading-relaxed text-primary-100">
              {dictionary.subtitle}
            </p>
          </div>
        </div>
        <div className="max-w-xl relative h-[400px]">
          <Image
            className="mx-auto shadow-custom-right object-cover shadow-primary"
            fill
            src={philoSection}
            alt="Child doing homework"
          />
        </div>
      </FadeIn>
    </section>
  )
}
