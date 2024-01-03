"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Badge } from "./ui/badge";

interface LinksProps {
  name: string;
  path: string;
  badge?: string;
}

const links: LinksProps[] = [
  { name: "Apps", path: "/apps" },
  { name: "Screens", path: "/screens" },
  { name: "UI Elements", path: "/ui-elements" },
  { name: "Flows", path: "/flows", badge: "PRO" },
];

export function CategoriesList() {
  const pathname = usePathname();
  const params = useParams<{ platform: string }>();

  return (
    <div className="flex gap-x-6 scrollbar-none overflow-x-auto -my-1 py-1">
      {links.map((link) => (
        <Link
          key={link.path}
          href={`/browse/${params.platform + link.path}`}
          className={cn(
            "flex items-center gap-x-2 whitespace-nowrap py-1 border-b-2 transition-colors ease-out focus-visible:ring-4 focus-visible:ring-ring",
            pathname === `/browse/${params.platform + link.path}`
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-primary"
          )}
        >
          <span>{link.name}</span>
          {link.badge ? <Badge className="px-2 font-medium uppercase border-none">{link.badge}</Badge> : ""}
        </Link>
      ))}
    </div>
  );
}
