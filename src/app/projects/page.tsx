import { resources } from '@/lib/data';
import { ResourceCard } from '@/components/resource-card';
import { BackButtonHeader } from '@/components/back-button-header';

export default function ProjectsPage() {
  const projects = resources.filter(r => r.type === 'project');

  return (
    <div className="flex flex-col h-screen">
      <BackButtonHeader />
      <div className="flex-grow container mx-auto px-4 py-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-headline">Projects</h1>
            <p className="text-lg text-muted-foreground mt-2">A selection of my work in AI and machine learning.</p>
          </header>
          <div className="flex flex-col gap-8">
            {projects.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
