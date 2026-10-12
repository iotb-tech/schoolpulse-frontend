import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-primary">SchoolPulse</h1>
      <p className="text-foreground/70">School management made simple.</p>
      <div className="flex gap-3">
        <Link href="/login" className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
          Login
        </Link>
        <Link href="/admin" className="rounded-lg border border-border px-4 py-2">
          Admin
        </Link>
        <Link href="/class" className="rounded-lg border border-border px-4 py-2">
          Class
        </Link>
      </div>
    </main>
  );
}
