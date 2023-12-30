import FadeIn from "../ui/fadeIn"
import Translator from "../ui/translator"
import ContactForm from "./ContactForm"
import GoogleMap from "./GoogleMap"

export default function ContactUs({ dictionary }: { dictionary: any }) {
  return (
    <section id="contact" className="my-2 my-container py-14 lg:mb-36 ">
      <FadeIn className="mt-20 mb-16 text-5xl font-semibold text-center text-orange">
        {dictionary.title}
      </FadeIn>
      <FadeIn className="space-y-24 lg:flex lg:justify-around lg:items-center lg:space-x-4 lg:space-y-0 ">
        <div className="w-full">
          <ContactForm dictionary={dictionary.form} />
        </div>
        <div className="w-full">
          <GoogleMap />
        </div>
      </FadeIn>
    </section>
  )
}
