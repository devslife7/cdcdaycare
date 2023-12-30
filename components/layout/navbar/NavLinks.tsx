import Image from "next/image"
import translator from "@/data/translator.json"
import { useGlobalStore } from "@/state/store"
import { Link as ScrollLink } from "react-scroll"
import UsFlag from "@/public/icons/usFlag"
import EspFlag from "@/public/icons/espFlag"
import Link from "next/link"

export default function NavLinks({ dictionary }: { dictionary: any }) {
  const { lang } = useGlobalStore()
  const { changeLang } = useGlobalStore()

  return (
    <div className="hidden lg:flex lg:gap-x-7">
      {dictionary.navLinks.map((link: any, index: number) => (
        <ScrollLink
          key={index}
          to={link.href}
          className="px-2 leading-7 transition-all ease-in duration-200 relative cursor-pointer hover:opacity-50
                    [&.active]:text-primary [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
          spy={true}
          offset={-63}
        >
          {link.label}
          <span className="absolute font-bold transition-transform duration-200 ease-in -left-6 text-primary top-1">
            ___
          </span>
        </ScrollLink>
      ))}
      {dictionary.locale !== "es" ? (
        <Link href="/es/home">
          <UsFlag className="w-8 h-8 mr-1 inline" />
          {"ENG"}
        </Link>
      ) : (
        <Link href="/en/home">
          <EspFlag className="w-8 h-8 mr-1 inline" />
          {"ESP"}
        </Link>
      )}
    </div>
  )
}
