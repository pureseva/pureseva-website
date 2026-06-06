import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Anna Mithra",
  description:
    "Anna Mithra is a food distribution initiative serving Vijayawada — to make sure no neighbor sits down to an empty plate.",
};

const campaignTypes = [
  {
    title: "Single-Day Sponsorship",
    body: "A donor funds breakfast, lunch, or dinner for one day at our community kitchen in Vijayawada.",
  },
  {
    title: "Festival Meals",
    body: "Sponsorships tied to Sankranti, Ugadi, Vinayaka Chaturthi — with traditional menus.",
  },
  {
    title: "Memorial Campaigns",
    body: "Recurring distributions served in the name of a loved one, on dates that matter to the donor.",
  },
];

const meals = [
  {
    title: "Breakfast",
    body: "Idli, upma, pongal — served with chutney and sambar.",
  },
  {
    title: "Lunch",
    body: "Rice, sambar, rasam, curry, and curd. A full Andhra thali.",
  },
  {
    title: "Dinner",
    body: "Rice or chapati with curry, dal, and curd.",
  },
  {
    title: "Festival & Sponsored Menus",
    body: "Pongal, payasam, and traditional sweets on festival days. Donors may request specific dishes within seasonal availability.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="about-hero">
        <div className="eyebrow">Our Story</div>
        <h1>A meal, a moment, a friend.</h1>
        <p>
          Anna Mithra is a food distribution initiative serving Vijayawada. We
          exist for a single reason — to make sure no neighbor of ours sits
          down to an empty plate.
        </p>
      </div>

      <section className="about-body">
        <h2>Who We Are</h2>
        <p>
          In Andhra, a meal has never only been about food. It is the moment a
          stranger becomes a guest, and a guest becomes a friend. Anna Mithra
          was founded on that same belief: that no one in our community should
          sit down to an empty plate, and no one should eat alone.
        </p>
        <p>
          Our model is simple. Donors sponsor a meal — breakfast, lunch, or
          dinner — in their own name. Anna Mithra prepares the food and serves
          it on their behalf, with the dignity their gesture deserves.
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
          Every Anna Mithra meal begins the same way: with a sponsor, a date,
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

        <h2>What We Serve</h2>
        <p>
          Our food is prepared fresh in shared community kitchens, sourced
          where possible from local farmers and millers. We measure success in
          meals served on time — and in donors who return to sponsor again.
        </p>
        <div className="locations">
          {meals.map((meal) => (
            <div className="location" key={meal.title}>
              <h4>{meal.title}</h4>
              <p>{meal.body}</p>
            </div>
          ))}
        </div>

        <h2>Where We Work</h2>
        <p>
          We currently serve in <strong>Vijayawada</strong>, Andhra Pradesh.
          Working in one city lets us keep every promise we make — meals
          arrive warm, on time, and from kitchens we know personally. As our
          community of sponsors grows, so will the neighborhoods we reach.
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
          <a href="mailto:hello@annamithra.org">hello@annamithra.org</a> · +91
          XXXXX XXXXX
          <br />
          Vijayawada, Andhra Pradesh, India
        </p>
      </section>

      <section className="cta-band">
        <h2>Be a friend to someone today.</h2>
        <div className="telugu-cta">ఈ రోజు ఎవరికైనా మిత్రుడు అవ్వండి.</div>
        <Link href="/sponsor">Sponsor a Meal →</Link>
      </section>
    </main>
  );
}
