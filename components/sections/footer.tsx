import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black py-12 text-gray-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex flex-col space-y-4">
            <button
              className=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Facebook
              </span>
              <BottomGradient />
            </button>
            <button
              className=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Instagram
              </span>
              <BottomGradient />
            </button>
            <button
              className=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandTwitter className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Twitter
              </span>
              <BottomGradient />
            </button>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Contact Us</h2>
          <p>Los Angeles, CA</p>
          <p>91210</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="pt-8 text-center text-xs">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
