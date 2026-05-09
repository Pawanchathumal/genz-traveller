import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Genz Traveller - Sri Lanka's Premier Transport Service",
  description: "Learn about Genz Traveller - our story, values, and commitment to providing premium transport services across Sri Lanka.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
