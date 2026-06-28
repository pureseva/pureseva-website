import type { Metadata } from "next";
import GiftForm from "@/components/GiftForm";

export const metadata: Metadata = {
  title: "Gift a Meal — PureSeva",
  description:
    "Choose a meal, pick a date, and PureSeva will cook and serve it in your name across Vijayawada.",
};

export default function GiftPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Gift a Meal</h1>
        <p>
          Choose a meal, pick a date, and we will cook and serve it in your
          name across Vijayawada.
        </p>
      </div>
      <GiftForm />
    </main>
  );
}
