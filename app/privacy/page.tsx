import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionCard from "@/components/SectionCard";
import {
  APP_NAME,
  OPERATOR_NAME,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  JURISDICTION,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${APP_NAME} — learn how your data is handled, stored, and protected.`,
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle={`Effective Date: ${EFFECTIVE_DATE}`}
    >
      <SectionCard>
        {/* ── 1. Introduction ── */}
        <h2>1. Introduction</h2>
        <p>
          Welcome to {APP_NAME}. This Privacy Policy explains how {OPERATOR_NAME}{" "}
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
          and protects information when you use the {APP_NAME} mobile application
          (&quot;the App&quot;) for Android.
        </p>
        <p>
          {APP_NAME} is a pet care management app that helps you organize pet
          profiles, reminders, care tasks, vaccines, medications, vet records,
          notes, and uploaded documents — all in one place. We are committed to
          respecting your privacy and being transparent about the data practices
          associated with the App.
        </p>
        <p>
          By using {APP_NAME}, you agree to the practices described in this
          Privacy Policy. If you do not agree, please discontinue use of the App.
        </p>

        {/* ── 2. What Data May Be Collected ── */}
        <h2>2. What Data May Be Collected</h2>

        <h3>2.1 Data You Provide in the App</h3>
        <p>
          When you use {APP_NAME}, you may enter the following types of
          information:
        </p>
        <ul>
          <li>Pet names and profiles (species, breed, date of birth, weight, photos, etc.)</li>
          <li>Vaccine and medication records</li>
          <li>Vet and clinic information</li>
          <li>Reminders and care tasks</li>
          <li>Notes and personal observations</li>
          <li>Uploaded documents and files related to your pets</li>
          <li>A local PIN for securing app access</li>
        </ul>
        <p>
          <strong>Important:</strong> This data is primarily created and stored
          locally on your device. We do not require you to create an online
          account (e.g., email/password or social login) to use {APP_NAME}.
        </p>

        <h3>2.2 Data Collected Automatically by Third-Party Services</h3>
        <p>
          The App may integrate third-party services that automatically collect
          certain technical data. This may include:
        </p>
        <ul>
          <li>Device identifiers and advertising identifiers</li>
          <li>Device model, operating system version, and language settings</li>
          <li>Approximate location (derived from IP address)</li>
          <li>App usage data, session information, and diagnostics</li>
          <li>Ad interaction data (views, clicks)</li>
          <li>Purchase and subscription history (processed by Google Play / RevenueCat)</li>
        </ul>
        <p>
          This data is collected by the respective third-party SDKs, not directly
          by {OPERATOR_NAME}. See Section 6 for details on third-party services.
        </p>

        {/* ── 3. How Data Is Used ── */}
        <h2>3. How Data Is Used</h2>
        <p>Information associated with {APP_NAME} may be used to:</p>
        <ul>
          <li>Provide and maintain the App&apos;s features and functionality</li>
          <li>Store your pet care data locally so you can access it within the App</li>
          <li>Enable backup and restore of your data</li>
          <li>Process subscriptions and premium purchases</li>
          <li>Display advertisements (if applicable)</li>
          <li>Improve app performance and diagnose technical issues</li>
          <li>Respond to support and data deletion requests</li>
        </ul>

        {/* ── 4. Local Storage on Device ── */}
        <h2>4. Local Storage on Device</h2>
        <p>
          {APP_NAME} is designed with a local-first approach. The pet data,
          reminders, notes, documents, and settings you create are stored on
          your device&apos;s local storage. This means:
        </p>
        <ul>
          <li>Your data stays on your device unless you explicitly use a backup feature.</li>
          <li>
            If you uninstall the App or clear its data, locally stored
            information may be permanently deleted.
          </li>
          <li>
            The local PIN you set is stored on your device and is not transmitted
            to any server.
          </li>
        </ul>

        {/* ── 5. Backup and Restore ── */}
        <h2>5. Backup and Restore</h2>
        <p>
          {APP_NAME} may offer the ability to back up your data and restore it
          later. Backup files may be saved to local device storage or a
          location you choose. Please be aware that:
        </p>
        <ul>
          <li>
            You are responsible for the security of any backup files you create
            or store outside the App.
          </li>
          <li>
            Backup files may contain personal pet-related data you have entered
            into the App.
          </li>
          <li>
            Restoring from a backup will overwrite current App data with the
            backed-up data.
          </li>
        </ul>

        {/* ── 6. Third-Party Services ── */}
        <h2>6. Third-Party Services</h2>
        <p>
          {APP_NAME} may use the following third-party services. Each service has
          its own privacy policy governing data it collects:
        </p>

        <h3>6.1 Google AdMob</h3>
        <p>
          The App may display advertisements served by Google AdMob. AdMob may
          collect and process data including advertising identifiers, device
          identifiers, approximate location (IP-based), usage and diagnostics
          data, and ad interaction data. For more information, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://support.google.com/admob/answer/6128543"
            target="_blank"
            rel="noopener noreferrer"
          >
            how Google uses data from partner apps
          </a>
          .
        </p>

        <h3>6.2 RevenueCat &amp; Google Play Billing</h3>
        <p>
          The App may use RevenueCat and Google Play Billing to manage
          subscriptions, entitlements, and in-app purchases. These services may
          process purchase history, subscription status, transaction identifiers,
          and related billing data. See:
        </p>
        <ul>
          <li>
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
        </ul>

        <h3>6.3 Other SDKs</h3>
        <p>
          The App may include other third-party SDKs for analytics,
          crash-reporting, or performance monitoring. These services may collect
          limited technical data such as device information, app version,
          session data, and crash logs. We aim to only use reputable services
          that comply with applicable data protection standards.
        </p>

        {/* ── 7. Subscriptions and Billing ── */}
        <h2>7. Subscriptions and Billing</h2>
        <p>
          {APP_NAME} may offer premium features through subscriptions or one-time
          purchases. All billing is handled by Google Play. We do not directly
          collect or store your payment information (such as credit card
          numbers). RevenueCat may process subscription-related data to manage
          entitlements on our behalf.
        </p>

        {/* ── 8. Advertising ── */}
        <h2>8. Advertising</h2>
        <p>
          The App may display ads through Google AdMob. You may be able to
          adjust your ad personalization preferences through your device&apos;s
          settings or Google&apos;s ad settings. Opting out of personalized
          advertising does not mean you will stop seeing ads — it means the ads
          you see may be less relevant to you.
        </p>

        {/* ── 9. Security ── */}
        <h2>9. Security</h2>
        <p>
          We take reasonable steps to protect the information associated with
          {APP_NAME}. Because most data is stored locally on your device:
        </p>
        <ul>
          <li>
            The App offers a local PIN lock to restrict access to the App on
            your device.
          </li>
          <li>
            We recommend you keep your device&apos;s operating system up to date
            and use a device screen lock for additional security.
          </li>
          <li>
            No method of electronic storage is 100&percnt; secure. We cannot
            guarantee absolute security, but we strive to use commercially
            reasonable measures.
          </li>
        </ul>

        {/* ── 10. Children's Privacy ── */}
        <h2>10. Children&apos;s Privacy</h2>
        <p>
          {APP_NAME} is not directed at children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          believe a child has provided information through the App, please
          contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
          take steps to address the situation.
        </p>

        {/* ── 11. Your Choices and Controls ── */}
        <h2>11. Your Choices and Controls</h2>
        <p>You have the following choices regarding your data:</p>
        <ul>
          <li>
            <strong>Delete App Data:</strong> You can delete all locally stored
            data by clearing the App&apos;s data in your device settings or by
            uninstalling the App.
          </li>
          <li>
            <strong>Manage Backups:</strong> You can choose whether to create
            backups and where to store them. You can delete backup files at any
            time.
          </li>
          <li>
            <strong>Ad Preferences:</strong> You can control ad personalization
            through your device&apos;s Google advertising settings.
          </li>
          <li>
            <strong>Manage Subscriptions:</strong> You can manage or cancel
            subscriptions through Google Play Store &gt; Subscriptions.
          </li>
          <li>
            <strong>Request Deletion:</strong> You may contact us to request
            deletion of any data that may be under our control. See our{" "}
            <a href="/data-deletion">Data Deletion</a> page for details.
          </li>
        </ul>

        {/* ── 12. Data Retention ── */}
        <h2>12. Data Retention</h2>
        <p>
          Because {APP_NAME} stores data locally on your device, retention is
          primarily under your control. Data remains on your device until you
          delete it, clear the App&apos;s data, or uninstall the App. Data
          processed by third-party services (such as Google, AdMob, or
          RevenueCat) is retained according to those services&apos; own data
          retention policies.
        </p>

        {/* ── 13. Policy Updates ── */}
        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Effective Date&quot; at the top of this page.
          We encourage you to review this Privacy Policy periodically. Continued
          use of the App after changes are posted constitutes acceptance of the
          updated policy.
        </p>

        {/* ── 14. Contact ── */}
        <h2>14. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your data, please contact us:
        </p>
        <ul>
          <li>
            <strong>Developer:</strong> {OPERATOR_NAME}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
              {SITE_URL}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-400">
          This Privacy Policy is governed by the laws of {JURISDICTION}.
        </p>
      </SectionCard>
    </PageShell>
  );
}
