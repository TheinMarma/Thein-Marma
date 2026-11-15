export type ContentItem = {
  title: string;
  href: string;
  description: string;
  domain: string;
  icon?: { viewBox: string; paths: string[] };
};

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
    >
      ↗
    </span>
  );
}

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          {item.icon && (
            <svg
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-lg text-foreground"
              viewBox={item.icon.viewBox}
              width="1em"
              height="1em"
              fill="currentColor"
            >
              {item.icon.paths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </svg>
          )}
          <h3 className="font-medium text-foreground">{item.title}</h3>
        </div>
        <Arrow />
      </div>
      <p className="text-sm leading-6 text-zinc-600">{item.description}</p>
      <span className="mt-1 font-mono text-xs text-zinc-400">
        {item.domain}
      </span>
    </a>
  );
}
