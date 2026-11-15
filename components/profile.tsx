import { profile } from "@/data/portfolio";
import { SocialLinks } from "./social-links";

export function Profile() {
  return (
    <section aria-labelledby="profile-heading" className="flex flex-col gap-7">
      <div
        className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-50 font-mono text-3xl text-zinc-600 ring-1 ring-zinc-200"
        aria-hidden="true"
      >
        TM
      </div>
      <div className="flex flex-col gap-4">
        <h1
          id="profile-heading"
          className="text-2xl font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </h1>
        <p className="font-medium leading-7 text-foreground">{profile.role}</p>
        {profile.introduction.map((text) => (
          <p key={text} className="leading-7 text-zinc-600">
            {text}
          </p>
        ))}
        <p className="font-mono text-xs leading-6 text-zinc-500">
          {profile.location}
        </p>
      </div>
      <SocialLinks includeContact />
    </section>
  );
}
