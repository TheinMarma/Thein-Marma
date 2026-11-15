import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import courses from "@/data/courses.json";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6 py-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Courses
        </h1>
        <p className="text-zinc-600">Things I teach.</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {courses.map((item) => (
          <ContentCard key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}
