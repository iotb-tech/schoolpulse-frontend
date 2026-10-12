"use client";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="rounded-lg p-2 hover:bg-muted md:hidden"
      >
        ☰
      </button>
      <span className="font-medium">SchoolPulse</span>
      <div className="h-8 w-8 rounded-full bg-muted" />
    </header>
  );
}