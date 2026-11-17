import { DynamicYear } from "./dynamic-year";
import { profile, contact, experienceStartYear } from "@/data/portfolio";
import { SocialLinks } from "./social-links";

export function Profile() {
  return (
    <section aria-labelledby="profile-heading" className="hero">
      <div className="hero-title">
        <p className="eyebrow">
          <span className="status-dot" /> Independent developer · Bangladesh
        </p>
        <h1 id="profile-heading">
          Thein Marma<span className="name-period">.</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
      </div>
      <div className="hero-copy">
        {profile.introduction.map((text) => (
          <p key={text}>
            {text.split("{experienceYears}").map((part, index) => (
              <span key={index}>
                {index > 0 && (
                  <DynamicYear
                    initialYear={new Date().getFullYear()}
                    since={experienceStartYear}
                  />
                )}
                {part}
              </span>
            ))}
          </p>
        ))}
        <div className="hero-actions">
          <a href={`mailto:${contact.email}`} className="button-primary">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
          <a href="#work" className="text-link">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="hero-foot">
        <SocialLinks />
        <p className="eyebrow">Working with clients worldwide</p>
      </div>
    </section>
  );
}
