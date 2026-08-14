"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export const navLinks = [
  { label: "Pre-registrations", href: "/pre-registration" },
  { label: "Registration", href: "/registration", isBlank: true },
  { label: "Reports", href: "/reports" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 bg-accent z-999">
      <nav className="w-full h-14 border-b flex items-center px-6 gap-2 shrink-0">
        <span className="font-semibold mr-4">SYU Summit</span>
        {navLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathname === link.href ? "default" : "ghost"}
            size="sm"
          >
            <Link href={link.href} target={link.isBlank ? "_blank" : "_self"}>
              {link.label}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
