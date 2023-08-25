import Link from "next/link"
import Image from "next/image"
import heroBackground from "@/public/img/daycarehero.webp"
import Button from "./shared/Button"

export default function Hero() {
  return (
    <div className="h-[70vh] lg:h-[60vh] relative">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={heroBackground}
          className="object-cover w-full h-full"
          placeholder="blur"
          priority
          alt="Day Care Children"
        />
      </div>
      <div className="h-full bg-black bg-opacity-70">
        <div className="flex items-center justify-center h-full text-center text-white my-container">
          <div className="relative max-w-4xl py-14 lg:py-20">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">Your Dream Home Awaits</h1>
            <p className="max-w-xl mx-auto mt-5 mb-10 font-light text-md md:text-xl lg:text-xl lg:leading-relaxed">
              Our skilled artisans pour their heart and soul into every project, ensuring impeccable finishes
              and long-lasting beauty.
            </p>
            <Link href="/gallery">
              <Button size="large" className="lg:text-lg">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
