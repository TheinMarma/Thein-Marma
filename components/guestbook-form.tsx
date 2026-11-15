"use client";

import { useEffect, useState, type FormEvent } from "react";

type Message = { name: string; text: string; date: string };
const storageKey = "portfolio-guestbook-v1";

function isMessage(value: unknown): value is Message {
  if (typeof value !== "object" || value === null) return false;
  const message = value as Record<string, unknown>;
  return (
    typeof message.name === "string" &&
    typeof message.text === "string" &&
    typeof message.date === "string"
  );
}

export function GuestbookForm() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(
        localStorage.getItem(storageKey) ?? "[]",
      );
      if (Array.isArray(stored)) setMessages(stored.filter(isMessage));
    } catch {
      setStatus("Saved messages could not be loaded from this browser.");
    }
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const text = String(data.get("message") ?? "").trim();
    if (!name || !text) {
      setStatus("Please enter your name and a message.");
      return;
    }
    const message = {
      name,
      text,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    try {
      const stored: unknown = JSON.parse(
        localStorage.getItem(storageKey) ?? "[]",
      );
      const existing = Array.isArray(stored) ? stored.filter(isMessage) : [];
      const next = [message, ...existing];
      localStorage.setItem(storageKey, JSON.stringify(next));
      setMessages(next);
      form.reset();
      setStatus("Your message was saved in this browser.");
    } catch {
      setStatus(
        "Browser storage is unavailable. Your message has not been saved.",
      );
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={submit} className="flex flex-col gap-3">
        <label className="font-mono text-sm text-zinc-500" htmlFor="guest-name">
          Name
        </label>
        <input
          id="guest-name"
          name="name"
          required
          maxLength={60}
          autoComplete="name"
          className="border border-zinc-200 px-4 py-2"
          placeholder="Your name"
        />
        <label
          className="font-mono text-sm text-zinc-500"
          htmlFor="guest-message"
        >
          Message
        </label>
        <textarea
          id="guest-message"
          name="message"
          required
          maxLength={1000}
          rows={3}
          className="border border-zinc-200 px-4 py-2"
          placeholder="Say hello…"
        />
        <button
          className="border border-zinc-200 px-4 py-2 font-mono text-sm text-foreground hover:border-zinc-400"
          type="submit"
        >
          leave a message ↗
        </button>
        <p
          role="status"
          className="font-mono text-xs text-zinc-500 empty:hidden"
        >
          {status}
        </p>
      </form>
      <div>
        {messages.map((message, index) => (
          <article
            key={`${message.date}-${index}`}
            className="border-b border-zinc-200 py-4"
          >
            <p className="mb-2 whitespace-pre-wrap wrap-anywhere">
              {message.text}
            </p>
            <p className="font-mono text-xs text-zinc-500">
              {message.name} · {message.date} · saved locally
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
