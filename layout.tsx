
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonyToon World — Coming Soon",
  description: "Pre-launch page for TonyToon World.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
