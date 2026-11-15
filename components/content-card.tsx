export type PortfolioItem = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  href?: string;
};

export function ContentCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex flex-col gap-3 border border-zinc-200 p-5">
      <h3 className="font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm font-medium leading-6 text-foreground">
        {item.subtitle}
      </p>
      {item.paragraphs.map((text) => (
        <p key={text} className="text-sm leading-6 text-zinc-600">
          {text}
        </p>
      ))}
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-fit font-mono text-xs text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-foreground"
        >
          {item.href.replace("https://", "")} <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}
