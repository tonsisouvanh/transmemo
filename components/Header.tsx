'use client';
import { menuLinks } from '@/consts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import { ModeToggle } from './ui/ModeToggle';

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className="mx-auto h-14 w-full max-w-6xl">
      <MobileNav />
      <div className="flex items-center justify-between py-3 max-lg:hidden">
        <Link href="/" className="flex items-center space-x-2 font-poppin">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600">
            <span className="text-lg font-bold text-white">T</span>
          </div>
          <h1 className="text-2xl font-semibold text-cyan-600">
            Trans<span className="font-light">Memo</span>
          </h1>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          {menuLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline-2 text-base font-medium underline-offset-4 hover:underline ${
                currentPath === link.href ? 'underline-2 font-semibold text-primary underline' : 'text-slate-600'
              } `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
