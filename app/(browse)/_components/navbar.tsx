import { NavLinks } from "@/components/nav-links";
import { NavMenu } from "@/components/nav-menu";
import { SearchButtonNav } from "@/components/search-button-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="z-50 sticky top-0 flex h-[100px] border-b md:border-transparent md:h-[72px] bg-background">
      <div className="w-full grid grid-cols-[min-content_auto_min-content] grid-rows-[1fr_auto] items-center gap-x-2 md:grid-cols-[1fr_minmax(auto,500px)_1fr] lg:grid-rows-1 marge-x">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center">
            {/* <Icons.logo /> */}
            <span className="text-lg font-semibold">Mobbin</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <NavLinks />
          </div>
        </div>

        <div className="overflow-hidden px-1 py-2">
          <SearchButtonNav />
        </div>

        <div className="shrink-0 items-end">
          <div className="flex flex-row items-center justify-end gap-3">
            <div className="hidden lg:flex flex-row items-center gap-3">
              <Button variant="ghost" size="lg" asChild>
                <Link href="/pricing">Pricing</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link href="https://mobbin.com/" target="_blank">
                  Try Mobbin Free
                </Link>
              </Button>
            </div>
            <NavMenu />
          </div>
        </div>

        <div className="col-span-full row-start-2 flex md:hidden">
          <div className="flex items-center py-1 md:py-0 h-11 md:h-[unset] gap-x-4 md:gap-x-6">
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
