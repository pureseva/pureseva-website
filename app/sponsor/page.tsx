import type { Metadata } from "next";
import SponsorForm from "@/components/SponsorForm";

export const metadata: Metadata = {
  title: "Sponsor a Meal — Anna Mithra",
  description:
    "Choose a meal, pick a date, and Anna Mithra will serve it in your name to neighbors in Vijayawada.",
};

export default function SponsorPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Sponsor a Meal</h1>
        <p>
          Choose a meal, pick a date, and we&apos;ll serve it in your name —
          in Vijayawada.
        </p>
      </div>
      <SponsorForm />
    </main>
  );
}
