import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — PureSeva",
  description:
    "PureSeva is a food distribution initiative serving Vijayawada — to make sure no one sits down to an empty plate.",
};

const campaignTypes = [
  {
    title: "Single-Day Gift",
    body: "Gift a full day of food service at our community kitchen in Vijayawada.",
  },
  {
    title: "Festival & Occasion Meals",
    body: "Gifts tied to festivals, milestones, and the moments that matter to you.",
  },
  {
    title: "Memorial Campaigns",
    body: "Recurring distributions served in the name of a loved one, on dates that matter to you.",
  },
];

const promises = [
  {
    title: "Freshly Prepared",
    body: "Cooked the same day in shared community kitchens, sourced where possible from local farmers and producers.",
  },
  {
    title: "For Every Occasion",
    body: "Everyday food, festival spreads, or a menu you have in mind — we cook for the moment that matters.",
  },
  {
    title: "Warm and On Time",
    body: "Food arrives when it is promised, in the name of the person who made it possible.",
  },
  {
    title: "Be There in Person",
    body: "You are welcome to visit and stay with us through the whole day — from preparing the food to serving it to every guest.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="about-hero">
        <div className="eyebrow">Our Story</div>
        <h1>A meal, a moment, a friend.</h1>
        <p>
          PureSeva is a food distribution initiative serving Vijayawada. We
          exist for one reason — to make sure no one sits down to an empty
          plate.
        </p>
      </div>

      <section className="about-body">
        <h2>Who We Are</h2>
        <p>
          In Andhra, a meal has never only been about food. It is the moment a
          stranger becomes a guest, and a guest becomes a friend. PureSeva
          was founded on that same belief: that no one in our community should
          sit down to an empty plate, and no one should eat alone.
        </p>
        <p>
          Our model is simple. You gift a meal in your own name. Anna
          Mithra prepares the food and serves it on your behalf, with the
          dignity your gesture deserves.
        </p>
        <p>
          We serve regardless of caste, faith, language, or status. The table
          is open. The plate is full. Every meal is the result of someone
          choosing to feed a stranger as they would feed a friend — and asking
          nothing in return but that the meal arrive warm, on time, and in
          their name.
        </p>

        <h2>Our Approach</h2>
        <p>
          Every PureSeva meal begins the same way: with a gift, a date,
          and the assumption that the person receiving the meal is a guest, not
          a recipient. We run three kinds of campaigns:
        </p>

        <div className="campaign-types">
          {campaignTypes.map((type) => (
            <div className="campaign-type" key={type.title}>
              <h3>{type.title}</h3>
              <p>{type.body}</p>
            </div>
          ))}
        </div>

        <h2>How We Serve</h2>
        <p>
          We keep our food services broad on purpose — whatever the occasion
          calls for, prepared fresh and served with care. We measure success in
          meals served on time, and in those who return to gift again.
        </p>
        <div className="locations">
          {promises.map((promise) => (
            <div className="location" key={promise.title}>
              <h4>{promise.title}</h4>
              <p>{promise.body}</p>
            </div>
          ))}
        </div>

        <h2>Where We Work</h2>
        <p>
          We currently serve in <strong>Vijayawada</strong>, Andhra Pradesh.
          Working in one city lets us keep every promise we make — meals
          arrive warm, on time, and from kitchens we know personally. As more
          people choose to gift, so will the areas we reach.
        </p>

        <h2>Our Team</h2>
        <p>
          <strong>[Founder Name]</strong> — Founder &amp; Trustee
          <br />
          <em>[Replace with founder biography.]</em>
        </p>
        <p>
          <strong>[Program Lead Name]</strong> — Director of Operations
          <br />
          <em>[Replace with program-lead biography.]</em>
        </p>

        <h2>Contact Us</h2>
        <p>
          <a href="mailto:hello@pureseva.com">hello@pureseva.com</a> · +91
          XXXXX XXXXX
          <br />
          Vijayawada, Andhra Pradesh, India
        </p>
      </section>

      <section className="cta-band">
        <h2>Be a friend to someone today.</h2>
        <div className="telugu-cta">ఈ రోజు ఎవరికైనా మిత్రుడు అవ్వండి.</div>
        <Link href="/gift">Gift a Meal →</Link>
      </section>
    </main>
  );
}
