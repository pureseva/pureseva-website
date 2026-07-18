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
    default: "Sponsor a Meal, Feed the Hungry in Vijayawada | PureSeva",
    template: "%s | PureSeva",
  },
  description:
    "Sponsor a meal with PureSeva to feed hungry people in Vijayawada. Pick breakfast, lunch, or dinner and we cook and serve fresh food in your name.",
  keywords: [
    "sponsor a meal",
    "donate a meal",
    "meal donation",
    "feed the hungry",
    "food donation",
    "annadanam",
    "food charity Vijayawada",
    "meal donation NGO",
    "gift a meal",
    "feed the poor",
    "community kitchen",
    "Vijayawada",
    "Andhra Pradesh",
    "PureSeva",
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
    title: "Sponsor a Meal, Feed the Hungry in Vijayawada | PureSeva",
    description:
      "Sponsor a meal and feed hungry people in Vijayawada. Choose breakfast, lunch, or dinner, and PureSeva cooks and serves fresh food in your name.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor a Meal, Feed the Hungry in Vijayawada | PureSeva",
    description:
      "Sponsor a meal and feed hungry people in Vijayawada. Choose breakfast, lunch, or dinner, and PureSeva cooks and serves fresh food in your name.",
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
