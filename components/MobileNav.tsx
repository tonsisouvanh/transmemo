import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { menuLinks } from '@/consts';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const currentPath = usePathname();
  return (
    <div className="p-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white" side="left">
          <Link href="/" className="flex items-center space-x-2 font-poppin">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600">
              <span className="text-lg font-bold text-white">T</span>
            </div>
            <h1 className="text-2xl font-semibold text-cyan-600">
              Trans<span className="font-light">Memo</span>
            </h1>
          </Link>
          <div className="grid gap-2 space-y-3 py-6">
            {menuLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:underline-2 text-md font-medium underline-offset-4 hover:underline ${
                  currentPath === link.href ? 'underline-2 font-semibold text-primary underline' : 'text-slate-600'
                } `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
