import Image from "next/image"
import aboutUsSection from "@/public/images/about-section.jpg"
import FadeIn from "./ui/fadeIn"

export default function AboutUs({ dictionary }: { dictionary: any }) {
  return (
    <section id="about-us" className="py-24">
      <FadeIn className="my-container lg:flex lg:flex-row-reverse lg:justify-evenly space-y-10">
        <div className="max-w-xl space-y-6 lg:px-4 mx-auto">
          <h2 className="text-purple text-5xl mt-8 relative">
            {dictionary.title}
            <span className="absolute left-0 top-2">___</span>
          </h2>

          <p className="text-lg font-[250] leading-8 text-purple-950">{dictionary.subtitle1}</p>
          <p className="text-lg font-[250] leading-8 text-purple-950">{dictionary.subtitle2}</p>
        </div>

        <Image
          src={aboutUsSection}
          unoptimized
          alt="Child playing"
          className="mx-auto shadow-custom-left shadow-purple"
        />
      </FadeIn>
    </section>
  )
}
