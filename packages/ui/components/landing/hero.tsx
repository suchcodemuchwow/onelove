import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import { Button } from "../ui/button";

interface HeroHeaderProps {
  header: string;
  subheader: string;
  image: string;
}

const IMG_SIZE = 150;
const social = [
  {
    name: "GitHub",
    href: "https://www.github.com/suchcodemuchwow/onelove",
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/suchcodemuchwow",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/suchcodemuchwow",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/suchcodemuchwow",
    icon: LinkedinIcon,
  },
];

export function HeroHeader(props: HeroHeaderProps) {
  const { header, subheader, image } = props;

  return (
    <section className={"flex h-full flex-col justify-center py-4 text-center"}>
      <div className={"flex flex-grow flex-col items-center justify-center"}>
        <img src={image} width={IMG_SIZE} height={IMG_SIZE} alt={"logo"} />
        <div className={"flex flex-col items-center gap-4 text-center"}>
          <div className={"space-y-4"}>
            <h1 className={"text-4xl font-bold"}>{header}</h1>
            <h2 className={"text-lg font-light text-muted-foreground"}>
              {subheader}
            </h2>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        Follow me on social media:
        <div className={"flex justify-center gap-2"}>
          {social.map((s) => (
            <Button
              key={s.name}
              onClick={() => window.open(s.href, "_blank")}
              rel={"noreferrer"}
              variant={"outline"}
            >
              <s.icon size={12} className={"mr-2"} />
              {s.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
