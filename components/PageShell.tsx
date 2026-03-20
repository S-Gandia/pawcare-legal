import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** Consistent page wrapper: hero heading + centered content area. */
export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-base text-slate-500">{subtitle}</p>
        )}
      </header>
      <div className="legal-prose">{children}</div>
    </main>
  );
}
