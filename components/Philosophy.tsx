import Image from "next/image"
import philosophyimg from "@/public/img/philosophyimg.jpg"

export default function Philosophy() {
    return (
        <div className="bg-secondary py-24 text-white">
            <div className="my-container flex justify-evenly">
                <div className="max-w-xl space-y-6">
                    <h2 className="text-primary text-5xl mt-8">PHILOSOPHY</h2>
                    <p className="text-xl font-light leading-10">
                        We believe that with love and care every child can learn. That is why we provide all
                        the elements for a strong foundation of success. We take pride in creating a healthy
                        environment with wholesome activities. We purposely fill our time with active,
                        fun-filled programs that engage the whole child's developing mind and body.
                    </p>
                </div>
                <Image src={philosophyimg} alt="Child doing homework" />
            </div>
        </div>
    )
}
