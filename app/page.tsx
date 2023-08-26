import AboutUs from "@/components/AboutUs"
import ContactUs from "@/components/contact/ContactUs"
import Hero from "@/components/Hero"
import KeyPoints from "@/components/KeyPoints"
import Philosophy from "@/components/Philosophy"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <KeyPoints />
            <Philosophy />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    )
}
