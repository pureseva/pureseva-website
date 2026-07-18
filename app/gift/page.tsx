import type { Metadata } from "next";
import GiftForm from "@/components/GiftForm";

export const metadata: Metadata = {
  title: "Gift a Meal Online, Donate Food in Vijayawada",
  description:
    "Gift a meal online with PureSeva. Pick breakfast, lunch, or dinner, choose a date, and we cook and serve fresh food to people in need across Vijayawada.",
  alternates: {
    canonical: "/gift",
  },
  openGraph: {
    title: "Gift a Meal Online, Donate Food in Vijayawada",
    description:
      "Gift a meal online with PureSeva. Pick a meal, choose a date, and we cook and serve fresh food to people in need across Vijayawada.",
    url: "https://pureseva.in/gift",
  },
};

export default function GiftPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Gift a Meal</h1>
        <p>
          Choose a meal to gift, pick a date, and we will cook and serve it in
          your name across Vijayawada.
        </p>
      </div>
      <GiftForm />
    </main>
  );
}
