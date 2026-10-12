import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { NavItem } from "@/types";

const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Students", href: "/admin/students" },
  { label: "Classes", href: "/admin/classes" },
  { label: "Teachers", href: "/admin/teachers" },
  { label: "Parents", href: "/admin/parents" },
  { label: "Attendance", href: "/admin/attendance" },
  { label: "Notifications", href: "/admin/notifications" },
  { label: "Announcements", href: "/admin/announcements" },
  { label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout title="Admin" navItems={adminNav}>
      {children}
    </DashboardLayout>
  );
}