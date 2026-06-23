import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="footer-logo">
          <Logo />
          <span>Anna Mithra</span>
        </Link>
        <p>A friend at every meal.</p>
      </div>
      <div className="cols">
        <div className="col">
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/gift">Gift a Meal</Link>
          <Link href="/about">About Us</Link>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <p>
            <a href="mailto:hello@annamithra.org">hello@annamithra.org</a>
          </p>
          <p>+91 XXXXX XXXXX</p>
          <p>Vijayawada, Andhra Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
