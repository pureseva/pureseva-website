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
    title: "Choose Your Meal",
    body: "Pick breakfast, lunch, or dinner. Choose a date and a location that matters to you.",
  },
  {
    num: "2",
    title: "We Prepare & Serve",
    body: "Our community kitchens prepare fresh Andhra meals and serve them with warmth and dignity.",
  },
  {
    num: "3",
    title: "In Your Name",
    body: "Every meal is served in your name. Your gift, their plate.",
  },
];

const meals = [
  {
    title: "Breakfast",
    telugu: "అల్పాహారం",
    body: "Idli, upma, pongal — served with chutney and sambar. A warm start to the day.",
    photo: "[ Breakfast Photo ]",
  },
  {
    title: "Lunch",
    telugu: "భోజనం",
    body: "Rice, sambar, rasam, curry, and curd. A full Andhra thali, served fresh.",
    photo: "[ Lunch Photo ]",
  },
  {
    title: "Dinner",
    telugu: "రాత్రి భోజనం",
    body: "Rice or chapati with curry, dal, and curd. A comforting close to the day.",
    photo: "[ Dinner Photo ]",
  },
];

const stats = [
  { num: "1,200+", label: "Meals Gifted" },
  { num: "45+", label: "Gifts Given" },
  { num: "1", label: "City — Vijayawada" },
  { num: "3", label: "Meal Slots Daily" },
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
            <div className="eyebrow">Vijayawada · Andhra Pradesh</div>
            <h1>
              A friend at
              <br />
              every meal.
            </h1>
            <div className="telugu-hero">ప్రతి భోజనంలో ఒక మిత్రుడు.</div>
            <p>
              Gift a meal in your name. We cook it, we serve it, and we make
              sure no one sits down to an empty plate.
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
        <div className="section-label">What We Serve</div>
        <h2>Every meal, made with care</h2>
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
          <h2>A meal, a moment, a friend.</h2>
          <p>
            PureSeva is a food distribution initiative serving Vijayawada.
            We exist for one reason — to make sure no one sits down to an
            empty plate.
          </p>
          <p>
            You gift a meal in your own name. We prepare the food and serve it
            on your behalf, with the dignity your gesture deserves.
          </p>
          <Link href="/about">Read our full story →</Link>
        </div>
      </section>

      <section className="cta-band">
        <h2>Feed a hungry person today.</h2>
        <div className="telugu-cta">ఈ రోజు ఒక పొరుగువారికి భోజనం పెట్టండి.</div>
        <Link href="/gift">Gift a Meal →</Link>
      </section>
    </main>
  );
}
