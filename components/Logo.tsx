import Image from "next/image";

// Intrinsic size of public/logo/pureseva-logo.webp — the source artwork with
// its empty margin cropped off, nothing re-laid or recoloured.
const W = 1200;
const H = 824;

/**
 * The full PureSeva logo: mark above the "Pure Seva" wordmark, as drawn.
 *
 * This carries the brand name itself, so it is the accessible name of whatever
 * link wraps it — hence a real alt rather than an empty one.
 */
export default function Logo({
  height = 72,
  priority = false,
}: {
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo/pureseva-logo.webp"
      alt="PureSeva"
      width={Math.round((W / H) * height)}
      height={height}
      priority={priority}
      className="brand-mark"
    />
  );
}
