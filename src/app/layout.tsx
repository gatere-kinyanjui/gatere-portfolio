import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "./providers/next-ui-providers";

import MaintenanceModal from "./components/display-components/MaintenanceModal";
import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/layout-components/Navbar/navbar";
import NavbarTwo from "./components/layout-components/second-nav";

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
  const isBeingMaintained = false;

  return (
    <html lang="en" className="light h-[100%]">
      <body
        className={`${electrolizeFont.className} h-[100%] electrolize-regular`}
        suppressHydrationWarning={true}
      >
        <NextUIProviders>
          <NavbarTwo />

          {isBeingMaintained ? (
            <>
              <MaintenanceModal />
            </>
          ) : (
            <> {children}</>
          )}
        </NextUIProviders>
      </body>
    </html>
  );
}
