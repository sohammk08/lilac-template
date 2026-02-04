"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <header
      className={`${pathname === "/" ? "bg-[#FDF8F3]" : "bg-[#b4aebd]"} text-[#FDF8F3]`}
    >
      <nav className="font-sans flex justify-between items-center px-12 py-4 mx-auto">
        <Link
          href="/"
          className="text-[32px] font-semibold text-[#2a332a] tracking-wide"
        >
          Lilac Template
        </Link>

        <div className="flex gap-12 text-lg font-medium text-[#2a332a]">
          <Link
            href="/blog"
            className="hover:opacity-60 transition-opacity duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:opacity-60 transition-opacity duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
