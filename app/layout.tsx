import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolce Far Niente | Luxury Skincare & Clinical Esthetics",
  description: "Experience the glass skin standard with clinical precision. Offering bespoke facial treatments and high-end skincare in [Your City, State].",
  keywords: ["Esthetician", "Facials", "Glass Skin", "Luxury Skincare", "Clinical Esthetics", "[Your City] Skincare"],
  openGraph: {
    title: "Dolce Far Niente | Luxury Skincare",
    description: "Bespoke facial treatments and high-end skincare. Book your clinical glass skin experience.",
    url: 'https://www.dolcefarnienteesthetics.com',
    siteName: 'Dolce Far Niente',
    images: [
      {
        url: "/img/Dolce_Logo.png",
        width: 1200,
        height: 630,
        alt: "Dolce Far Niente Luxury Skincare Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  return (
    <html lang="en">
      <head>
        {/* This pulls the font directly from Google servers */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}