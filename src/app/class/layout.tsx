import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { NavItem } from "@/types";

const classNav: NavItem[] = [
  { label: "Overview", href: "/class" },
  { label: "Attendance", href: "/class/attendance" },
  { label: "Students", href: "/class/students" },
  { label: "Attendance History", href: "/class/attendance-history" },
  { label: "Notification Status", href: "/class/notification-status" },
  { label: "Announcements", href: "/class/announcements" },
];

export default function ClassLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout title="Class" navItems={classNav}>
      {children}
    </DashboardLayout>
  );
}