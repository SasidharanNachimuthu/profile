import { resources } from "@/lib/data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Briefcase, PenSquare } from "lucide-react"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import 'katex/dist/katex.min.css'
import { BackButtonHeader } from "@/components/back-button-header"
import { Resource } from "@/lib/data";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return resources
    .filter((resource) => resource && resource.slug)
    .map((resource) => ({
      slug: resource.slug,
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const resource: Resource | undefined = resources.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  const Icon = resource.type === 'blog' ? PenSquare : Briefcase;

  return (
    <>
    <BackButtonHeader />
    <div className="min-h-screen bg-background animate-in fade-in">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">{resource.title}</h1>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="capitalize">
                    <Icon className="mr-2 h-4 w-4" />
                    {resource.type}
                  </Badge>
                  <span>By {resource.author}</span>
                  <span>&bull;</span>
                  <span>{new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                {resource.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {resource.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                )}
              </div>
            </header>
            
            <div
            className="
              prose prose-lg dark:prose-invert max-w-none font-body
              prose-p:my-2
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]}
            >
              {resource.content}
            </ReactMarkdown>
          </div>


          </article>
        </div>
      </main>
    </div>
    </>
  )
}
