import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — PureSeva",
  description:
    "PureSeva is a community food initiative. We exist for one reason: to make sure no one goes to sleep hungry.",
};

const campaignTypes = [
  {
    title: "Single-Day Gift",
    body: "Gift a full day of meals served from our community kitchens.",
  },
  {
    title: "Festival and Occasion Meals",
    body: "Give around festivals, milestones, and the days that mean something to you.",
  },
  {
    title: "Memorial and Recurring Giving",
    body: "Set up regular meals served in the name of a loved one, on the dates you choose.",
  },
];

const promises = [
  {
    title: "Freshly Cooked",
    body: "We cook the same day in shared community kitchens, and we source where we can from local farmers and producers.",
  },
  {
    title: "For Every Occasion",
    body: "Everyday meals, festival spreads, or a menu you have in mind. We cook for the moment that matters to you.",
  },
  {
    title: "Warm and On Time",
    body: "We deliver when we promise, and we serve in the name of the person who made it possible.",
  },
  {
    title: "See It for Yourself",
    body: "Join us for the day, from the cooking to the serving, and see your seva through from start to finish.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="about-hero">
        <div className="eyebrow">Our Story</div>
        <h1>A gift you can see.</h1>
        <p>
          PureSeva connects compassionate hearts with people in need through the
          simple act of sharing a meal.
        </p>
        <p>
          When you sponsor a meal, we prepare, serve, and deliver it with care
          and dignity. Every contribution becomes a moment of hope, reminding
          someone they are seen, valued, and never forgotten.
        </p>
      </div>

      <section className="about-body">
        <h2>Who We Are</h2>
        <p>
          We started PureSeva on a simple belief, that feeding someone is one
          of the purest forms of service there is. In a city with plenty to
          give, no one should go hungry.
        </p>
        <p>
          Our model is simple. You gift a meal in your own name, and we carry
          out the service for you. We source the food, cook it fresh, and
          serve it to those who need it, with care and dignity.
        </p>
        <p>
          We serve everyone, whatever their caste, faith, language, or means.
          Every meal is an act of seva, made possible by someone who chose to
          give, and who asks for nothing in return but that the food arrive
          fresh, warm, and on time.
        </p>

        <h2>Our Approach</h2>
        <p>
          Every PureSeva meal starts the same way, with a gift, a date, and
          our promise to serve it well. We offer three ways to give.
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
          We keep our food broad on purpose. Whatever the occasion calls for,
          we cook it fresh and serve it with care. We measure ourselves by
          meals served on time, and by the people who come back to give again.
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
          We proudly serve <strong>Vijayawada</strong>, delivering fresh, quality
          meals with care and consistency. Our local presence helps us ensure
          every order meets the highest standards.
        </p>
        <p>
          <strong>Coming Soon:</strong> We&rsquo;re expanding across{" "}
          <strong>Andhra Pradesh</strong> and <strong>Telangana</strong>,
          reaching more people while maintaining the same commitment to quality
          and service.
        </p>

        <h2>Contact Us</h2>
        <p>
          <a href="mailto:contactsus@pureseva.in">contactsus@pureseva.in</a> · +91
          XXXXX XXXXX
          <br />
          Vijayawada, Andhra Pradesh, India
        </p>
      </section>

      <section className="cta-band">
        <h2>Gift a meal today.</h2>
        <div className="telugu-cta">ఈ రోజు మీ సేవను అందించండి.</div>
        <Link href="/gift">Gift a Meal →</Link>
      </section>
    </main>
  );
}
