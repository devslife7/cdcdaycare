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
    // <div className="flex justify-center h-screen items-center text-5xl">
    //   <div>
    //     <h2>{dict.hello.title}</h2>
    //     <p>{dict.hello.text}</p>
    //   </div>
    // </div>
    <>
      <Navbar dictionary={dict.hello} />
      <Hero dictionary={dict.hello} />
      <KeyPoints dictionary={dict.hello} />
      <Philosophy dictionary={dict.hello} />
      <AboutUs dictionary={dict.hello} />
      <ContactUs dictionary={dict.hello} />
      <Footer />
    </>
  )
}
