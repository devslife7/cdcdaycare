import Image from "next/image"
import aboutUsSection from "@/public/images/daycare-toys.webp"
import FadeIn from "./ui/fadeIn"

export default function AboutUs({ dictionary }: { dictionary: any }) {
  return (
    <section id="about-us" className="py-5 lg:py-24">
      <FadeIn className="my-container grid justify-center mt-10 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="max-w-xl grid items-center">
          <div>
            <h2 className="text-purple text-3xl lg:text-5xl relative mb-4 lg:mb-6">
              {dictionary.title}
              <span className="absolute left-0 top-2">___</span>
            </h2>
            <p className="lg:text-lg font-[250] leading-relaxed lg:leading-8 text-purple-950 mb-2 lg:mb-4">
              {dictionary.subtitle1}
            </p>
            <p className="lg:text-lg font-[250] leading-relaxed lg:leading-8 text-purple-950">{dictionary.subtitle2}</p>
          </div>
        </div>

        <div className="relative h-[400px] max-w-xl self-start lg:order-first">
          <Image
            src={aboutUsSection}
            alt="About image"
            fill
            className="object-cover shadow-custom-left shadow-purple"
          />
        </div>
      </FadeIn>
    </section>
  )
}
