import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Fleet | Genz Traveller - Premium Vehicles in Sri Lanka",
  description: "Browse our premium fleet of AC buses, vans, luxury cars, wedding cars & lorries. Choose your perfect vehicle for travel across Sri Lanka.",
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
