import { hentSubstack, norskDato } from "@/lib/substack";

type Props = {
  tittel?: string;
  ingress?: string;
  url?: string;
  lenketekst?: string;
  tal?: number;
};

export default async function SSSubstack({
  tittel,
  ingress,
  url,
  lenketekst,
  tal,
}: Props) {
  const innlegg = await hentSubstack(url, tal ?? 3);
  if (!url || innlegg.length === 0) return null;

  return (
    <section className="px-6 sm:px-10 pb-20 sm:pb-24">
      <div className="max-w-3xl mx-auto">
        {tittel && (
          <h2 className="text-2xl sm:text-3xl font-medium text-[#2F2B26] tracking-tight leading-snug mb-3">
            {tittel}
          </h2>
        )}
        {ingress && (
          <p className="text-[#6B6860] leading-relaxed">{ingress}</p>
        )}

        <div className="grid gap-px bg-[#E4DBCB] border border-[#E4DBCB] rounded-2xl overflow-hidden mt-8 sm:grid-cols-3">
          {innlegg.map((post) => (
            <a
              key={post.lenke}
              href={post.lenke}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-[#FAF8F3] p-6 hover:bg-[#F2EDE2] transition-colors"
            >
              {norskDato(post.dato) && (
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#B9B0A2] mb-3">
                  {norskDato(post.dato)}
                </span>
              )}
              <h3 className="text-[#2F2B26] font-medium leading-snug tracking-tight text-lg">
                {post.tittel}
              </h3>
              {post.samandrag && (
                <p className="text-[#6B6860] text-sm leading-relaxed mt-3">
                  {post.samandrag}
                </p>
              )}
            </a>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-7 text-[#A65F3D] font-medium hover:text-[#8C4E32] transition-colors"
        >
          {lenketekst ?? "Les alt på Substack"} <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
