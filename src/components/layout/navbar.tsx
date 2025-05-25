
'use client';

import Link from 'next/link';
import { Menu, Briefcase, User, Lightbulb, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { href: '#about', label: 'About Me', icon: User },
  { href: '#skills', label: 'Skills', icon: Lightbulb },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onItemClick}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label={item.label}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Portfolio Pro Home">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Portfolio Pro</span>
        </Link>

        {isMobile ? (
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" aria-label="Portfolio Pro Home">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold text-primary">Portfolio Pro</span>
                    </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon" aria-label="Close menu">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col gap-4">
                  <NavLinks onItemClick={() => setMobileMenuOpen(false)} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex md:items-center md:gap-1">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
