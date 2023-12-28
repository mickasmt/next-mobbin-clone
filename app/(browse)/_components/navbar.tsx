import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-[100px] md:h-[72px] bg-background">
      <div className="w-full grid grid-cols-[min-content_auto_min-content] grid-rows-[1fr_auto] items-center gap-x-2 md:grid-cols-[1fr_minmax(auto,500px)_1fr] lg:grid-rows-1 marge-x">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center">
            {/* <Icons.logo /> */}
            <span className="text-lg font-semibold">Mobbin</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/ios/apps">iOS</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/android/apps">Android</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/web/apps">Web</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden px-1 py-2">
          <Button
            variant="secondary"
            size="lg"
            className="h-10 md:h-12 w-full rounded-full justify-between cursor-pointer group relative"
            asChild
          >
            <div>
            <div className="flex items-center gap-x-2 px-4">
              <Icons.search className=" size-4 md:size-5" />
              <span className="text-sm sm:text-base text-muted-foreground/80">
                Search on iOS...
              </span>
            </div>
            <span className="absolute right-0 top-0 hidden sm:flex h-full items-center justify-end pr-5 pointer-events-none invisible group-hover:visible group-focus:visible text-muted-foreground">shortcut</span>

            </div>
          </Button>
        </div>

        <div className="shrink-0 items-end">
          <div className="flex flex-row items-center justify-end gap-3">
            <div className="hidden lg:flex flex-row items-center gap-3">
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
            </div>
            <NavMenu />
          </div>
        </div>

        <div className="col-span-full row-start-2 flex md:hidden">
          <div className="flex items-center py-1 md:py-0 h-11 md:h-[unset] gap-x-4 md:gap-x-6">
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/ios/apps">iOS</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/android/apps">Android</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link href="/browse/web/apps">Web</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
