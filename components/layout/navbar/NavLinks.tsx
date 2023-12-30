import { Link as ScrollLink } from "react-scroll"
import UsFlag from "@/public/icons/usFlag"
import EspFlag from "@/public/icons/espFlag"
import Link from "next/link"

export default function NavLinks({ dictionary }: { dictionary: any }) {
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
      {dictionary.locale === "en" ? (
        <Link href="/es/home" className="flex items-center">
          <EspFlag className="w-8 h-8 mr-2 inline" />
          <span>ESP</span>
        </Link>
      ) : (
        <Link href="/en/home" className="flex items-center">
          <UsFlag className="mr-2 inline w-8 h-8" />
          <span>ENG</span>
        </Link>
      )}
    </div>
  )
}
