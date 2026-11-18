import { DynamicYear } from "@/components/dynamic-year";
import localFont from "next/font/local";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/next";
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
    "WordPress developer and SaaS builder based in Bangladesh. Building websites for clients worldwide since 2022. Currently building Whatisdue and aaine.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="site-shell">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <footer className="site-footer">
            <span>
              © <DynamicYear initialYear={new Date().getFullYear()} /> Thein
              Marma. Built with care.
            </span>
            <a href="#main-content">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
