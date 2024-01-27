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
  const currentYear = new Date().getFullYear()

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
    // <footer className="sticky mt-auto text-white bg-secondary top-full">
    //   <div className="flex flex-col items-center justify-center container mx-auto px-4 lg:px-8 h-[29rem] gap-y-12 md:flex-row md:justify-between">
    //     <div className="text-xl text-center font-semibold">
    //       <span className="text-primary">CDC</span> Day Care
    //     </div>
    //     <div className="text-center ">
    //       Copyright &copy; {currentYear} <span className="text-primary">CDC</span> Day Care. All rights reserved.
    //     </div>
    //     <div className="flex justify-center gap-x-6">{renderSocialLinks()}</div>
    //   </div>
    // </footer>

    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-16 my-container">
        <div className="md:flex md:justify-between py-10">
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
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                data-testid="geist-icon"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span className="sr-only">Instagram Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
