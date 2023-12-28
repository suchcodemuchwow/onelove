"use client";

import React from "react";

import { Button } from "@acme/ui";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <h1>Frontend</h1>
      <Button onClick={() => alert("Hello world!")}>Click me</Button>
    </>
  );
}
