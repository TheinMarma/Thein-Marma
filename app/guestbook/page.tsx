import type { Metadata } from "next";
import { GuestbookForm } from "@/components/guestbook-form";
import messages from "@/data/guestbook.json";

export const metadata: Metadata = { title: "Guestbook" };

export default function GuestbookPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Guestbook
        </h1>
        <p className="text-zinc-600">
          Leave a message. This recreation saves messages in your browser only.
        </p>
      </header>
      <GuestbookForm />
      <ul className="flex flex-col gap-6">
        {messages.map((message, index) => (
          <li key={index} className="flex flex-col gap-1">
            <p className="leading-7 text-foreground">{message.message}</p>
            <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
              <span>{message.byline}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
