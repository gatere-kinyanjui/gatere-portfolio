import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";

const electrolizeFont = Electrolize({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gatere Kinynajui",
  description: "Personal Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={electrolizeFont.className}>{children}</body>
    </html>
  );
}
