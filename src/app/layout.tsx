import type { Metadata } from "next";
import { Electrolize, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "./providers/next-ui-providers";

import MaintenanceModal from "./components/display-components/MaintenanceModal";
import React from "react";

import NavbarTwo from "./components/layout-components/second-nav";

const electrolizeFont = Electrolize({
  subsets: ["latin"],
  weight: "400",
});
const sourceSans3 = Source_Sans_3({
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
        // className={`${electrolizeFont.className} h-[100%] electrolize-regular`}
        className={`${sourceSans3.className} h-[100%] source-sans-3`}
        suppressHydrationWarning={true}
      >
        <NextUIProviders>
          {isBeingMaintained ? (
            <>
              <MaintenanceModal />
            </>
          ) : (
            <>
              <NavbarTwo />
              {children}
            </>
          )}
        </NextUIProviders>
      </body>
    </html>
  );
}
