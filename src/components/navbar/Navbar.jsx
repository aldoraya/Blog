"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
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
  ];

  return (
    <div className="w-full h-full flex flex-row justify-between p-10 px-44">
      <Link href="/" className="flex font-bold text-2xl">
        <nav className="text-green-400">D</nav>ooray
      </Link>
      <div className="lg:flex justify-end space-x-6 hidden">
        {/* toggle */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-green-400">
            {link.title}
          </Link>
        ))}
        <button className="px-3 py-1 bg-green-400 text-white relative bottom-1 rounded-xl">
            Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
