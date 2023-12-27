import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-14 md:h-16 bg-background">
      <div className="marge-x w-full grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center gap-x-3 lg:gap-x-5 md:grid-cols-[1fr_minmax(auto,340px)_1fr] lg:grid-cols-[1fr_minmax(auto,450px)_1fr] xl:grid-cols-3">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center">
            {/* <Icons.logo /> */}
            <span className="text-lg font-semibold">Mobbin</span>
          </Link>
          <div className="flex items-center gap-5">
            <Button variant="link" size="lg" asChild>
              <Link href="/pricing">iOS</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/pricing">Android</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/pricing">Web</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full"
            asChild
          >
            <Link
              href="https://github.com/mickasmt/next-saas-stripe-starter"
              className="flex items-center justify-center gap-x-2 md:px-4"
              target="_blank"
            >
              <Icons.sparkles className="size-4" />
              <span className="text-base font-medium">
                Next SaaS Stripe Starter{" "}
                <span className="hidden lg:inline-block">on Github</span>
              </span>
            </Link>
          </Button>
        </div>

        <div className="shrink-0 items-end">
          <div className="flex flex-row items-center justify-end gap-3">
            <Button variant="ghost" size="lg" className="px-4" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost" size="lg" className="px-4" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="default" size="lg" className="px-4" asChild>
              <Link href="https://mobbin.com/" target="_blank">
                Try Mobbin Free
              </Link>
            </Button>
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
