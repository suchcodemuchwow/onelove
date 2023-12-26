import "./globals.css";
import React from "react";
import { Calendar } from "@repo/ui/components/ui/calendar";

export default function NewTab() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div id="root">
      Baturalpppp
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
