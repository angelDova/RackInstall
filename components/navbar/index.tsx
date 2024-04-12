"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, Menu, UserCircle, X } from "lucide-react";
import QuoteModal from "../quote-modal";
import { ModeToggle } from "../ui/mode-toggle";
import ContactSales from "../contact-sales-btn";
import { GeminiEffect } from "../ui/gemini-effect";
import Link from "next/link";
import { Spotlight } from "../ui/spotlight";

const Navbar = () => {
  return <FlyoutNav />;
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <span className="text-2xl font-bold" style={{ color }}>
          AF Rack Installations
        </span>
        {/* <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className="w-10"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor={color}
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor={color}
          ></path>
        </svg> */}
        <span className="invert">
          <svg
            width="50"
            height="39"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 80"
            version="1.1"
            x="0px"
            y="0px"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <g transform="matrix(0.979234,0,0,0.979234,0.664357,0.664487)">
              <g>
                <g transform="matrix(1,0,0,1,0,28)">
                  <g transform="matrix(1,0,0,1,17,2.8369)">
                    <g transform="matrix(1,0,0,1,-17,-30.8369)">
                      <path d="M10.162,58.844L53.838,58.844L53.838,62.178C53.838,62.729 54.285,63.176 54.837,63.176L61.163,63.176C61.715,63.176 62.162,62.729 62.162,62.178L62.162,1.823C62.162,1.271 61.715,0.824 61.163,0.824L54.837,0.824C54.285,0.824 53.838,1.271 53.838,1.823L53.838,22.516L50,22.516L50,7.517C50,6.965 49.552,6.517 49,6.517L15,6.517C14.448,6.517 14,6.965 14,7.517L14,22.516L10.162,22.516L10.162,1.823C10.162,1.271 9.715,0.824 9.163,0.824L2.837,0.824C2.286,0.824 1.838,1.271 1.838,1.823L1.838,62.178C1.838,62.729 2.286,63.176 2.837,63.176L9.163,63.176C9.715,63.176 10.162,62.729 10.162,62.178L10.162,58.844ZM55.836,58.68L55.836,61.179C55.836,61.179 60.164,61.179 60.164,61.179C60.164,61.179 60.164,2.821 60.164,2.821C60.164,2.821 55.836,2.821 55.836,2.821L55.836,22.681C56.504,22.874 57.119,23.234 57.621,23.735C57.621,23.735 57.621,23.735 57.621,23.736C58.401,24.516 58.84,25.576 58.84,26.679L58.84,26.681C58.84,27.786 58.401,28.844 57.621,29.625C57.621,29.625 57.621,29.625 57.621,29.625C57.119,30.126 56.504,30.486 55.836,30.68L55.836,50.68C56.504,50.874 57.119,51.234 57.621,51.735C57.621,51.735 57.621,51.735 57.621,51.735C58.401,52.516 58.84,53.576 58.84,54.679L58.84,54.681C58.84,55.785 58.401,56.844 57.621,57.625C57.621,57.625 57.621,57.625 57.621,57.625C57.119,58.126 56.504,58.486 55.836,58.68ZM5.16,26.681L5.16,26.679L5.16,26.679C5.16,25.576 5.599,24.516 6.379,23.736C6.379,23.735 6.379,23.735 6.379,23.735C6.881,23.234 7.496,22.874 8.164,22.68L8.164,2.821C8.164,2.821 3.836,2.821 3.836,2.821C3.836,2.821 3.836,61.179 3.836,61.179C3.836,61.179 8.164,61.179 8.164,61.179L8.164,58.68C7.496,58.486 6.881,58.126 6.379,57.625C6.379,57.625 6.379,57.625 6.379,57.625C5.599,56.844 5.16,55.785 5.16,54.681L5.16,54.679L5.16,54.679C5.16,53.576 5.599,52.516 6.379,51.735C6.379,51.735 6.379,51.735 6.379,51.735C6.881,51.234 7.496,50.874 8.164,50.681L8.164,30.68C7.496,30.486 6.881,30.126 6.379,29.625C6.379,29.625 6.379,29.625 6.379,29.625C5.599,28.844 5.16,27.786 5.16,26.681L5.16,26.681M56.838,54.681L56.838,54.681C56.838,55.254 56.61,55.804 56.205,56.209C55.8,56.614 55.25,56.842 54.677,56.842L9.323,56.842C8.75,56.842 8.2,56.614 7.795,56.209C7.39,55.804 7.162,55.254 7.162,54.681L7.162,54.679C7.162,54.106 7.39,53.556 7.795,53.151C8.2,52.746 8.75,52.518 9.323,52.518L54.677,52.518C55.25,52.518 55.8,52.746 56.205,53.151C56.61,53.556 56.838,54.106 56.838,54.679L56.838,54.679L56.838,54.681M50,50.516L53.838,50.516L53.838,30.844L10.162,30.844L10.162,50.516L14,50.516L14,35.517C14,34.965 14.448,34.517 15,34.517L49,34.517C49.552,34.517 50,34.965 50,35.517L50,50.516ZM36.5,36.517L33,36.517L33,50.516L48,50.516L48,36.517L44.5,36.517L44.5,41.517C44.5,41.886 44.297,42.225 43.972,42.399C43.647,42.573 43.252,42.554 42.945,42.349C42.945,42.349 40.5,40.719 40.5,40.719L38.055,42.349C37.748,42.554 37.353,42.573 37.028,42.399C36.703,42.225 36.5,41.886 36.5,41.517L36.5,36.517ZM16,50.516L31,50.516L31,36.517L27.5,36.517L27.5,41.517C27.5,41.886 27.297,42.225 26.972,42.399C26.647,42.573 26.252,42.554 25.945,42.349C25.945,42.349 23.5,40.719 23.5,40.719L21.055,42.349C20.748,42.554 20.353,42.573 20.028,42.399C19.703,42.225 19.5,41.886 19.5,41.517L19.5,36.517L16,36.517L16,50.516ZM28.961,46.626L24.461,46.626L24.461,48.626L28.961,48.626L28.961,46.626ZM45.961,46.626L41.461,46.626L41.461,48.626L45.961,48.626L45.961,46.626ZM42.5,36.517L38.5,36.517L38.5,39.649L39.945,38.685C40.281,38.461 40.719,38.461 41.055,38.685C41.055,38.685 42.5,39.649 42.5,39.649L42.5,36.517ZM21.5,36.517L21.5,39.649L22.945,38.685C23.281,38.461 23.719,38.461 24.055,38.685C24.055,38.685 25.5,39.649 25.5,39.649L25.5,36.517L21.5,36.517ZM56.838,26.681L56.838,26.681C56.838,27.254 56.61,27.804 56.205,28.209C55.8,28.614 55.25,28.842 54.677,28.842L9.323,28.842C8.75,28.842 8.2,28.614 7.795,28.209C7.39,27.804 7.162,27.254 7.162,26.681L7.162,26.679C7.162,26.106 7.39,25.556 7.795,25.151C8.197,24.749 8.741,24.522 9.31,24.518L9.323,24.518C9.323,24.518 54.677,24.518 54.677,24.518C55.25,24.518 55.8,24.746 56.205,25.151C56.61,25.556 56.838,26.106 56.838,26.679L56.838,26.679L56.838,26.681M16,22.516L31,22.516L31,8.517L27.5,8.517L27.5,13.517C27.5,13.886 27.297,14.225 26.972,14.399C26.647,14.573 26.252,14.554 25.945,14.349C25.945,14.349 23.5,12.719 23.5,12.719L21.055,14.349C20.748,14.554 20.353,14.573 20.028,14.399C19.703,14.225 19.5,13.886 19.5,13.517L19.5,8.517L16,8.517L16,22.516ZM36.5,8.517L33,8.517L33,22.516L48,22.516L48,8.517L44.5,8.517L44.5,13.517C44.5,13.886 44.297,14.225 43.972,14.399C43.647,14.573 43.252,14.554 42.945,14.349C42.945,14.349 40.5,12.719 40.5,12.719L38.055,14.349C37.748,14.554 37.353,14.573 37.028,14.399C36.703,14.225 36.5,13.886 36.5,13.517L36.5,8.517ZM28.961,18.626L24.461,18.626L24.461,20.626L28.961,20.626L28.961,18.626ZM45.961,18.626L41.461,18.626L41.461,20.626L45.961,20.626L45.961,18.626ZM42.5,8.517L38.5,8.517L38.5,11.649L39.945,10.685C40.281,10.461 40.719,10.461 41.055,10.685C41.055,10.685 42.5,11.649 42.5,11.649L42.5,8.517ZM21.5,8.517L21.5,11.649L22.945,10.685C23.281,10.461 23.719,10.461 24.055,10.685C24.055,10.685 25.5,11.649 25.5,11.649L25.5,8.517L21.5,8.517Z" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </Link>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <QuoteModal />

      <button className="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
        Schedule a Demo
      </button>
      <ModeToggle />
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
            AF Rack Installations is the nation&apos;s leading material handling
            company.
          </p>
        </div>
        <a
          href="/about"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <ArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Our Services</h3>
          <p className="text-xs">
            From installation to removal, our experts offer a wide range of
            services to meet your warehouse storage solution
          </p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">About AF Rack Installations</h3>
          <p className="text-xs">Get to learn more about who we are.</p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Photo Gallery</h3>
          <p className="text-xs">
            View our latest projects in the photo gallery
          </p>
        </a>
        <a
          href="#"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Contact</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
          </p>
        </a>
      </div>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">For Individuals</h3>
          <a href="#" className="block text-sm hover:underline">
            Introduction
          </a>
          <a href="#" className="block text-sm hover:underline">
            Pay as you go
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <a href="#" className="block text-sm hover:underline">
            Startups
          </a>
          <a href="#" className="block text-sm hover:underline">
            SMBs
          </a>
          <a href="#" className="block text-sm hover:underline">
            Enterprise
          </a>
        </div>
      </div>
      <ContactSales />
    </div>
  );
};

const CareersContent = () => {
  return (
    <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-white">Careers</h2>
          <p className="text-sm text-indigo-100">
            Placeholder was rated a top place to work by Placeholder.
          </p>
        </div>
        <a
          href="/contact"
          className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
        >
          Contact Us <ArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-semibold">Business</h3>
          <a href="#" className="block text-sm hover:underline">
            Marketing
          </a>
          <a href="#" className="block text-sm hover:underline">
            Finance
          </a>
          <a href="#" className="block text-sm hover:underline">
            Legal
          </a>
          <a href="#" className="block text-sm hover:underline">
            Sales
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Engineering</h3>
          <a href="#" className="block text-sm hover:underline">
            Full stack
          </a>
          <a href="#" className="block text-sm hover:underline">
            Dev ops
          </a>
          <a href="#" className="block text-sm hover:underline">
            QA
          </a>
          <a href="#" className="block text-sm hover:underline">
            Data
          </a>
          <a href="#" className="block text-sm hover:underline">
            Machine learning
          </a>
          <a href="#" className="block text-sm hover:underline">
            Management
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">More</h3>
          <a href="#" className="block text-sm hover:underline">
            Support
          </a>
          <a href="#" className="block text-sm hover:underline">
            Office
          </a>
          <a href="#" className="block text-sm hover:underline">
            Other
          </a>
        </div>
      </div>
    </div>
  );
};

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <ArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? "fit-content" : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <FoldContent />
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <Menu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-black"
          >
            <div className="flex items-center justify-between p-6">
              <Logo />
              <button onClick={() => setOpen(false)}>
                <X className="text-3xl text-white" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const LINKS = [
  {
    text: "About Us",
    href: "/about",
    component: AboutUsContent,
  },
  {
    text: "Pricing",
    href: "/pricing",
    component: PricingContent,
  },
  {
    text: "Contact",
    href: "/contact",
    component: CareersContent,
  },
  {
    text: "Documentation",
    href: "#",
  },
];
