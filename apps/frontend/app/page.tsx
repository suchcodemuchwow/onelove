"use client";

import React from "react";

import { Footer, HeroHeader, Navbar } from "@acme/ui";

export default function Page() {
  return (
    <div className={"my-4 h-screen"}>
      <Navbar
        siteName={"Onelove"}
        navLinks={[
          {
            route: "Home",
            path: "/",
          },
          {
            route: "Technologies",
            path: "#tech",
          },
          {
            route: "Social",
            path: "#social",
          },
        ]}
      />
      <HeroHeader
        header={"Welcome to Onelove!"}
        subheader={
          "Web 🛜, Mobile 📱, Desktop 🖥️, Browser Extensions 🔮, APIs 👮‍♂️ and Scrapers 🕸️"
        }
        image={"sloth.png"}
      />
      <Footer
        siteName={"Onelove"}
        author={"suchcodemuchwow"}
        navLinks={[
          {
            route: "Home",
            path: "/",
          },
          {
            route: "Technologies",
            path: "#tech",
          },
          {
            route: "Social",
            path: "#social",
          },
        ]}
      />
    </div>
  );
}
