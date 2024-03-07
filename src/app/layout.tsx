import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { NextUIProviders } from "./providers/next-ui-providers";

import MaintenanceModal from "./components/display-components/MaintenanceModal";
import Footer from "./components/layout-components/Footer";

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
  const isBeingMaintained = false;

  return (
    <html lang="en" className="light h-[100%]">
      <body
        className={`${electrolizeFont.className} h-[100%]`}
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

          {/* <Footer /> */}
        </NextUIProviders>
      </body>
    </html>
  );
}
