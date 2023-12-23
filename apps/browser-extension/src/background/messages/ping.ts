import type { PlasmoMessaging } from "@plasmohq/messaging";

console.log("PING BACKGROUND");

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log();
  const message = await querySomeApi(req.body);
  console.log({ message });
  res.send({
    message,
  });
};

export default handler;

const querySomeApi = async (body: any) => {
  return body;
};
