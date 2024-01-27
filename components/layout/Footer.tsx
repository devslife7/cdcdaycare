import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const socialMediaLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter",
    href: "https://www.twitter.com/",
    icon: <FaTwitter />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/",
    icon: <FaYoutube />,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <Link
        key={index}
        className="text-xl text-gray-500 hover:text-white"
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
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-16 my-container">
        <div className="md:flex md:justify-between py-20">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <h2 className="text-white font-semibold self-center text-xl mb-8 lg:text-2xl">
                <span className="text-primary">CDC</span> Day Care
              </h2>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a className="hover:underline hover:cursor-pointer">Newsletter</a>
                </li>
                <li>
                  <a className="hover:underline hover:cursor-pointer">About</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/" target="_blank" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" className="hover:underline ">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a className="hover:underline hover:cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:underline hover:cursor-pointer">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a href="#" className="hover:underline">
              CDC Daycare
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">{renderSocialLinks()}</div>
        </div>
      </div>
    </footer>
  )
}
