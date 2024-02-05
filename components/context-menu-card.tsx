import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface ContextMenuCardProps {
  children: React.ReactNode;
}

export function ContextMenuCard({ children }: ContextMenuCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="rounded-lg w-48">
        <ContextMenuItem className="rounded-md cursor-pointer">Open App</ContextMenuItem>
        <ContextMenuItem className="rounded-md cursor-pointer">Open App in new tab</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger className="rounded-md cursor-pointer">Download screens</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Jan 24</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem className="rounded-md cursor-pointer">Copy app link</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
