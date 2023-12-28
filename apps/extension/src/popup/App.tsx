import { sendToBackground } from "@plasmohq/messaging";
import { Button } from "ui/components/ui/button";

import Welcome from "./components/Welcome";

function IndexPopup() {
  const onClick = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await sendToBackground({
      name: "ping" as never,
      body: {
        hello: "world",
      },
    });
    console.log(res);
  };

  return (
    <div style={{ width: 400, padding: 10 }}>
      <Welcome />
      <hr />
      <Button onClick={onClick}>Send to Background</Button>
    </div>
  );
}

export default IndexPopup;
