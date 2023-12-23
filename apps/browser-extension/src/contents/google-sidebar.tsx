import cssText from "data-text:./google-sidebar.css";
import type { PlasmoCSConfig } from "plasmo";
import { useEffect, useState } from "react";
// Inject to the webpage itself
import "./google-sidebar-base.css";

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"],
};

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
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
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "🟡 Close" : "🟣 Open"}
      </button>
      <p>The Easiest Way to Build, Test, and Ship browser extensions</p>
    </div>
  );
};

export default GoogleSidebar;
