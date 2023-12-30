import Image from "next/image"
import HeroButton from "./HeroButton"
import Translator from "../ui/translator"
import heroBackground from "@/public/images/daycare-hero.webp"

export default function Hero({ dictionary }: { dictionary: any }) {
  return (
    <section id="hero" className="h-[70vh] lg:h-[60vh] relative">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={heroBackground}
          className="object-cover w-full h-full"
          placeholder="blur"
          priority
          alt="Day Care Children"
        />
      </div>
      <div className="h-full bg-black bg-opacity-50">
        <div className="flex items-center h-full text-white my-container">
          <div className="max-w-4xl py-14 lg:py-20">
            <h1 className="text-5xl font-extrabold lg:text-7xl relative">
              {dictionary.title}
              <span className="font-medium text-primary absolute left-1 -top-[3rem] lg:-top-[4.5rem]">
                ___
              </span>
            </h1>
            <p className="max-w-lg mt-5 mb-10 font-light text-md lg:leading-relaxed">{dictionary.subtitle}</p>
            <HeroButton>{dictionary.button}</HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}
