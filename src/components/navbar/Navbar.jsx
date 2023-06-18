"use client";

import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Hamburger from "/public/icon-hamburger.svg";
import Close from "/public/icon-close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavLinkClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsNavOpen(false);
      setIsLoading(false);
    });
  };

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();
  const pathname = usePathname();

  return (
    <div className="w-full h-max fixed z-20 md:pt-8 md:pb-2 lg:pb-0 md:px-20 lg:px-44 md:bg-transparent md:backdrop-blur-2xl">
      <div className="flex flex-row justify-between py-6 px-8 md:py-0 md:px-0 bg-transparent backdrop-blur-2xl md:backdrop-blur-none">
        <Link   
          href="/"
          className="flex font-bold text-base md:text-base lg:text-2xl"
        >
          <nav className="text-green-400">D</nav>ooray
        </Link>
        <div className="md:hidden flex flex-1 justify-end z-20">
          <Image
            src={Hamburger}
            priority={true}
            width={20}
            height={20}
            alt="Hamburger"
            onClick={() => setIsNavOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div
        className={
          isNavOpen
            ? "fixed md:hidden w-[65%] h-screen space-y-6 text-base bottom-0 right-0 flex-1 justify-end p-8 bg-transparent backdrop-blur-2xl text-white ml-16 z-20 animate-fade-in-right"
            : "hidden w-full h-full md:relative md:flex md:space-x-10 lg:space-x-14 text-base md:bottom-6 flex-row justify-end"
        }
      >
        <div className="md:hidden flex flex-1 justify-end">
          <Image
            src={Close}
            priority={true}
            width={20}
            height={20}
            alt="Close"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-end space-y-6 md:space-y-0 md:space-x-4 lg:space-x-6 text-base md:text-sm">
          <DarkModeToggle />
          {links.map((link) => {
            const isActive = pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={handleNavLinkClick}
                className={`hover:text-green-400 ${
                  isActive ? "text-green-400" : ""
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          {session.status === "authenticated" && (
            <button
              onClick={signOut}
              className="px-3 py-1 bg-green-400 text-white relative bottom-1 rounded-xl"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
