import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.plasmo.com/*",
    `http://localhost:${process.env.PLASMO_PUBLIC_DEV_PORT}/*`,
  ],
};

window.addEventListener("load", () => {
  console.log("content script loaded");

  document.body.style.background = "pink";
});
