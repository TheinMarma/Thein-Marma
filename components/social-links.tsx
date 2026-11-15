import { socialLinks, contact } from "@/data/portfolio";

export function SocialLinks({
  includeContact = false,
}: {
  includeContact?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-zinc-500">
      {socialLinks.map((link, index) => (
        <span key={link.name} className="inline-flex items-center gap-3">
          {index > 0 && (
            <span aria-hidden="true" className="text-zinc-300">
              ·
            </span>
          )}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {link.name}
          </a>
        </span>
      ))}
      {includeContact && (
        <>
          <span aria-hidden="true" className="text-zinc-300">
            ·
          </span>
          <a
            href={`mailto:${contact.email}`}
            className="text-foreground hover:text-zinc-500"
          >
            Get in Touch ↗
          </a>
        </>
      )}
    </div>
  );
}
