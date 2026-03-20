import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionCard from "@/components/SectionCard";
import { APP_NAME, CONTACT_EMAIL, OPERATOR_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: `Request data deletion or learn how to remove your data from ${APP_NAME}.`,
};

export default function DataDeletionPage() {
  const requestTemplate = `Subject: PawCare — Data Deletion Request

Hi PawCare Developer,

I would like to request the deletion of any data associated with my use of the PawCare app.

Device info (optional): [Your device model / Android version]
Details (optional): [Any additional context about your request]

Thank you.`;

  return (
    <PageShell
      title="Data Deletion"
      subtitle="How to delete your data and submit a privacy request"
    >
      {/* ── Overview ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">How {APP_NAME} Stores Your Data</h2>
        <p>
          {APP_NAME} is designed with a local-first approach. This means that
          the pet profiles, reminders, care tasks, notes, documents, and other
          information you enter are primarily stored on your device&apos;s local
          storage. We do not require you to create an online account, and we
          do not maintain a central server that stores your personal pet care
          data.
        </p>
        <p>
          However, some third-party services integrated into the App — related
          to advertising (Google AdMob), subscriptions (RevenueCat / Google Play
          Billing), or analytics — may process limited technical or
          transactional data as described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </SectionCard>

      {/* ── Deleting Local Data ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">Deleting Local App Data</h2>
        <p>
          Because your data is stored locally, you have full control over it. To
          delete all data stored by {APP_NAME} on your device:
        </p>
        <ol>
          <li>
            <strong>Clear App Data:</strong> Go to your device&apos;s{" "}
            <em>Settings &gt; Apps &gt; {APP_NAME} &gt; Storage &gt; Clear
            Data</em>. This removes all locally stored pet records, reminders,
            notes, documents, and settings.
          </li>
          <li>
            <strong>Uninstall the App:</strong> Uninstalling {APP_NAME} from
            your device will also remove its local data, unless you have created
            a backup.
          </li>
          <li>
            <strong>Delete Backup Files:</strong> If you have previously exported
            backup files, you can locate and delete them from your device&apos;s
            file storage manually.
          </li>
        </ol>
        <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <strong>Note:</strong> Deleting your local data or uninstalling the App
          is permanent and cannot be undone. Make sure you do not need any of the
          data before proceeding.
        </p>
      </SectionCard>

      {/* ── Third-Party Data ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">Third-Party Data</h2>
        <p>
          Some data may be processed by third-party services outside of our
          direct control:
        </p>
        <ul>
          <li>
            <strong>Google AdMob:</strong> May have collected advertising and
            device identifiers. You can manage your ad personalization and reset
            your advertising ID in your device&apos;s Google settings.
          </li>
          <li>
            <strong>RevenueCat / Google Play Billing:</strong> Subscription and
            purchase history is managed by Google Play and RevenueCat. You can
            manage subscriptions via Google Play Store &gt; Subscriptions.
          </li>
          <li>
            <strong>Analytics / Crash Reporting:</strong> If the App uses
            analytics or crash-reporting SDKs, limited technical data may have
            been processed. This data is typically anonymized or aggregated.
          </li>
        </ul>
        <p>
          For deletion of data held by these third parties, please refer to
          their respective privacy policies and data management tools, or
          contact us and we will do our best to assist you.
        </p>
      </SectionCard>

      {/* ── How to Submit a Request ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">Submit a Data Deletion Request</h2>
        <p>
          If you would like to request the deletion of any data that may be
          under the control of {OPERATOR_NAME}, or if you need assistance with
          data-related requests, please follow these steps:
        </p>
        <ol>
          <li>
            Send an email to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the
            subject line <strong>&quot;Data Deletion Request&quot;</strong>.
          </li>
          <li>
            Include any relevant details, such as the device you used or the
            nature of your request.
          </li>
          <li>
            We will review your request and respond within a reasonable
            timeframe.
          </li>
        </ol>
        <p>
          You can use the template below to help format your request:
        </p>

        {/* Copyable request template */}
        <div className="relative mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <pre className="whitespace-pre-wrap text-sm text-slate-700">{requestTemplate}</pre>
          {/* The template is displayed for users to copy manually */}
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Copy the template above and paste it into an email to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </SectionCard>

      {/* ── Contact ── */}
      <SectionCard className="text-center">
        <h2 className="!mt-0">Need Help?</h2>
        <p>
          If you have any questions about deleting your data or about our
          privacy practices, please don&apos;t hesitate to reach out.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold !text-white shadow-sm transition-colors hover:bg-brand-700 hover:!text-white no-underline"
        >
          Email Privacy Support
        </a>
        <p className="mt-4 text-xs text-slate-400">
          Operated by {OPERATOR_NAME}. We aim to respond within a few business
          days.
        </p>
      </SectionCard>
    </PageShell>
  );
}
