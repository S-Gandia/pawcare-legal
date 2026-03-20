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
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${APP_NAME} — the rules governing your use of the app.`,
};

export default function TermsPage() {
  return (
    <PageShell
      title="Terms & Conditions"
      subtitle={`Effective Date: ${EFFECTIVE_DATE}`}
    >
      <SectionCard>
        {/* ── 1. Acceptance ── */}
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
          {" "}{APP_NAME} mobile application (&quot;the App&quot;) developed and
          operated by {OPERATOR_NAME} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By downloading, installing, or using the App, you
          agree to be bound by these Terms. If you do not agree, please do not
          use the App.
        </p>

        {/* ── 2. About the App ── */}
        <h2>2. About the App</h2>
        <p>
          {APP_NAME} is a pet care management app for Android that helps users
          organize pet profiles, reminders, care tasks, vaccines, medications,
          vet records, notes, and uploaded documents. The App is designed for
          personal, non-commercial use.
        </p>

        {/* ── 3. Use of the App ── */}
        <h2>3. Use of the App</h2>
        <p>You agree to use {APP_NAME} only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful, abusive, or fraudulent purpose.</li>
          <li>Attempt to reverse-engineer, decompile, or disassemble the App.</li>
          <li>
            Interfere with or disrupt the App&apos;s functionality or any
            related systems.
          </li>
          <li>
            Use the App to store, transmit, or distribute any harmful or
            offensive content.
          </li>
          <li>
            Circumvent any security features, including the local PIN
            protection.
          </li>
        </ul>

        {/* ── 4. Informational Purpose ── */}
        <h2>4. Informational Nature of Content</h2>
        <p>
          {APP_NAME} is designed to help you organize and track pet care
          information. <strong>The App does not provide veterinary advice,
          medical diagnoses, or professional health guidance.</strong> All content
          in the App is for informational and personal organizational purposes
          only.
        </p>
        <p>
          You should always consult a qualified veterinarian for any questions or
          decisions regarding your pet&apos;s health, diet, medical treatments,
          vaccinations, or medications. {OPERATOR_NAME} is not responsible for
          any pet care decisions you make based on information stored in or
          suggested by the App.
        </p>

        {/* ── 5. User Responsibility ── */}
        <h2>5. User Responsibility</h2>
        <p>
          You are solely responsible for the data you enter into {APP_NAME} and
          for any decisions you make regarding the care of your pets. You
          acknowledge that:
        </p>
        <ul>
          <li>
            The accuracy and completeness of pet records, reminders, and notes
            depend entirely on the information you provide.
          </li>
          <li>
            You are responsible for backing up your data and for the security of
            any backup files you create.
          </li>
          <li>
            Uninstalling the App or clearing its data may result in permanent
            loss of locally stored information.
          </li>
        </ul>

        {/* ── 6. Subscriptions & Purchases ── */}
        <h2>6. Subscriptions and Premium Purchases</h2>
        <p>
          {APP_NAME} may offer premium features through subscriptions or one-time
          in-app purchases. If you choose to purchase a subscription or premium
          feature:
        </p>
        <ul>
          <li>
            All billing is processed by Google Play. Payment terms, renewal, and
            refund policies are governed by Google Play&apos;s terms.
          </li>
          <li>
            Subscriptions automatically renew unless cancelled before the end of
            the current billing period.
          </li>
          <li>
            You can manage or cancel subscriptions at any time through Google
            Play Store &gt; Subscriptions.
          </li>
          <li>
            We do not directly collect or store your payment information.{" "}
            RevenueCat may be used to manage subscription entitlements.
          </li>
          <li>
            Refund requests should be directed to Google Play, as billing is
            handled through their platform.
          </li>
        </ul>

        {/* ── 7. Intellectual Property ── */}
        <h2>7. Intellectual Property</h2>
        <p>
          The App, including its design, code, graphics, icons, and content, is
          the intellectual property of {OPERATOR_NAME} and is protected by
          applicable copyright and intellectual property laws. You may not
          reproduce, distribute, modify, or create derivative works from the App
          or any of its components without prior written permission.
        </p>
        <p>
          You retain ownership of any personal data and content you enter into
          the App.
        </p>

        {/* ── 8. App Availability & Updates ── */}
        <h2>8. App Availability and Updates</h2>
        <p>
          We strive to keep {APP_NAME} available and up to date, but we do not
          guarantee uninterrupted access. We reserve the right to:
        </p>
        <ul>
          <li>Modify, update, or discontinue any feature of the App at any time.</li>
          <li>
            Release updates that may change functionality, fix bugs, or add new
            features.
          </li>
          <li>
            Temporarily suspend the App for maintenance or other operational
            reasons.
          </li>
        </ul>
        <p>
          We recommend keeping the App updated to the latest version for the
          best experience and security.
        </p>

        {/* ── 9. Limitation of Liability ── */}
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, {OPERATOR_NAME}{" "}
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from or related to your use
          of the App, including but not limited to:
        </p>
        <ul>
          <li>Loss of data, pet records, or files stored in the App.</li>
          <li>
            Any decisions or actions taken based on information stored in the
            App.
          </li>
          <li>
            Interruption or unavailability of the App or any of its features.
          </li>
          <li>
            Actions of third-party services integrated with the App (such as
            Google Play, AdMob, or RevenueCat).
          </li>
        </ul>
        <p>
          The App is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, either express or
          implied.
        </p>

        {/* ── 10. Termination / Suspension ── */}
        <h2>10. Termination and Suspension</h2>
        <p>
          You may stop using {APP_NAME} at any time by uninstalling it from your
          device. We reserve the right to restrict or terminate access to the
          App if we reasonably believe you are violating these Terms or using the
          App in a way that may cause harm.
        </p>
        <p>
          If you have an active subscription, termination of access does not
          automatically cancel your subscription. You must cancel through Google
          Play to avoid further charges.
        </p>

        {/* ── 11. Governing Law ── */}
        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of {JURISDICTION}, without regard to conflict of law principles.
          Any disputes arising under these Terms shall be resolved in the
          appropriate courts of {JURISDICTION}.
        </p>

        {/* ── 12. Changes to Terms ── */}
        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will
          revise the &quot;Effective Date&quot; at the top of this page. We
          encourage you to review these Terms periodically. Your continued use
          of the App after changes are posted constitutes your acceptance of the
          revised Terms.
        </p>

        {/* ── 13. Contact ── */}
        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
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
      </SectionCard>
    </PageShell>
  );
}
