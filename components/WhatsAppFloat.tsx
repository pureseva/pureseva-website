const WHATSAPP_NUMBER = "917386893840";
const PREFILLED_MESSAGE =
  "Hi PureSeva, I would like to know more about gifting a meal.";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PREFILLED_MESSAGE
)}`;

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PureSeva on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.38L1.05 31.32l6.128-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.998-.574 1.586-.574.19 0 .362.01.516.018.47.02.706.048 1.016.79.386.93 1.328 3.226 1.44 3.462.114.236.228.554.068.864-.15.32-.282.462-.518.73-.236.268-.46.474-.696.762-.216.25-.46.518-.188.986.272.458 1.21 1.994 2.6 3.23 1.794 1.594 3.276 2.086 3.79 2.302.384.16.842.122 1.122-.188.356-.396.796-1.054 1.244-1.702.318-.462.72-.52 1.14-.36.428.15 2.714 1.28 3.184 1.514.47.236.78.35.894.546.114.198.114 1.134-.272 2.224Z" />
      </svg>
    </a>
  );
}
