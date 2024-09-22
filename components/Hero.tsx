import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 font-poppin md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Simplify Your Translation Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Manage your translations effortlessly with our powerful app.
              Track, search, and reuse past translations to boost productivity
              and maintain consistency.
            </p>
          </div>
          <div className="space-x-4">
            <Button isGradient>
              <Link href="/translations/new">Get Started</Link>
            </Button>
            <Button variant="outline">
              <Link href="#features">See Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
