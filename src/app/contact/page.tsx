import type { Metadata } from "next";
import ClosingCta from "../components/ClosingCta";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Novus Solar Team | Book a Meeting at REI 2026",
  description:
    "Book a meeting with the Novus solar and BESS team at REI Expo 2026, Hall 16, Booth A01, or virtually. Reply within one business day. Gurugram, India.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
      <ClosingCta />
    </>
  );
}
