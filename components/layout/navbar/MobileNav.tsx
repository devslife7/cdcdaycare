import { useGlobalStore } from "@/state/store"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaChildReaching } from "react-icons/fa6"
import { Link as ScrollLink } from "react-scroll"

type Props = {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (val: boolean) => void
    navLinks: {
        href: string
        label: string
    }[]
}

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen, navLinks }: Props) {
    const pathname = usePathname()
    const { lang } = useGlobalStore()
    const { changeLang } = useGlobalStore()

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <div className="transition-all lg:hidden">
            <div className="fixed inset-0 z-10" />
            <div className="fixed -top-2 bottom-0 right-0 z-10 w-full overflow-y-auto bg-secondary bg-opacity-95 text-white px-6 py-6 max-w-[15rem] sm:ring-1 sm:ring-gray-900/10">
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
                            {navLinks.map((link, index) => (
                                <ScrollLink
                                    key={index}
                                    to={link.href}
                                    className="-mx-2 block rounded-lg px-3 py-4 font-medium leading-7 text- [&.active]:text-primary"
                                    onClick={closeMobileMenu}
                                    spy={true}
                                    offset={40}
                                >
                                    {link.label}
                                </ScrollLink>
                            ))}
                            <div onClick={changeLang} className="flex items-center px-3 cursor-pointer">
                                {lang !== "eng" ? (
                                    <>
                                        <Image
                                            src="https://media-1.api-sports.io/football/teams/2384.png"
                                            width={25}
                                            height={15}
                                            alt="spain flag"
                                            unoptimized
                                            className="mr-1"
                                        />
                                        {"ENG"}
                                    </>
                                ) : (
                                    <>
                                        <Image
                                            src="https://media-1.api-sports.io/football/teams/9.png"
                                            width={25}
                                            height={15}
                                            alt="spain flag"
                                            unoptimized
                                            className="mr-1"
                                        />
                                        {"ESP"}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
