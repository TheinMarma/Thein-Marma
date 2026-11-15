import Link from "next/link";

export function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-8"
    >
      <Link
        href="/"
        className="font-mono text-sm text-foreground hover:text-zinc-500"
      >
        thein marma
      </Link>
      <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-zinc-500 sm:gap-4">
        {[
          { name: "about", id: "about" },
          { name: "products", id: "products" },
          { name: "work", id: "work" },
          { name: "contact", id: "contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            className="hover:text-foreground"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
