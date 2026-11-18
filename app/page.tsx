import { DynamicYear } from "@/components/dynamic-year";
import { Profile } from "@/components/profile";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { Analytics } from "@vercel/analytics/next"
import {
  experienceStartYear,
  about,
  products,
  work,
  experience,
  technologies,
  contact,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Profile />
      <section
        id="about"
        aria-labelledby="about-heading"
        className="portfolio-section about-section"
      >
        <SectionHeading number="01" title="About" id="about-heading" />
        <div className="section-body about-copy">
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <div className="about-note">
            <span className="note-number">
              <DynamicYear
                initialYear={new Date().getFullYear()}
                since={experienceStartYear}
              />
              +
            </span>
            <span>
              Years building websites
              <br />
              for businesses &amp; agencies
            </span>
          </div>
        </div>
      </section>
      <section
        id="products"
        aria-labelledby="products-heading"
        className="portfolio-section"
      >
        <SectionHeading number="02" title="Products" id="products-heading" />
        <div className="section-body">
          <p className="section-intro">
            Some of the products I&apos;m building.
          </p>
          <div className="product-grid">
            {products.map((item, index) => (
              <ContentCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="work"
        aria-labelledby="work-heading"
        className="portfolio-section"
      >
        <SectionHeading number="03" title="Selected Work" id="work-heading" />
        <div className="section-body">
          <p className="section-intro">
            I&apos;ve built 100+ websites for clients across different
            industries. Here are a few of my selected projects.
          </p>
          <div className="work-list">
            {work.map((item, index) => (
              <article key={item.title} className="work-row">
                <div className="work-identity">
                  <span className="eyebrow">0{index + 1} / WordPress</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="work-detail">
                  {item.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Visit website <span aria-hidden="true">↗</span>
                      <span className="sr-only"> — {item.title}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="portfolio-section"
      >
        <SectionHeading
          number="04"
          title="Experience"
          id="experience-heading"
        />
        <div className="section-body">
          <p className="section-intro">
            A look at my professional experience in web development.
          </p>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.team} className="experience-item">
                <div className="experience-title">
                  <h3>{item.role}</h3>
                  <p>{item.team}</p>
                </div>
                <p className="experience-date">{item.dates}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="technologies"
        aria-labelledby="technologies-heading"
        className="portfolio-section"
      >
        <SectionHeading
          number="05"
          title="My toolkit"
          id="technologies-heading"
        />
        <div className="section-body">
          <p className="section-intro">
            Technologies I use across client work and personal projects.
          </p>
          <dl className="toolkit">
            {technologies.map((item) => (
              <div key={item.category}>
                <dt>{item.category}</dt>
                <dd>
                  {item.items.split(", ").map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="portfolio-section contact-section"
      >
        <SectionHeading number="06" title="Contact" id="contact-heading" />
        <div className="section-body">
          <h3>
            Have something
            <br />
            in mind<span className="name-period">?</span>
          </h3>
          <p>
            I&apos;m always interested in connecting with people working on
            interesting projects.
          </p>
          <p>
            Whether you need help with a WordPress website, want to collaborate
            on a project, or just want to talk about something you&apos;re
            building, feel free to reach out.
          </p>
          <a href={`mailto:${contact.email}`} className="contact-email">
            {contact.email}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-alternatives">
            <a href={`mailto:${contact.alternateEmail}`}>
              {contact.alternateEmail}
            </a>
            <a href={contact.upwork} target="_blank" rel="noopener noreferrer">
              Find me on Upwork ↗
            </a>
          </div>
          <p className="social-caption">
            You can also find me on LinkedIn, GitHub, and X.
          </p>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}

<Analytics/>