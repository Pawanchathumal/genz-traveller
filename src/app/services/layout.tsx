import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Genz Traveller - Transport Solutions in Sri Lanka",
  description: "Bus hire, van hire, car hire, airport transfers, wedding transport, group tours, lorry transport & corporate transport services across Sri Lanka.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
