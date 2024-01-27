import { getDictionary } from "@/app/dictionaries"
import AboutUs from "@/components/AboutUs"
import ContactUs from "@/components/contact/ContactUs"
import Hero from "@/components/hero/Hero"
import KeyPoints from "@/components/KeyPoints"
import Philosophy from "@/components/Philosophy"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/navbar/Navbar"

export default async function Main({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)
  return (
    <>
      {/* <Navbar dictionary={dict.navbar} /> */}
      {/* <Hero dictionary={dict.hero} /> */}
      {/* <KeyPoints dictionary={dict.keypoints} /> */}
      {/* <Philosophy dictionary={dict.philosophy} /> */}
      <AboutUs dictionary={dict.about} />
      {/* <ContactUs dictionary={dict.contact} /> */}
      {/* <Footer /> */}
    </>
  )
}
