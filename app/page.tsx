import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

const heroSlidesLeft = [
  {
    src: "/hero/slide-1.jpg",
    alt: "Volunteers serving food from large pots at a community gathering",
  },
  {
    src: "/hero/slide-2.jpg",
    alt: "Volunteers serving fresh meals from steel containers",
  },
  {
    src: "/hero/slide-3.jpg",
    alt: "Children receiving warm meals on plates",
  },
];

const heroSlidesRight = [
  {
    src: "/hero/slide-4.jpg",
    alt: "A neighborhood food distribution stall",
  },
  {
    src: "/hero/slide-5.jpg",
    alt: "Rice being served at a community meal",
  },
  {
    src: "/hero/slide-6.jpg",
    alt: "Food being shared with elderly neighbors",
  },
];

const steps = [
  {
    num: "1",
    title: "Choose Your Gift",
    body: "Pick the meal you want to gift, whether breakfast, lunch, or dinner, then choose a date and a location that matters to you.",
  },
  {
    num: "2",
    title: "We Cook and Serve",
    body: "Our community kitchens cook your gifted meal fresh, and we serve it with care to people who need it.",
  },
  {
    num: "3",
    title: "Gifted in Your Name",
    body: "Your gift is served in your name. One gifted meal at a time, your giving helps end hunger.",
  },
];

const meals = [
  {
    title: "Breakfast",
    telugu: "అల్పాహారం",
    body: "Idli, upma, or pongal with chutney and sambar. A warm, filling start to the day.",
    photo: "[ Breakfast Photo ]",
  },
  {
    title: "Lunch",
    telugu: "భోజనం",
    body: "A full meal with rice or chapathi, sambar, rasam, curry, and curd, cooked and served the same day.",
    photo: "[ Lunch Photo ]",
  },
  {
    title: "Dinner",
    telugu: "రాత్రి భోజనం",
    body: "Rice or chapati with curry, dal, and curd. A simple, satisfying end to the day.",
    photo: "[ Dinner Photo ]",
  },
];

const stats = [
  { num: "1,200+", label: "Meals Served" },
  { num: "45+", label: "Gifts Given" },
  { num: "3", label: "Meals Served Daily" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="rangoli" aria-hidden="true">
          ✦
        </div>
        <div className="hero-banner">
          <HeroCarousel
            slides={[...heroSlidesLeft, ...heroSlidesRight]}
            sizes="(max-width: 900px) 100vw, 1px"
          />
        </div>
        <div className="hero-inner">
          <div className="hero-side hero-side-left">
            <HeroCarousel slides={heroSlidesLeft} sizes="(max-width: 900px) 1px, 380px" />
          </div>
          <div className="hero-copy">
            <div className="eyebrow">Pure Seva, Pure Giving</div>
            <h1>
              Gift a meal,
              <br />
              made and served with care.
            </h1>
            <div className="telugu-hero">అన్నదానం... అందరికీ అందే ఆనందం</div>
            <p>
              Gift a meal, and we&rsquo;ll take care of the rest, from the
              kitchen to someone who truly needs it. Give with your heart.
              We&rsquo;ll deliver it with care.
            </p>
            <Link href="/gift" className="hero-cta">
              Gift a Meal →
            </Link>
          </div>
          <div className="hero-side hero-side-right">
            <HeroCarousel slides={heroSlidesRight} sizes="(max-width: 900px) 1px, 380px" />
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true">
        <svg viewBox="0 0 80 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 10 Q20 0 40 10 Q60 20 80 10" />
          <circle cx="40" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>

      <section className="how">
        <div className="section-label">How It Works</div>
        <h2>Three simple steps</h2>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="meals">
        <div className="section-label">What You Can Gift</div>
        <h2>Every meal you gift, made fresh</h2>
        <div className="meal-cards">
          {meals.map((meal) => (
            <div className="meal-card" key={meal.title}>
              <div className="img-placeholder">{meal.photo}</div>
              <div className="card-body">
                <h3>{meal.title}</h3>
                <div className="telugu-label">{meal.telugu}</div>
                <p>{meal.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="impact">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="num">{stat.num}</span>
            <span className="label">{stat.label}</span>
          </div>
        ))}
      </div>

      <section className="about-preview">
        <div className="img-placeholder">[ Community Photo ]</div>
        <div className="about-text">
          <div className="section-label">Our Story</div>
          <h2>Every Meal is a Ray of Hope</h2>
          <p>
            PureSeva connects compassionate hearts with people in need through
            the simple act of sharing a meal.
          </p>
          <p>
            When you sponsor a meal, we prepare, serve, and deliver it with care
            and dignity. Every contribution becomes a moment of hope, reminding
            someone they are seen, valued, and never forgotten.
          </p>
          <p>
            Together, we transform generosity into lasting impact.
          </p>
          <Link href="/about">Read our full story →</Link>
        </div>
      </section>

      <section className="cta-band">
        <h2>Gift a meal today.</h2>
        <div className="telugu-cta">ఈ రోజు ఒకరికి అన్నం పెట్టండి.</div>
        <Link href="/gift">Gift a Meal →</Link>
      </section>

      <section className="reason-band">
        <h2>Be the Reason Someone Eats Today.</h2>
        <div className="telugu-reason">
          ఈ రోజు ఒక ఆకలిని తీర్చండి. ఒక జీవితాన్ని తాకండి.
        </div>
      </section>
    </main>
  );
}
