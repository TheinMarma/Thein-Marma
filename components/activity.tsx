import activity from "@/data/activity.json";

export function Activity() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-mono text-sm uppercase tracking-wider text-zinc-500">
          Activity
        </h2>
        <p className="text-sm text-zinc-600">
          GitHub contributions and YouTube uploads over the last year.
        </p>
      </div>
      <div
        className="flex flex-col gap-2"
        aria-label="Activity snapshot from November 2026"
      >
        <div className="flex w-full gap-[3px]" aria-hidden="true">
          {activity.months.map((month, i) => (
            <div key={i} className="relative h-3 min-w-0 flex-1">
              {month && (
                <span className="absolute left-0 top-0 font-mono text-[10px] leading-none text-zinc-500">
                  {month}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full gap-[3px]">
          {activity.weeks.map((week, i) => (
            <div key={i} className="flex min-w-0 flex-1 flex-col gap-[3px]">
              {week.map((day, j) => (
                <div
                  key={j}
                  title={day.label}
                  className={`aspect-square w-full rounded-[2px] ${day.color}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-zinc-500">
          <span className="mr-1">less</span>
          {[
            "bg-zinc-100",
            "bg-zinc-300",
            "bg-zinc-400",
            "bg-zinc-600",
            "bg-zinc-800",
          ].map((color) => (
            <span
              key={color}
              className={`h-2.5 w-2.5 rounded-[2px] ${color}`}
            />
          ))}
          <span className="ml-1">more</span>
        </div>
      </div>
    </section>
  );
}
