"use client";

import Link from "next/link";
import { useSSHref } from "./useSSHref";

// Lenke som tek omsyn til at selsengsystaddal.no serverer /ss-treet på rota.
export default function SSLenke({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ssHref = useSSHref();
  return (
    <Link href={ssHref(href)} className={className}>
      {children}
    </Link>
  );
}
