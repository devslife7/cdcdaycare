import Image from "next/image"
import philoSection from "@/public/images/philosophy-section.jpg"

export default function Philosophy() {
    return (
        <section id="philosophy" className="bg-secondary py-24 text-white">
            <div className="my-container lg:flex lg:justify-evenly space-y-10">
                <div className="max-w-xl space-y-6 lg:px-4 mx-auto">
                    <h2 className="text-primary text-5xl mt-8 relative">
                        PHILOSOPHY<span className=" absolute left-0 top-2">___</span>
                    </h2>
                    <p className="text-xl font-extralight leading-10">
                        We believe that with love and care every child can learn. That is why we provide all
                        the elements for a strong foundation of success. We take pride in creating a healthy
                        environment with wholesome activities. We purposely fill our time with active,
                        fun-filled programs that engage the whole child's developing mind and body.
                    </p>
                </div>
                <Image className="mx-auto" src={philoSection} unoptimized alt="Child doing homework" />
            </div>
        </section>
    )
}
