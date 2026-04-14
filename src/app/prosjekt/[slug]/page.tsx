import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, title, municipality, summary, body, image
    }`,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const ogImage = project.image
    ? urlFor(project.image).width(1200).height(630).url()
    : undefined;

  return {
    title: project.title,
    description: project.summary ?? undefined,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary ?? undefined,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary ?? undefined,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:underline"
          >
            &larr; Tilbake
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        {project.municipality && (
          <p className="text-sm text-gray-500 mb-2">{project.municipality}</p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        {project.summary && (
          <p className="mt-4 text-lg text-gray-600">{project.summary}</p>
        )}
        {project.body && (
          <div className="mt-10 prose prose-gray max-w-none">
            <PortableText value={project.body} />
          </div>
        )}
      </article>
    </div>
  );
}
