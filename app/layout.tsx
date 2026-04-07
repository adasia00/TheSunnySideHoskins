import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sunny-Side | Hoskins Family Reunion",
  description:
    "Rooted in Love. Growing for Generations. The official landing page for The Sunny-Side: Hoskins Family Reunion.",
  keywords: [
    "Hoskins Family Reunion",
    "The Sunny-Side",
    "Family legacy",
    "Marvell Arkansas",
  ],
  openGraph: {
    title: "The Sunny-Side | Hoskins Family Reunion",
    description:
      "The first gathering of the descendants of Dwidell \"Sunny\" Hoskins Jr.",
    type: "website",
    url: "https://thesunnysidefamily.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.className} ${inter.className}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
