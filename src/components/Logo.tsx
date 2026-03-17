import Link from "next/link";

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const h = size === "large" ? 32 : 24;
  const w = Math.round(h * (135 / 171));

  return (
    <Link href="/" aria-label="KommunalSektor">
      <svg
        width={w}
        height={h}
        viewBox="0 0 135 171"
        fill="currentColor"
        className="text-[#2D4233]"
      >
        <path d="M135 0V62.6113C135 118.177 74.445 166.696 67.5 171C60.555 166.696 0.000299323 118.177 0 62.6113V0H135Z" />
      </svg>
    </Link>
  );
}
