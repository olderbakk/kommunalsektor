import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, summary, body, tags, publishedAt, image
    }`,
    { slug }
  );
}

export default async function ArtikkelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[rgba(28,28,26,0.09)]">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            KommunalSektor
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm text-[#6B6860]">
            <Link href="/" className="hover:text-[#1C1C1A] transition-colors">
              Hjem
            </Link>
            <Link href="/#kvifor" className="hover:text-[#1C1C1A] transition-colors">
              Kvifor
            </Link>
            <Link href="/#framgangsmaate" className="hover:text-[#1C1C1A] transition-colors">
              Framgangsmåte
            </Link>
            <Link href="/artiklar" className="text-[#1C1C1A] font-medium">
              Døme
            </Link>
            <Link href="/#om-oss" className="hover:text-[#1C1C1A] transition-colors">
              Om oss
            </Link>
            <Link href="/#kontakt" className="hover:text-[#1C1C1A] transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        {/* Back link */}
        <Link
          href="/artiklar"
          className="text-sm text-[#6B6860] hover:text-[#1C1C1A] transition-colors inline-flex items-center gap-1.5 mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8L10 13" />
          </svg>
          Tilbake til artiklar
        </Link>

        {/* Date and tags */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {post.publishedAt && (
            <p className="text-sm text-[#9B9790]">
              {new Date(post.publishedAt).toLocaleDateString("nn-NO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t: string) => (
                <Link
                  key={t}
                  href={`/artiklar?tag=${encodeURIComponent(t)}`}
                  className="px-2 py-0.5 rounded-full text-xs bg-[#EEF5EE] text-[#2D4233] hover:bg-[#C8DEC8] transition-colors"
                >
                  {t}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A] leading-tight"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {post.title}
        </h1>

        {/* Summary */}
        {post.summary && (
          <p className="text-lg text-[#6B6860] leading-relaxed mb-10 border-l-2 border-[#C8DEC8] pl-5">
            {post.summary}
          </p>
        )}

        {/* Body */}
        {post.body && (
          <div className="prose">
            <PortableText value={post.body} />
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
