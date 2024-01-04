import React from "react";
import ReactDOM from "react-dom/client";

import HeroHeader from "@acme/ui/components/landing/hero";

import "@acme/ui/styles/globals.css";
import "@acme/ui/dist/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroHeader
      header={"Welcome to Onelove!"}
      subheader={
        "Web 🛜, Mobile 📱, Desktop 🖥️, Browser Extensions 🔮, APIs 👮‍♂️ and Scrapers 🕸️"
      }
      image={"icon.png"}
    />
  </React.StrictMode>,
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
