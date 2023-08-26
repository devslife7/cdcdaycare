"use client"
import ContactForm from "./contactForm"

export default function ContactUs() {
    console.log("contactUs component render:")
    return (
        <section id="contact" className="container-custom flex h-screen items-center justify-center">
            <div className="text-5xl">ContactUs</div>
            <div>Form here</div>
            <ContactForm />
        </section>
    )
}
