import Image from "next/image"
import aboutUsSection from "@/public/images/daycare-toys.webp"
import FadeIn from "./ui/fadeIn"

export default function AboutUs({ dictionary }: { dictionary: any }) {
  return (
    <section id="about-us" className="py-24">
      <FadeIn className="my-container grid justify-center lg:grid-cols-2 gap-16">
        <div className="space-y-6  s max-w-2xl mx-auto">
          <h2 className="text-purple text-3xl lg:text-5xl mt-8 relative">
            {dictionary.title}
            <span className="absolute left-0 top-2">___</span>
          </h2>

          <p className="lg:text-lg font-[250] leading-8 text-purple-950">{dictionary.subtitle1}</p>
          <p className="lg:text-lg font-[250] leading-8 text-purple-950">{dictionary.subtitle2}</p>
        </div>

        <div className="relative h-96 max-w-2xl">
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
