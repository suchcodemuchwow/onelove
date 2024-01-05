import { AuthenticationForm } from "./form";

export function AuthenticationPage() {
  return (
    <div
      className={"flex h-full w-full flex-col items-center justify-center py-8"}
    >
      <div
        className={
          "container flex w-full flex-col justify-center space-y-2 sm:w-[250px]"
        }
      >
        <div className={"flex flex-col space-y-2"}>
          <h1 className={"text-2xl font-semibold tracking-tight"}>
            Create an account
          </h1>
          <p className={"text-sm text-muted-foreground"}>
            Enter your email below to create your account
          </p>
        </div>
        <AuthenticationForm />
        <p className={"text-center text-sm text-muted-foreground"}>
          By clicking continue, you agree to our{" "}
          <a
            href={"/terms"}
            className={"underline underline-offset-4 hover:text-primary"}
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href={"/privacy"}
            className={"underline underline-offset-4 hover:text-primary"}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
