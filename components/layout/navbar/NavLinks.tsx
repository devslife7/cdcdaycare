import { Link as ScrollLink } from "react-scroll"

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
    </div>
  )
}
