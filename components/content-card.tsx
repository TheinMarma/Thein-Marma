import Image from "next/image";

export type PortfolioItem = {
  title: string;
  icon: string;
  subtitle: string;
  paragraphs: string[];
  href?: string;
};

export function ContentCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <Image
          src={item.icon}
          alt=""
          width={42}
          height={42}
          className="product-symbol"
        />
        <span className="eyebrow">Product / 0{index + 1}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="product-subtitle">{item.subtitle}</p>
      <div className="product-description">
        {item.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>{item.href.replace("https://", "")}</span>
          <span className="link-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      )}
    </article>
  );
}
