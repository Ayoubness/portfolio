import React from "react";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 h-[4.5rem] w-[calc(100%-10px)] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[calc(36rem-10px)] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <ul className="flex w-full h-full justify-center items-center">
          {links.map((link) => (
            <li key={link.hash} className="h-full flex-1">
              <a
                className="relative flex w-full h-full items-center justify-center text-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={link.hash}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
