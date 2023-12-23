import { sendToBackground } from "@plasmohq/messaging";
import Welcome from "./components/Welcome";
import { Button } from "@repo/ui/components/ui/button";

function IndexPopup() {
  const onClick = async () => {
    const res = await sendToBackground({
      name: "ping" as never,
      body: {
        hello: "world",
      },
    });
    console.log({ res });
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
