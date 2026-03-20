import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionCard from "@/components/SectionCard";
import { APP_NAME, CONTACT_EMAIL, OPERATOR_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support & Contact",
  description: `Get help with ${APP_NAME}, report bugs, manage subscriptions, or submit a privacy request.`,
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I restore purchases?",
    a: `If you previously purchased a subscription or premium feature, open ${APP_NAME}, go to the subscription or premium section, and tap "Restore Purchases." Your entitlement is linked to your Google Play account, so make sure you are signed in with the same account you used for the original purchase.`,
  },
  {
    q: "How do I back up my data?",
    a: `${APP_NAME} may offer a backup feature that lets you export your data to a file on your device. Look for a Backup option in the App's settings. You can then save the backup file to a safe location. To restore, use the Restore option and select your backup file.`,
  },
  {
    q: "How do I delete my app data?",
    a: `You can delete all locally stored data by going to your device's Settings > Apps > ${APP_NAME} > Storage > Clear Data. Alternatively, uninstalling the App removes its local data. For data processed by third-party services, visit our Data Deletion page for more details.`,
  },
  {
    q: "Why am I seeing ads?",
    a: `The free version of ${APP_NAME} may display ads served by Google AdMob to support ongoing development. If a premium or ad-free option is available, you can upgrade to remove ads. You can also adjust ad personalization in your device's Google advertising settings.`,
  },
  {
    q: "How do subscriptions work?",
    a: `Subscriptions are billed through Google Play and automatically renew at the end of each billing period unless you cancel. You can view, manage, or cancel your subscription at any time by going to Google Play Store > Subscriptions. Refund requests should be directed to Google Play.`,
  },
];

export default function SupportPage() {
  return (
    <PageShell
      title="Support & Contact"
      subtitle={`Need help with ${APP_NAME}? We're here to assist.`}
    >
      {/* ── Intro ── */}
      <SectionCard className="mb-6">
        <p>
          Thank you for using {APP_NAME}! Below you&apos;ll find answers to
          common questions, guidance on different support topics, and how to
          reach us. We are an independent developer and respond to all inquiries
          personally — please allow some time for a response.
        </p>
      </SectionCard>

      {/* ── Support Topics ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">Support Topics</h2>

        <h3>General Help</h3>
        <p>
          If you need help using {APP_NAME} — such as creating pet profiles,
          setting reminders, managing care tasks, or navigating the app — feel
          free to reach out. Please describe the issue in as much detail as
          possible so we can assist you quickly.
        </p>

        <h3>Billing &amp; Subscription Help</h3>
        <p>
          For questions about subscriptions, premium purchases, renewals, or
          refunds, please note that all billing is processed through Google Play.
          You can manage subscriptions directly in the Google Play Store under
          &quot;Subscriptions.&quot; For issues we can help with on our end,
          contact us and include your Google Play order ID if available.
        </p>

        <h3>Privacy &amp; Data Requests</h3>
        <p>
          If you have questions about how your data is handled, or if you would
          like to request data deletion, please visit our{" "}
          <a href="/data-deletion">Data Deletion</a> page or email us directly.
          We take privacy seriously and will respond to all data-related
          requests.
        </p>

        <h3>Bug Reports</h3>
        <p>
          Found a bug? We appreciate you letting us know. When reporting a bug,
          please include:
        </p>
        <ul>
          <li>Your device model and Android version</li>
          <li>The version of {APP_NAME} you are using</li>
          <li>A description of what happened and what you expected</li>
          <li>Steps to reproduce the issue (if possible)</li>
          <li>Screenshots (if applicable)</li>
        </ul>
      </SectionCard>

      {/* ── FAQ ── */}
      <SectionCard className="mb-6">
        <h2 className="!mt-0">Frequently Asked Questions</h2>
        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4 first:pt-0 last:pb-0">
              <h3 className="!mt-0 !mb-2">{faq.q}</h3>
              <p className="!mb-0 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Contact Card ── */}
      <SectionCard className="text-center">
        <h2 className="!mt-0">Contact Us</h2>
        <p>
          For any support inquiries, send us an email and we&apos;ll get back to
          you as soon as possible.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-4 text-xs text-slate-400">
          Operated by {OPERATOR_NAME}. Response times may vary; we aim to reply
          within a few business days.
        </p>
      </SectionCard>
    </PageShell>
  );
}
