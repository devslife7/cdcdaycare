"use client"
import ContactForm from "./ContactForm"

export default function ContactUs() {
    console.log("contactUs component render:")
    return (
        <section id="contact" className="my-container h-screen">
            <div className="text-5xl">ContactUs</div>
            <ContactForm />
        </section>
    )
}
