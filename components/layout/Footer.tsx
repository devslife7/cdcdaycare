// Depends on my-container custom style in global.css file
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const socialMediaLinks = [
  {
    label: "Facebook",
    href: "https://www.instagram.com/",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter",
    href: "https://www.instagram.com/",
    icon: <FaTwitter />,
  },
  {
    label: "Youtube",
    href: "https://www.instagram.com/",
    icon: <FaYoutube />,
  },
]

export default function Footer() {
  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="text-3xl hover:text-primary"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        {link.icon}
      </Link>
    ))
  }

  return (
    <footer className="sticky mt-auto text-white bg-secondary top-full">
      <div className="flex flex-col items-center justify-center my-container h-52 gap-y-4 md:flex-row md:justify-between">
        <div className="text-xl text-center font-semibold">
          <span className="text-primary">CDC</span> Day Care
        </div>
        <div className="text-center ">
          Copyright © 2023 <span className="text-primary">CDC</span> Day Care. All rights reserved.
        </div>
        <div className="flex justify-center gap-x-6">{renderSocialLinks()}</div>
      </div>
    </footer>
  )
}
