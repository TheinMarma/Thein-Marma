import { Profile } from "@/components/profile";
import { ContentCard } from "@/components/content-card";
import { SocialLinks } from "@/components/social-links";
import {
  about,
  products,
  work,
  experience,
  technologies,
  contact,
} from "@/data/portfolio";

const headingClass = "font-mono text-sm uppercase tracking-wider text-zinc-500";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14 py-8">
      <Profile />
      <section
        id="about"
        aria-labelledby="about-heading"
        className="flex flex-col gap-4"
      >
        <h2 id="about-heading" className={headingClass}>
          About
        </h2>
        {about.map((text) => (
          <p key={text} className="leading-7 text-zinc-600">
            {text}
          </p>
        ))}
      </section>
      <section
        id="products"
        aria-labelledby="products-heading"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <h2 id="products-heading" className={headingClass}>
            Products
          </h2>
          <p className="text-zinc-600">
            Some of the products I&apos;m building.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {products.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
      <section
        id="work"
        aria-labelledby="work-heading"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <h2 id="work-heading" className={headingClass}>
            Selected Work
          </h2>
          <p className="text-zinc-600">
            A few websites I&apos;ve worked on for clients and businesses.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {work.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <h2 id="experience-heading" className={headingClass}>
            Experience
          </h2>
          <p className="text-zinc-600">
            Some of the teams I&apos;ve worked with.
          </p>
        </div>
        {experience.map((item) => (
          <article
            key={item.team}
            className="flex flex-col gap-2 border-b border-zinc-200 pb-5 last:border-0 last:pb-0"
          >
            <h3 className="font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm font-medium text-zinc-600">{item.team}</p>
            <p className="text-sm leading-6 text-zinc-600">
              {item.description}
            </p>
          </article>
        ))}
      </section>
      <section
        id="technologies"
        aria-labelledby="technologies-heading"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <h2 id="technologies-heading" className={headingClass}>
            Tools &amp; Technologies
          </h2>
          <p className="text-zinc-600">
            Technologies I use across client work and personal projects.
          </p>
        </div>
        <dl className="flex flex-col gap-4">
          {technologies.map((item) => (
            <div key={item.category} className="flex flex-col gap-1">
              <dt className="text-sm font-semibold text-foreground">
                {item.category}
              </dt>
              <dd className="text-sm leading-6 text-zinc-600">{item.items}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="flex flex-col gap-5 border-t border-zinc-200 pt-8"
      >
        <h2 id="contact-heading" className={headingClass}>
          Contact
        </h2>
        <h3 className="text-2xl font-semibold tracking-tight">
          Have something in mind?
        </h3>
        <p className="leading-7 text-zinc-600">
          I&apos;m always interested in connecting with people working on
          interesting projects.
        </p>
        <p className="leading-7 text-zinc-600">
          Whether you need help with a WordPress website, want to collaborate on
          a project, or just want to talk about something you&apos;re building,
          feel free to reach out.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="w-fit border border-zinc-300 px-5 py-3 font-mono text-sm hover:border-zinc-500 hover:bg-zinc-50"
        >
          Get in Touch <span aria-hidden="true">↗</span>
        </a>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
          <a className="hover:text-foreground" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="hover:text-foreground"
            href={`mailto:${contact.alternateEmail}`}
          >
            {contact.alternateEmail}
          </a>
          <a
            className="hover:text-foreground"
            href={contact.upwork}
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork ↗
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          You can also find me on LinkedIn, GitHub, and X.
        </p>
        <SocialLinks />
      </section>
    </div>
  );
}
