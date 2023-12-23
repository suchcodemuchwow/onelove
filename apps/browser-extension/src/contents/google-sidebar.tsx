import cssText from "data-text:./google-sidebar.css";
import shadcnCssText from "data-text:../../../../packages/ui/styles/globals.css";
import type { PlasmoCSConfig } from "plasmo";
import { useEffect, useState } from "react";
// Inject to the webpage itself
import "./google-sidebar-base.css";

import { Button } from "@repo/ui/components/ui/button";

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"],
};

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText + shadcnCssText;
  return style;
};

export const getShadowHostId = () => "plasmo-google-sidebar";

const GoogleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("plasmo-google-sidebar-show", isOpen);
  }, [isOpen]);

  return (
    <div id="sidebar" className={isOpen ? "open" : "closed"}>
      <div id="root">
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "🟡 Close" : "🟣 Open"}
        </button>
        <div className="flex flex-col px-12 w-full justify-center">
          <p>The Easiest Way to Build, Test, and Ship browser extensions</p>
          <Button>Goooe</Button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSidebar;
