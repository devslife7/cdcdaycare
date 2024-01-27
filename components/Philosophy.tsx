import Image from "next/image"
import philoSection from "@/public/images/ball-pit-kid.webp"
import FadeIn from "./ui/fadeIn"

export default function Philosophy({ dictionary }: { dictionary: any }) {
  return (
    <section id="philosophy" className="bg-secondary py-10 lg:py-24 text-white">
      <FadeIn className="my-container grid lg:grid-cols-2 gap-16 justify-center content-center">
        <div className="max-w-2xl space-y-6 lg:px-4 mx-auto">
          <h2 className="text-primary text-3xl lg:text-5xl relative">
            {dictionary.title}
            <span className=" absolute left-0 top-2">___</span>
          </h2>
          <p className="lg:text-lg lg:leading-loose font-extralight leading-relaxed text-primary-100">
            {dictionary.subtitle}
          </p>
        </div>
        <div className="max-w-2xl relative h-96">
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
