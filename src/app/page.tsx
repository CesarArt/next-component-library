import { Button } from "@/components";
import Dashboard from "@/components/layout/dashboard";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative divide-y-1 divide-gray-500">
      <section className="relative h-full w-full p-3">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-x-12 xl:gap-x-16">
            <div className="flex flex-col justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-sky-950 to-violet-300">
                  UI component library, designed for your projects.
                </h1>
                <h2 className="mx-auto max-w-3xl text-muted md:text-xl">
                  Reusable, accessible and ready-to-use components
                </h2>
              </div>
              <div className="w-full max-w-md mx-auto space-y-2">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="primary" iconName="Rocket">
                    <Link href="/showcase">Explore components</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dashboard/>
    </div>
  );
}
