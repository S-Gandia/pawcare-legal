import type { Metadata } from "next";
import Link from "next/link";
import SectionCard from "@/components/SectionCard";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME} — Legal & Support`,
  description:
    "Official legal information and support resources for PawCare, the pet care management app for Android.",
};

const pages = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    description:
      "Learn how PawCare handles your data, what information may be collected, and your privacy choices.",
  },
  {
    href: "/terms",
    title: "Terms & Conditions",
    description:
      "Review the terms that govern your use of the PawCare app.",
  },
  {
    href: "/support",
    title: "Support & Contact",
    description:
      "Get help with the app, report a bug, manage subscriptions, or ask a question.",
  },
  {
    href: "/data-deletion",
    title: "Data Deletion",
    description:
      "Learn how to delete your data and submit a privacy or deletion request.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {APP_NAME}
        </h1>
        <p className="mt-4 text-lg text-slate-500">
          Legal information and support resources for the {APP_NAME} Android app
          — your companion for pet care management.
        </p>
      </div>

      {/* Page cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((p) => (
          <Link key={p.href} href={p.href} className="group">
            <SectionCard className="h-full transition-shadow group-hover:shadow-md group-hover:border-brand-200">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {p.description}
              </p>
            </SectionCard>
          </Link>
        ))}
      </div>

      {/* Quick contact note */}
      <div className="mt-12 text-center text-sm text-slate-400">
        <p>
          Questions? Reach us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-600 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
