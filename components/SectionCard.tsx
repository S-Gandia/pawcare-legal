import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

/** A subtle card wrapper used to visually group content blocks. */
export default function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {children}
    </section>
  );
}
