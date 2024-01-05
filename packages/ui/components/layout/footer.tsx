import Link from "next/link";

export interface FooterProps {
  author: string;
  siteName: string;
  navLinks: {
    route: string;
    path: string;
  }[];
}

export function Footer(props: FooterProps) {
  return (
    <footer className={"mt-auto"}>
      <div className={"mx-auto w-full max-w-screen-xl p-6 md:py-8"}>
        <div className={"sm:flex sm:items-center sm:justify-between"}>
          <Link href={"/"}>
            <h1 className={"mb-2 text-2xl font-bold sm:mb-0"}>
              {props.siteName}
            </h1>
          </Link>
          <ul
            className={
              "mb-6 flex flex-wrap items-center text-primary opacity-60 sm:mb-0"
            }
          >
            {props.navLinks.map((link) => (
              <li key={link.route}>
                <Link
                  href={link.path}
                  className={"mr-4 hover:underline md:mr-6"}
                >
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className={"my-6 text-muted-foreground sm:mx-auto lg:my-8"} />
        <span className={"block text-sm text-muted-foreground sm:text-center"}>
          © {new Date().getFullYear()}{" "}
          <a
            target={"_blank"}
            href={"https://redpangilinan.live/"}
            className={"hover:underline"}
            rel={"noreferrer"}
          >
            {props.author}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
