import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "./providers/next-ui-providers";

import Navbar from "./components/layout-components/Navbar";
import MaintenanceModal from "./components/display-components/MaintenanceModal";
import Footer from "./components/layout-components/Footer";
import NewNav from "./components/layout-components/Navbar/daisy-ui-nav";
import SimpleNav from "./components/layout-components/Navbar/next-ui-nav";
import NextUiNav from "./components/layout-components/Navbar/next-ui-nav";
import DaisyUiNav from "./components/layout-components/Navbar/daisy-ui-nav";
import DaisyFlexNav from "./components/layout-components/Navbar/daisy-flex-nav";

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
    <html lang="en" className="light h-screen">
      <body
        className={electrolizeFont.className}
        suppressHydrationWarning={true}
      >
        <NextUIProviders>
          <DaisyFlexNav />

          {isBeingMaintained ? (
            <>
              <MaintenanceModal />
            </>
          ) : (
            <>{children}</>
          )}

          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
