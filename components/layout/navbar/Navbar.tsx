"use client"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import { Link as ScrollLink } from "react-scroll"
import { useGlobalStore } from "@/state/store"
import translator from "@/data/translator.json"
import NavLinks from "./NavLinks"
import { cn } from "@/lib/utils"

export default function Navbar({ dictionary }: { dictionary: any }) {
  const [scrollNav, setScrollNav] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { lang } = useGlobalStore()

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <nav>
      <header
        //change scrollNav to tailwind animations?
        className={cn(
          "fixed bg-black bg-opacity-50 top-0 z-10 w-full text-white transition-all duration-300 ease-in-out",
          {
            "bg-secondary bg-opacity-100": scrollNav,
          }
        )}
      >
        <nav className="flex items-center justify-between h-16 my-container">
          <div className="flex items-center lg:flex-1">
            <ScrollLink to="hero">
              <span className="text-xl font-semibold">
                <span className="text-primary">CDC</span> Day Care
              </span>
            </ScrollLink>
            <div>{dictionary.title} </div>
            <div>{dictionary.text} </div>
          </div>
          <NavLinks />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={handleMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navLinks={translator.navLinks[lang]}
          />
        )}
      </header>
    </nav>
  )
}
