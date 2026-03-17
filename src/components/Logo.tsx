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
        <path d="M12 0C5.4 0 0 3.6 0 5.5v15c0 1.2 2.4 3.5 5.5 5.2.9.5 1.9.9 2.8 1.2 1.1.4 2.3.7 3.7.7s2.6-.3 3.7-.7c.9-.3 1.9-.7 2.8-1.2C21.6 24 24 21.7 24 20.5v-15C24 3.6 18.6 0 12 0z" />
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
