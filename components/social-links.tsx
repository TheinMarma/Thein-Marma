import socials from "@/data/socials.json";

export function SocialIcon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const social = socials.find((item) => item.name === name);
  if (!social) return null;
  return (
    <svg
      viewBox={social.icon.viewBox}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      {social.icon.paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5 text-zinc-500">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className="hover:text-foreground"
        >
          <SocialIcon name={social.name} />
        </a>
      ))}
    </div>
  );
}
