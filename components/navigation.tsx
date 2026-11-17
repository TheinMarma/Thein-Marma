import Link from "next/link";
import Image from "next/image";
import portrait from "@/app/TheinMarma Profile.png";

export function Navigation() {
  return (
    <nav aria-label="Main navigation" className="navigation">
      <Link href="/" className="wordmark" aria-label="Thein Marma home">
        <Image
          src={portrait}
          alt=""
          width={44}
          height={44}
          sizes="44px"
          className="brand-avatar"
        />
        <span className="wordmark-caption">
          Developer
          <br />
          &amp; builder
        </span>
      </Link>
      <div className="nav-links">
        {[
          { name: "About", id: "about" },
          { name: "Products", id: "products" },
          { name: "Work", id: "work" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <a key={item.id} href={`/#${item.id}`}>
            {item.name}
            {item.id === "contact" && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}
