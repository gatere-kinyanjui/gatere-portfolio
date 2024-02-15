import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "./components/layout-components/Header";
import Footer from "./components/layout-components/Footer";
import MaintenanceModal from "./components/display-components/MaintenanceModal";

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
    <html lang="en">
      <body
        className={electrolizeFont.className}
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
