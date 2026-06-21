import { profile } from '@/lib/data';
import { ProfileCard } from '@/components/profile-card';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 flex justify-center">
        <div className="flex flex-col items-center max-w-4xl w-full pt-16 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <ProfileCard />
            </div>
            <section className="md:col-span-2 text-center md:text-left">
              <div className="text-lg text-foreground/90 leading-relaxed space-y-2">
                {profile.bio.split('|').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
