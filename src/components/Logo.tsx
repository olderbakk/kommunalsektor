import Link from "next/link";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <Link
      href="/"
      className={size === "large" ? "text-2xl tracking-tight" : "text-xl tracking-tight"}
      style={serif}
    >
      KommunalSektor
    </Link>
  );
}
