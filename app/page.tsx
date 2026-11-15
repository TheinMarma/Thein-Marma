import Link from "next/link";
import { Profile } from "@/components/profile";
import { Activity } from "@/components/activity";
import { Cohorts } from "@/components/cohorts";
import { ContentCard, Arrow } from "@/components/content-card";
import products from "@/data/products.json";
import courses from "@/data/courses.json";
import videos from "@/data/videos.json";

const headingClass = "font-mono text-sm uppercase tracking-wider text-zinc-500";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14 py-8">
      <Profile />
      <Activity />
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h2 className={headingClass}>Latest videos</h2>
          <a
            className="font-mono text-sm text-zinc-500 hover:text-foreground"
            href="https://www.youtube.com/@piyushgargdev/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            all →
          </a>
        </div>
        <div className="flex flex-col">
          {videos.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 border-b border-zinc-200 px-2 py-3 transition-colors hover:bg-zinc-50"
            >
              <div className="flex flex-col gap-0.5">
                <span className="line-clamp-2 text-foreground">
                  {video.title}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {video.date}
                </span>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className={headingClass}>Products</h2>
          <p className="text-zinc-600">
            Some of the products I&apos;ve been building.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {products.map((item) => (
            <ContentCard key={item.href} item={item} />
          ))}
        </div>
      </section>
      <Cohorts />
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h2 className={headingClass}>Courses</h2>
          <Link
            href="/courses/"
            className="font-mono text-sm text-zinc-500 hover:text-foreground"
          >
            all →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {courses.map((item) => (
            <ContentCard key={item.href} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
