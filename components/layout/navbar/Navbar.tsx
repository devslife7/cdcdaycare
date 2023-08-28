"use client"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import MobileNav from "./MobileNav"
import classNames from "classnames"
import { Link as ScrollLink } from "react-scroll"
import { useStore } from "@/state/store"
import Button from "@/components/shared/Button"
import Image from "next/image"
import { translator } from "@/data/translator"

interface NavLink {
    label: string
    href: string
}

// const navLinks = [
//     {
//         label: "Home",
//         href: "hero",
//     },
//     {
//         label: "Philosophy",
//         href: "philosophy",
//     },
//     {
//         label: "About Us",
//         href: "about-us",
//     },
//     {
//         label: "Contact",
//         href: "contact",
//     },
// ]

export default function Navbar() {
    console.log("render navbar here")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const { changeLang } = useStore()
    const currentLang = useStore.getState().lang

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
        return translator.navLinks[currentLang].map((link, index) => (
            <ScrollLink
                key={index}
                to={link.href}
                className="px-2 leading-7 transition-colors ease-in duration-200 relative cursor-pointer [&.active]:text-primary overflow-hidden
                [&>span]:[&.active]:inline-block [&>span]:[&.active]:translate-x-8"
                spy={true}
                offset={-63}
            >
                {link.label}
                <span className="absolute font-bold transition-transform duration-200 ease-in -left-6 text-primary top-1">
                    ___
                </span>
            </ScrollLink>
        ))
    }

    const handleLangChage = () => (currentLang === "eng" ? changeLang("esp") : changeLang("eng"))

    return (
        <nav>
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
                    <div className="hidden lg:flex lg:gap-x-7">
                        {renderNavLinks()}
                        <Button onClick={handleLangChage} size="small" className="bg-blue-900">
                            {currentLang === "eng" ? (
                                <Image
                                    src="https://media-1.api-sports.io/football/teams/2384.png"
                                    width={25}
                                    height={15}
                                    alt="spain flag"
                                    className="mr-1"
                                />
                            ) : (
                                <Image
                                    src="https://media-1.api-sports.io/football/teams/9.png"
                                    width={25}
                                    height={15}
                                    alt="spain flag"
                                    className="mr-1"
                                />
                            )}
                            {currentLang.toUpperCase()}
                        </Button>
                    </div>
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
                        navLinks={translator.navLinks[currentLang]}
                    />
                )}
            </header>
        </nav>
    )
}
