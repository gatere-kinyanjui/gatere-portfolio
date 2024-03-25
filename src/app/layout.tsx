import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "./providers/next-ui-providers";

import MaintenanceModal from "./components/display-components/MaintenanceModal";
import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/layout-components/Navbar/navbar";

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
          {/* <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white"> */}
          <Navbar />

          {isBeingMaintained ? (
            <>
              <MaintenanceModal />
            </>
          ) : (
            <> {children}</>
          )}
          {/* </main> */}
        </NextUIProviders>
      </body>
    </html>
  );
}
