import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Telugu } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  metadataBase: new URL("https://pureseva.in"),
  title: {
    default: "PureSeva — Gift a Meal, Made and Served with Care",
    template: "%s — PureSeva",
  },
  description:
    "PureSeva is a community food initiative in Vijayawada, Andhra Pradesh. You gift a meal in your name, and we cook it, serve it, and make sure no one goes to sleep hungry.",
  keywords: [
    "PureSeva",
    "gift a meal",
    "meal donation",
    "feed the hungry",
    "annadanam",
    "Vijayawada",
    "Andhra Pradesh",
    "food charity",
    "sponsor a meal",
  ],
  applicationName: "PureSeva",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "PureSeva",
    locale: "en_IN",
    url: "https://pureseva.in",
    title: "PureSeva — Gift a Meal, Made and Served with Care",
    description:
      "Gift a meal in your name. PureSeva cooks it fresh and serves it with care to people in need across Vijayawada, Andhra Pradesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureSeva — Gift a Meal, Made and Served with Care",
    description:
      "Gift a meal in your name. PureSeva cooks it fresh and serves it with care to people in need across Vijayawada, Andhra Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
