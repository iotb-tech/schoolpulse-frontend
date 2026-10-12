"use client";

import { ReactNode, useState } from "react";
import { NavItem } from "@/types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  title: string;
  navItems: NavItem[];
  children: ReactNode;
}

export default function DashboardLayout({
  title,
  navItems,
  children,
}: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        title={title}
        items={navItems}
        open={open}
        onClose={() => setOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar onMenuClick={() => setOpen(true)} />
        <main className="flex-1 bg-muted/40 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}