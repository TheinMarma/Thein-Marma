import Image from "next/image";
import { SocialLinks, SocialIcon } from "./social-links";
export function Profile() {
  return (
    <section className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <Image
          alt="Piyush Garg"
          className="h-28 w-28 rounded-full object-cover ring-1 ring-zinc-200"
          decoding="async"
          height="112"
          src="/assets/7f795fbf1de8f3.png"
          width="112"
        />
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {"Piyush Garg"}
        </h1>
        <p className="leading-7 text-zinc-600">
          {"Software Engineer, Content Creator, Educator"}
        </p>
        <p className="max-w-xl leading-7 text-zinc-600">
          {
            "I build software and teach people how to build software. Founder of Teachyst, a white-labeled LMS that helps educators monetize their content globally."
          }
        </p>
      </div>
      <SocialLinks />
      <div className="flex flex-col gap-2 font-mono text-sm text-zinc-500">
        <div className="flex items-center gap-2.5">
          <SocialIcon name="YouTube" size={15} />
          <span>428K subscribers · 679 videos</span>
        </div>
        <div className="flex items-center gap-2.5">
          <SocialIcon name="GitHub" size={15} />
          <span>6.4K followers · 195 repos</span>
        </div>
      </div>
    </section>
  );
}
