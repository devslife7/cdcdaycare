"use client"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import classNames from "classnames"
import { animateScroll as scroll } from "react-scroll"
import { Link as ScrollLink } from "react-scroll"

interface NavLink {
    label: string
    href: string
}

const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "hero",
    },
    {
        label: "Philosophy",
        href: "philosophy",
    },
    {
        label: "About Us",
        href: "about-us",
    },
    {
        label: "Contact",
        href: "contact",
    },
]

export default function Navbar() {
    console.log("render navbar here")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const [navActive, setNavAtive] = useState("#hero")

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

    const renderNavLinks = () => {
        const isActive = (href: string) => (navActive === href ? "text-primary" : "hover:text-gray-400")
        return navLinks.map((link, index) => (
            // <Link
            //     key={index}
            //     href={link.href}
            //     className={`px-2 leading-7 transition-all relative ${isActive(link.href)}`}
            //     onClick={() => setNavAtive(link.href)}
            // >
            //     {link.label}
            //     {navActive === link.href && <span className="absolute left-2 top-1 font-bold">___</span>}
            // </Link>
            <ScrollLink to={link.href} className="">
                {link.label}
            </ScrollLink>
        ))
    }

    return (
        <nav>
            {/* <div className={classNames({ "h-20": isHome() })}></div> */}
            <header
                className={classNames(
                    "fixed top-0 z-10 w-full text-white transition-all duration-300 ease-in-out",
                    {
                        "bg-secondary": scrollNav,
                        "bg-black bg-opacity-50": !scrollNav,
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
                    </div>
                    <div className="hidden lg:flex lg:gap-x-7">{renderNavLinks()}</div>
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
                {/* {mobileMenuOpen && (
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navLinks={navLinks}
          />
        )} */}
            </header>
        </nav>
    )
}
