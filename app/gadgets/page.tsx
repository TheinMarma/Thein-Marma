import type { Metadata } from "next";
export const metadata: Metadata = { title: "Gadgets" };
export default function GadgetsPage() {
  return (
    <div className="flex flex-col gap-6 py-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {"Gadgets"}
        </h1>
        <p className="text-zinc-600">
          {"Gear I use every day. Links are Amazon affiliate links."}
        </p>
      </header>
      <div className="flex flex-col">
        <a
          className="group flex items-start justify-between gap-4 border-b border-zinc-200 px-2 py-4 transition-colors hover:bg-zinc-50"
          href="https://amzn.to/3PWziv7"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-medium text-foreground">
              {"MacBook Pro (M5 Pro)"}
            </span>
            <span className="text-sm text-zinc-600">
              {"Daily driver for everything — dev, editing, recording."}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          >
            {"↗"}
          </span>
        </a>
        <a
          className="group flex items-start justify-between gap-4 border-b border-zinc-200 px-2 py-4 transition-colors hover:bg-zinc-50"
          href="https://amzn.to/46ZcPSa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-medium text-foreground">
              {"Logitech MX Mechanical"}
            </span>
            <span className="text-sm text-zinc-600">
              {"Low-profile mechanical keyboard, quiet and comfortable."}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          >
            {"↗"}
          </span>
        </a>
        <a
          className="group flex items-start justify-between gap-4 border-b border-zinc-200 px-2 py-4 transition-colors hover:bg-zinc-50"
          href="https://amzn.to/3AEycfL"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-medium text-foreground">
              {"Logitech MX Master 3S"}
            </span>
            <span className="text-sm text-zinc-600">
              {"The mouse. Precise, ergonomic, great scroll wheel."}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          >
            {"↗"}
          </span>
        </a>
        <a
          className="group flex items-start justify-between gap-4 border-b border-zinc-200 px-2 py-4 transition-colors hover:bg-zinc-50"
          href="https://amzn.to/4dCmqkD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-medium text-foreground">
              {"BenQ 4K Monitor"}
            </span>
            <span className="text-sm text-zinc-600">
              {"Crisp 4K panel with solid color for long working days."}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          >
            {"↗"}
          </span>
        </a>
      </div>
    </div>
  );
}
