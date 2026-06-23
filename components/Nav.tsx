import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <Logo />
          <div>
            <span className="name">Anna Mithra</span>
            <span className="telugu">అన్న మిత్ర</span>
          </div>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gift" className="cta-btn">
              Gift a Meal
            </Link>
          </li>
        </ul>
      </nav>
      <div className="kolam-border" />
    </>
  );
}
