"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

          <p>DevEvent</p>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("list-none font-medium hover:text-white transition-all duration-300", {
                "text-white": pathName === link.href,
                "text-gray-400": pathName !== link.href,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
