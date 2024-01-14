"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "../ui/button";

interface NavLink {
  route: string;
  path: string;
}

export interface NavbarProps {
  siteName: string;
  navLinks: NavLink[];
}

export function Navbar(props: NavbarProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const menuIcon = isMenuOpen ? (
    <XIcon className={"h-4 w-4"} />
  ) : (
    <MenuIcon className={"h-4 w-4"} />
  );

  return (
    <header className={"select-none"}>
      <nav
        className={
          "mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl"
        }
      >
        <div
          className={"flex items-center justify-between py-3 md:block md:py-5"}
        >
          <Link href={"/"} className={"text-2xl font-bold"}>
            {props.siteName}
          </Link>
          <div className={"flex gap-1 md:hidden"}>
            <Button
              variant={"outline"}
              size={"icon"}
              className={"z-20"}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {menuIcon}
            </Button>
          </div>
        </div>
        <div
          className={`absolute inset-0 z-10 flex items-center bg-background p-4 md:static md:block md:p-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className={
              "flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0"
            }
          >
            {props.navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={"w-full p-4 text-center hover:bg-slate-100"}
              >
                {link.route}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
