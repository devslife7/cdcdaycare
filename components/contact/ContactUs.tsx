"use client"
import ContactForm from "./ContactForm"
import GoogleMap from "./GoogleMap"

export default function ContactUs() {
    console.log("contactUs component render:")
    return (
        <section id="contact" className="my-container py-16 mb-36">
            <div className="text-5xl text-center mb-10 text-orange">Contact Us</div>
            <div className="flex justify-evenly">
                <ContactForm />
                <GoogleMap />
            </div>
        </section>
    )
}
