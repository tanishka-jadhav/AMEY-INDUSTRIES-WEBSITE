import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { AuthProvider } from "@/context/AuthContext";
import { COMPANY_DETAILS } from "@/data/company";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ameyindustries.com"),
  title: {
    default: "Green Gym & Outdoor Fitness Equipment in Nashik | AMEY INDUSTRIES",
    template: "%s | AMEY INDUSTRIES Nashik",
  },
  description:
    "AMEY INDUSTRIES (Nashik, Maharashtra) manufactures heavy-duty outdoor Green Gym equipment, playground solutions, and custom industrial fabrication for parks, institutions, housing societies, and commercial projects.",
  keywords: [
    "Green Gym Nashik",
    "Green Gym Manufacturer in Nashik",
    "Outdoor Gym Equipment Nashik",
    "Outdoor Fitness Equipment Nashik",
    "Playground Equipment Nashik",
    "Playground Equipment Manufacturer Nashik",
    "Industrial Fabrication Nashik",
    "Fabrication Services Nashik",
    "Prasad Suresh Jadhav AMEY INDUSTRIES",
  ],
  authors: [{ name: "AMEY INDUSTRIES", url: "https://ameyindustries.com" }],
  creator: "AMEY INDUSTRIES",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ameyindustries.com",
    title: "Green Gym & Outdoor Fitness Equipment in Nashik | AMEY INDUSTRIES",
    description:
      "Nashik-based manufacturer providing heavy-duty Green Gym outdoor fitness equipment, playground structures, and custom metal fabrication.",
    siteName: "AMEY INDUSTRIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Gym & Outdoor Fitness Equipment in Nashik | AMEY INDUSTRIES",
    description:
      "Nashik-based manufacturer providing heavy-duty Green Gym outdoor fitness equipment, playground structures, and custom metal fabrication.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_DETAILS.name,
    "telephone": COMPANY_DETAILS.phoneRaw,
    "email": COMPANY_DETAILS.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY_DETAILS.city,
      "addressRegion": COMPANY_DETAILS.state,
      "addressCountry": COMPANY_DETAILS.country,
    },
    "url": "https://ameyindustries.com",
    "knowsAbout": [
      "Green Gym Equipment",
      "Outdoor Fitness Equipment",
      "Playground Equipment",
      "Industrial Fabrication",
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-industrial-bg text-industrial-text antialiased selection:bg-industrial-green selection:text-white">
        <AuthProvider>
          <QuoteModalProvider>
            <TopBanner />
            <Navbar />
            <main className="flex-grow pb-16 sm:pb-0">{children}</main>
            <Footer />
            <FloatingCTA />
            <QuoteModal />
          </QuoteModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
