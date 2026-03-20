import Link from "next/link";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/support", label: "Support" },
  { href: "/data-deletion", label: "Data Deletion" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-semibold text-slate-800">{APP_NAME}</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1" aria-label="Footer navigation">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 hover:text-brand-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="mt-1">
            Contact:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-600 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
