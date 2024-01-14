"use client";

import React from "react";

import type { Social } from "@acme/ui";
import { HeroHeader, Navbar } from "@acme/ui";

const header = {
  title: "Welcome to Onelove!",
  subtitle:
    "Web 🛜 Mobile 📱 Desktop 🖥️ Browser Extensions 🔮 APIs 👮‍♂️ and Scraper 🕸️",
  image: "sloth.png",
};

const site = {
  name: "Onelove",
  author: "suchcodemuchwow",
  navLinks: [
    {
      route: "Home",
      path: "/",
    },
  ],
};

const social: Social[] = [
  {
    href: "https://www.github.com/suchcodemuchwow/onelove",
    platform: "github",
  },
  {
    href: "https://www.twitter.com/suchcodemuchwow",
    platform: "twitter",
  },
  {
    href: "https://www.instagram.com/suchcodemuchwow",
    platform: "instagram",
  },
  {
    href: "https://www.linkedin.com/in/suchcodemuchwow",
    platform: "linkedin",
  },
];

export default function Page() {
  return (
    <div className={"flex h-screen flex-col p-4"}>
      <Navbar siteName={site.name} navLinks={site.navLinks} />
      <HeroHeader
        header={header.title}
        subheader={header.subtitle}
        image={header.image}
        social={social}
      />
    </div>
  );
}
