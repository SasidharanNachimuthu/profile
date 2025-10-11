import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { profile } from "@/lib/data"
import placeholderImages from "@/lib/placeholder-images.json"
import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ProfileCard() {
  const avatar = placeholderImages.placeholderImages.find(p => p.id === profile.avatarImageId)

  return (
    <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
      {avatar && (
        <Avatar className="h-40 w-40 border-4 border-primary/10">
          <AvatarImage src={avatar.imageUrl} alt={profile.name} data-ai-hint={avatar.imageHint} />
          <AvatarFallback className="text-5xl">{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      )}
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">{profile.name}</h1>
        <p className="text-lg text-muted-foreground">AI Engineer</p>
      </div>
      <div className="flex justify-center md:justify-start space-x-2">
        <Button asChild variant="ghost" size="icon">
          <a href={`mailto:${profile.email}`}>
              <Mail />
              <span className="sr-only">Email</span>
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
            <Link href={profile.social.github} target="_blank">
                <Github />
                <span className="sr-only">Github</span>
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
            <Link href={profile.social.linkedin} target="_blank">
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
            </Link>
        </Button>
      </div>
    </div>
  )
}
