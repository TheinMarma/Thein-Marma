import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { SocialLinks } from "@/components/social-links";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Piyush Garg — Software Engineer, Content Creator, Educator",
    template: "%s · Piyush Garg",
  },
  description:
    "I build software and teach people how to build software. Founder of Teachyst, a white-labeled LMS that helps educators monetize their content globally.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/18c0bcdf4cea0f.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">
          <Navigation />
          <main className="flex-1">{children}</main>
          <footer className="mt-24 flex flex-col gap-4 border-t border-zinc-200 py-8 sm:flex-row sm:items-center sm:justify-between">
            <SocialLinks />
            <span className="font-mono text-xs text-zinc-400">© 2026</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
