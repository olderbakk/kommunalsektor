import Link from "next/link";
import { client } from "@/sanity/lib/client";

async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(_createdAt desc) {
      _id, title, slug, municipality, summary, image
    }`
  );
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Kommunalsektor
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:underline">
              Hjem
            </Link>
            <Link href="#prosjekter" className="hover:underline">
              Prosjekter
            </Link>
            <Link href="#kontakt" className="hover:underline">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Innovasjon for
          <br />
          norske kommuner
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Vi hjelper kommuner med å utvikle bedre tjenester for innbyggerne
          gjennom teknologi, design og samskaping.
        </p>
      </section>

      {/* Projects */}
      <section id="prosjekter" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">Prosjekter</h2>
        {projects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project: any) => (
              <Link
                key={project._id}
                href={`/prosjekt/${project.slug?.current}`}
                className="group block border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
              >
                <p className="text-sm text-gray-500">{project.municipality}</p>
                <h3 className="mt-1 text-lg font-medium group-hover:underline">
                  {project.title}
                </h3>
                {project.summary && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {project.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Ingen prosjekter ennå. Legg til prosjekter i{" "}
            <Link href="/studio" className="underline">
              Sanity Studio
            </Link>
            .
          </p>
        )}
      </section>

      {/* Contact */}
      <section
        id="kontakt"
        className="mx-auto max-w-5xl px-6 py-16 border-t border-gray-200"
      >
        <h2 className="text-2xl font-semibold mb-4">Kontakt oss</h2>
        <p className="text-gray-600">
          Ta kontakt for å høre mer om hvordan vi kan hjelpe din kommune.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kommunalsektor
        </div>
      </footer>
    </div>
  );
}
