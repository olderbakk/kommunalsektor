import Link from "next/link";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconH = size === "large" ? 28 : 22;
  const iconW = iconH * 0.65;

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 18 28"
        fill="currentColor"
        className="text-[#2D4233]"
      >
        <path d="M9 0C4 0 0 3.2 0 5v11c0 2 3 6.5 6.4 9.2.8.7 1.7 1.2 2.6 1.8.9-.6 1.8-1.1 2.6-1.8C15 22.5 18 18 18 16V5C18 3.2 14 0 9 0z" />
      </svg>
      <span
        className={size === "large" ? "text-2xl tracking-tight" : "text-xl tracking-tight"}
        style={serif}
      >
        KommunalSektor
      </span>
    </Link>
  );
}
