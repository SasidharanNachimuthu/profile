'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Briefcase, PenSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: PenSquare },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const NavLink = ({ href, label, icon: Icon, isMobile }: { href: string; label: string; icon: React.ElementType; isMobile?: boolean }) => {
    const isActive = pathname === href;
    return (
      <Button asChild variant="ghost" className={cn(isActive && 'bg-accent', isMobile && 'w-full justify-start')}>
        <Link href={href} onClick={() => setIsOpen(false)}>
          <Icon className="mr-2 h-4 w-4" /> {label}
        </Link>
      </Button>
    );
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} isMobile />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {navLinks.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
