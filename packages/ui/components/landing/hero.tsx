import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export interface Social {
  href: string;
  platform: "github" | "twitter" | "linkedin" | "instagram";
}

interface HeroHeaderProps {
  header: string;
  subheader: string;
  image: string;
  social?: Social[];
}

const IMG_SIZE = 150;

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
      {props.social && (
        <div className={"flex flex-col gap-y-2"}>
          Follow me on social media:
          <div className={"flex justify-center gap-2"}>
            {props.social.map((s) => {
              return (
                s && (
                  <Button
                    key={s.platform}
                    onClick={() => window.open(s.href, "_blank")}
                    rel={"noreferrer"}
                    variant={"outline"}
                  >
                    {Icons[s.platform]({ className: "mr-2" })}
                    {s.platform}
                  </Button>
                )
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
