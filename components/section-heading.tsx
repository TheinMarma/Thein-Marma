export function SectionHeading({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
