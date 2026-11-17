import Image from "next/image";
import portrait from "@/app/TheinMarma Profile.png";
import { profile, contact } from "@/data/portfolio";
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
      <figure className="portrait">
        <div className="portrait-frame">
          <Image
            src={portrait}
            alt="Thein Marma"
            width={500}
            height={500}
            sizes="(max-width: 520px) 88px, (max-width: 760px) 140px, (max-width: 1000px) 220px, 260px"
            preload
          />
        </div>
      </figure>
      <div className="hero-copy">
        {profile.introduction.map((text) => (
          <p key={text}>{text}</p>
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
