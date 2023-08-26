import Image from "next/image"
import philosophyimg from "@/public/img/aboutusimg.jpg"

export default function AboutUs() {
    return (
        <section id="about-us" className="py-24">
            <div className="my-container flex justify-evenly">
                <Image src={philosophyimg} alt="Child doing homework" />
                <div className="max-w-lg space-y-6">
                    <h2 className="text-purple text-5xl mt-8 relative">
                        ABOUT US<span className=" absolute left-0 top-2">___</span>
                    </h2>
                    <p className="text-xl font-[250] leading-10">
                        At CDC Daycare, we believe that every child deserves a nurturing and inspiring
                        environment where they can explore, learn, and flourish. Established with love and
                        passion for early childhood development, our daycare center is dedicated to providing
                        a safe, stimulating, and loving space for children to embark on an incredible journey
                        of growth and discovery.
                    </p>
                </div>
            </div>
        </section>
    )
}
