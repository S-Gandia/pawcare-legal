import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APP_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} — Legal & Support`,
    template: `%s — ${APP_NAME}`,
  },
  description:
    "Privacy Policy, Terms & Conditions, Support, and Data Deletion information for PawCare — the pet care management app for Android.",
  // TODO: Replace SITE_URL in lib/constants.ts with your real domain
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: APP_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
