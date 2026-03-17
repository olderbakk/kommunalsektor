import Link from "next/link";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? 28 : 20;

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize * 1.15}
        viewBox="0 0 24 28"
        fill="currentColor"
        className="text-[#2D4233]"
      >
        <path d="M12 0C5.4 0 0 3.2 0 5v11c0 2 4 6.5 8.5 9.2 1.1.7 2.3 1.2 3.5 1.8 1.2-.6 2.4-1.1 3.5-1.8C20 22.5 24 18 24 16V5C24 3.2 18.6 0 12 0z" />
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
