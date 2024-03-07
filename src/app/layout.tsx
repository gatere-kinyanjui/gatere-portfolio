import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "./components/layout-components/Header";
import Footer from "./components/layout-components/Footer";
import MaintenanceModal from "./components/display-components/MaintenanceModal";
import React from "react";

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
  const isBeingMaintained = true;

  return (
    <html lang="en" className="light h-[100%]">
      <body
        className={`${electrolizeFont.className} h-[100%]`}
        suppressHydrationWarning={true}
      >
        {/* <Header /> */}
        {isBeingMaintained ? (
          <>
            <MaintenanceModal />
          </>
        ) : (
          <>{children}</>
        )}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
