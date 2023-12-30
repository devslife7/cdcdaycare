import { cn } from "@/lib/utils"
import EspFlag from "@/public/icons/espFlag"
import UsFlag from "@/public/icons/usFlag"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaChildReaching } from "react-icons/fa6"
import { Link as ScrollLink } from "react-scroll"

type Props = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (val: boolean) => void
  dictionary: any
}

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen, dictionary }: Props) {
  const pathname = usePathname()
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="transition-all lg:hidden">
      <div className="fixed inset-0 z-10" />
      <div className="fixed -top-2 bottom-0 right-0 z-10 w-full cursor-pointer overflow-y-auto bg-secondary bg-opacity-95 text-white px-6 py-6 max-w-[15rem] sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <FaChildReaching className="text-4xl text-primary" />
          <button type="button" className="-m-2.5 rounded-md p-2.5 " onClick={closeMobileMenu}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flow-root mt-10">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              {dictionary.navLinks.map((link: any, index: number) => (
                <ScrollLink
                  key={index}
                  to={link.href}
                  className={cn(
                    "-mx-2 block rounded-lg px-3 py-4 font-medium leading-7 [&.active]:text-primary [&.active]:hover:opacity-100 overflow-hidden [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
                  )}
                  onClick={closeMobileMenu}
                  spy={true}
                  offset={40}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
            {dictionary.locale === "en" ? (
              <Link href="/es/home" className="flex items-center mt-40">
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
        </div>
      </div>
    </div>
  )
}
