import type { PlasmoCSConfig } from "plasmo";
import shadcnCssText from "data-text:../style.css";

import { Button, Popover, PopoverContent, PopoverTrigger } from "@acme/ui";

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ["https://www.google.com/*"],
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = shadcnCssText;
  return style;
};

const GoogleSidebar = () => {
  const container = document.getElementById("plasmo-shadow-container");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"default"} className={"text-nowrap"}>
          ❤️ Onelove
        </Button>
      </PopoverTrigger>
      <PopoverContent className={"w-80"} container={container}>
        <div className={"grid gap-4"}>
          <div className={"space-y-2"}>
            <h4 className={"font-medium leading-none"}>Onelove</h4>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GoogleSidebar;
