import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicko Balmes — Software Engineer & Full-Stack Developer",
  description:
    "The portfolio of Nicko Balmes, a junior software engineer and full-stack developer based in Quezon, Philippines.",
  openGraph: {
    title: "Nicko Balmes — Software Engineer & Full-Stack Developer",
    description:
      "Selected work, experience, and technical strengths of Nicko Balmes.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
