import localFont from "next/font/local";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { SocialLinks } from "@/components/social-links";
import "./globals.css";

const plexSans = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexMono = localFont({
  src: "./fonts/ibm-plex-mono-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thein Marma — WordPress Developer & SaaS Builder",
    template: "%s · Thein Marma",
  },
  description:
    "WordPress developer and SaaS builder based in Bangladesh. 4+ years building websites for clients worldwide. Currently building Whatisdue and aaine.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">
          <Navigation />
          <main className="flex-1">{children}</main>
          <footer className="mt-24 flex flex-col gap-4 border-t border-zinc-200 py-8 sm:flex-row sm:items-center sm:justify-between">
            <SocialLinks />
            <span className="font-mono text-xs text-zinc-400">
              © 2026 Thein Marma. Built with care.
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
