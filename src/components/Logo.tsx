import Link from "next/link";
import Image from "next/image";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const h = size === "large" ? 28 : 22;
  const w = Math.round(h * (135 / 171));

  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <div
        style={{ width: w, height: h }}
        className="relative"
      >
        <svg
          width={w}
          height={h}
          viewBox="0 0 135 171"
          fill="currentColor"
          className="text-[#2D4233]"
        >
          <path d="M135 0V62.6113C135 118.177 74.445 166.696 67.5 171C60.555 166.696 0.000299323 118.177 0 62.6113V0H135Z" />
        </svg>
      </div>
      <span
        className={size === "large" ? "text-2xl tracking-tight" : "text-xl tracking-tight"}
        style={serif}
      >
        KommunalSektor
      </span>
    </Link>
  );
}
