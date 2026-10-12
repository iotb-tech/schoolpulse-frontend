import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted p-4">
      <div className="w-full max-w-sm space-y-4 rounded-xl border border-border bg-background p-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-foreground/60">Authentication coming soon.</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-border px-3 py-2"
        />
        <button
          type="button"
          className="w-full rounded-lg bg-primary py-2 text-primary-foreground"
        >
          Sign in
        </button>
        <Button/>
      </div>
    </main>
  );
}