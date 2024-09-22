import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 TransMemo | DevTons. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
