import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Telugu } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
});

export const metadata: Metadata = {
  title: "Anna Mithra — A friend at every meal.",
  description:
    "Anna Mithra is a community-led platform for sponsored meal distributions in Vijayawada, Andhra Pradesh. Sponsor a meal in your name — we cook it, serve it, and make sure no neighbor sits down to an empty plate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${notoSansTelugu.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
