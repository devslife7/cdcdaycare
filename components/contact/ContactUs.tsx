"use client"
import ContactForm from "./ContactForm"
import GoogleMap from "./GoogleMap"

export default function ContactUs() {
    console.log("contactUs component render:")
    return (
        <section id="contact" className="my-container py-16 mb-16 lg:mb-36">
            <div className="text-5xl text-center mb-10 text-orange">Contact Us</div>
            <div className="lg:flex lg:justify-evenly lg:space-x-4 space-y-20">
                <ContactForm />
                <GoogleMap />
            </div>
        </section>
    )
}
