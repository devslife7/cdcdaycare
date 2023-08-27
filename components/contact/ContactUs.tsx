"use client"
import ContactForm from "./ContactForm"
import GoogleMap from "./GoogleMap"

export default function ContactUs() {
    return (
        <section id="contact" className="my-2 my-container py-14 lg:mb-36 ">
            <div className="mt-20 mb-16 text-5xl font-semibold text-center text-orange">Contact Us</div>
            <div className="space-y-24 lg:flex lg:justify-around lg:items-center lg:space-x-4 lg:space-y-0 ">
                <div className="w-full">
                    <ContactForm />
                </div>
                <div className="w-full">
                    <GoogleMap />
                </div>
            </div>
        </section>
    )
}
