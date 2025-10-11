import type { Resource } from "@/lib/data"
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button";

type ResourceCardProps = {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const isProject = resource.type === 'project';

  const cardContent = (
    <>
      <div className="flex justify-between items-start">
        <div className="flex-grow">
            <CardTitle className="text-lg font-headline leading-tight mb-1 group-hover:underline">
                {resource.title}
            </CardTitle>
        </div>
        {isProject && (
        <div className="flex items-center gap-1 ml-4 flex-shrink-0">
            {resource.githubUrl && (
                <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <a href={resource.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </Button>
            )}
            {resource.url && (
                <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">External Link</span>
                    </a>
                </Button>
            )}
        </div>
      )}
      </div>
      
      <CardDescription className="text-sm text-muted-foreground flex-grow line-clamp-1 group-hover:underline">{resource.description}</CardDescription>
    </>
  );

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-px animate-in fade-in">
      <CardContent className="flex-grow flex flex-col p-4">
        {isProject ? (
          <div className="group flex-grow flex flex-col">{cardContent}</div>
        ) : (
          <Link href={`/posts/${resource.slug}`} className="group flex-grow flex flex-col">
            {cardContent}
          </Link>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
          <span className="text-xs text-muted-foreground">{new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </CardFooter>
    </Card>
  )
}
