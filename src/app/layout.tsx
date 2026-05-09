import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Genz Traveller | Premium Transport Services in Sri Lanka",
  description:
    "Sri Lanka's premier vehicle hire service. Luxury buses, AC vans, cars, airport transfers, wedding transport & group tours. Book now for safe, comfortable & reliable travel.",
  keywords:
    "Sri Lanka transport, vehicle hire, bus rental, van hire, airport transfer, wedding car, Kandy tours, Ella tours, Nuwara Eliya tours, Genz Traveller",
  openGraph: {
    title: "Genz Traveller | Premium Transport Services in Sri Lanka",
    description:
      "Safe, Comfortable & Reliable Travel Solutions across Sri Lanka",
    type: "website",
    locale: "en_US",
    siteName: "Genz Traveller",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
