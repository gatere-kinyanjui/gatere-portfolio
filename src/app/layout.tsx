import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "./components/layout-components/Header";
import Footer from "./components/layout-components/Footer";

const electrolizeFont = Electrolize({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gatere Kinynajui",
  description: "Personal Developer Portfolio",
  // TODO: check metadata docs & add head icon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={electrolizeFont.className}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
