import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book | Genz Traveller - Book Your Ride in Sri Lanka",
  description: "Book your premium transport in Sri Lanka. Fill the form or WhatsApp us at +94 71 959 3100 for instant quotes on buses, vans, cars & more.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
