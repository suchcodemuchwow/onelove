import { Button, Calendar } from "@acme/ui";

import "@acme/ui/dist/index.css";

import React from "react";

export default function NewTab() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="h-[600px] w-[600px] bg-red-300">
      <Button>Click me</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
