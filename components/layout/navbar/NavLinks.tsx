import Image from "next/image"
import translator from "@/data/translator.json"
import { useGlobalStore } from "@/state/store"
import { Link as ScrollLink } from "react-scroll"

export default function NavLinks() {
    const { lang } = useGlobalStore()
    const { changeLang } = useGlobalStore()

    return (
        <div className="hidden lg:flex lg:gap-x-7">
            {translator.navLinks[lang].map((link, index) => (
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
    )
}
