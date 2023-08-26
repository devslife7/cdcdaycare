"use client"
import ContactForm from "./ContactForm"
import GoogleMap from "./GoogleMap"

export default function ContactUs() {
    return (
        <section id="contact" className="my-container py-16 mb-16 lg:mb-36">
            <div className="text-5xl text-center mb-10 text-orange">Contact Us</div>
            <div className="lg:flex lg:justify-around lg:items-center lg:space-x-4 space-y-20 lg:space-y-0 ">
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
