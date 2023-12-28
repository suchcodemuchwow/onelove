import type { PlasmoMessaging } from "@plasmohq/messaging";

console.log("PING BACKGROUND");

const handler: PlasmoMessaging.MessageHandler<string> = (req, res) => {
  const message = querySomeApi(req.body);
  console.log({ message });
  res.send({
    message,
  });
};

export default handler;

const querySomeApi = (body?: string) => {
  return body;
};
