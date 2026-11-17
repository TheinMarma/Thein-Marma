"use client";

import { useEffect, useState } from "react";

// Refresh in the browser so static exports never need an annual rebuild.
export function DynamicYear({
  initialYear,
  since = 0,
}: {
  initialYear: number;
  since?: number;
}) {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    const refresh = () => setYear(new Date().getFullYear());
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return <>{Math.max(0, year - since)}</>;
}
