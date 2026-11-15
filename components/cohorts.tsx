export function Cohorts() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-mono text-sm uppercase tracking-wider text-zinc-500">
          {"Cohorts"}
        </h2>
        <p className="text-zinc-600">{"Live, cohort-based programs."}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          className="group relative flex flex-col gap-3 border border-zinc-300 bg-zinc-50 p-5 transition-colors hover:border-foreground hover:bg-zinc-100"
          href="https://chaicode.com/cohorts/gen-ai"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
              </span>
              {"Live"}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            >
              {"↗"}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {"GenAI with JavaScript"}
            </h3>
            <p className="text-sm leading-6 text-zinc-600">
              {
                "Become a Forward Deployed Engineer. Ship real GenAI systems with LLMs, RAG, Agents & MCP in JavaScript."
              }
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2 border-t border-zinc-200 pt-3 font-mono text-xs text-zinc-500">
            <svg
              className="shrink-0 text-zinc-400"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path>
            </svg>
            {"Started 5mo ago"}
          </div>
        </a>
        <a
          className="group relative flex flex-col gap-3 border border-zinc-300 bg-zinc-50 p-5 transition-colors hover:border-foreground hover:bg-zinc-100"
          href="https://chaicode.com/cohorts/web-dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
              </span>
              {"Live"}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            >
              {"↗"}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {"Full Stack Web Development"}
            </h3>
            <p className="text-sm leading-6 text-zinc-600">
              {
                "Master modern full-stack web development with live sessions, hands-on projects, and personalized mentorship from industry experts."
              }
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2 border-t border-zinc-200 pt-3 font-mono text-xs text-zinc-500">
            <svg
              className="shrink-0 text-zinc-400"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path>
            </svg>
            {"Started 10mo ago"}
          </div>
        </a>
      </div>
    </section>
  );
}
