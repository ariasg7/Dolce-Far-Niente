import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolce Far Niente | Luxury Skincare",
  description: "Experience the glass skin standard with clinical precision.",
  openGraph: {
    title: "Dolce Far Niente",
    description: "Bespoke facial treatments and high-end skincare.",
    images: ["/img/Dolce_Logo.png"], // Optional: fallback if you don't use the file method above
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