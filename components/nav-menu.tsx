import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-11 px-0 cursor-pointer data-[state=open]:bg-background "
        >
          <Icons.menu className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuItem asChild>
          <Link
            className="flex justify-start items-center gap-x-2"
            href="https://mickasmt.com/"
            target="_blank"
          >
            <Icons.bookmark className="size-5" />
            <span>Collections</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <ThemeToggle />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            className="flex justify-between items-center"
            href={siteConfig.links.github}
            target="_blank"
          >
            <span>Github</span>
            <Icons.arrowUpRight className="size-5" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className="flex justify-between items-center"
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <span>Twitter</span>
            <Icons.arrowUpRight className="size-5" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className="flex justify-between items-center"
            href="https://mickasmt.com/"
            target="_blank"
          >
            <span>Portfolio</span>
            <Icons.arrowUpRight className="size-5" />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
