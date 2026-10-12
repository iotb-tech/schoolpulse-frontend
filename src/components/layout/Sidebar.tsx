"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { cn } from "@/utils/cn";

interface SidebarProps {
  title: string;
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ title, items, open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-background p-4 transition-transform md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="mb-6 text-xl font-bold text-primary">{title}</h2>
        <nav className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}