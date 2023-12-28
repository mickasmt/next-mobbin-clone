"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
  { name: "Apps", path: "/apps" },
  { name: "Screens", path: "/screens" },
  { name: "UI Elements", path: "/ui-elements" },
  { name: "Flows", path: "/flows" },
];

export function CategoriesList() {
  const pathname = usePathname();
  const params = useParams<{ platform: string }>();

  return (
    <div className="flex gap-x-6 -mx-3 px-3 md:-mx-6 md:px-6 scrollbar-none overflow-x-auto -my-1 py-1">
      {links.map((link) => (
        <Link
          key={link.path}
          href={`/browse/${params.platform + link.path}`}
          className={cn(
            "whitespace-nowrap py-1 border-b-2 transition-colors ease-out focus-visible:ring-4 focus-visible:ring-ring",
            pathname === `/browse/${params.platform + link.path}`
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-primary"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
