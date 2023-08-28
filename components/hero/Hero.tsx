import Image from "next/image"
import heroBackground from "@/public/images/daycare-hero.webp"
import HeroButton from "./HeroButton"

export default function Hero() {
    return (
        <section id="hero" className="h-[70vh] lg:h-[60vh] relative">
            <div className="absolute w-full h-full -z-10">
                <Image
                    src={heroBackground}
                    className="object-cover w-full h-full"
                    placeholder="blur"
                    priority
                    unoptimized
                    alt="Day Care Children"
                />
            </div>
            <div className="h-full bg-black bg-opacity-50">
                <div className="flex items-center h-full text-white my-container">
                    <div className="max-w-4xl py-14 lg:py-20">
                        <h1 className="text-5xl font-extrabold lg:text-7xl relative">
                            A Safe Haven for
                            <br /> Growing Minds
                            <span className="font-medium text-primary absolute left-1 -top-[3rem] lg:-top-[4.5rem]">
                                ___
                            </span>
                        </h1>
                        <p className="max-w-lg mt-5 mb-10 font-light text-md lg:leading-relaxed">
                            Our child-friendly spaces are designed to encourage exploration while providing a
                            safe and secure environment for growth and development.
                        </p>

                        <HeroButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
