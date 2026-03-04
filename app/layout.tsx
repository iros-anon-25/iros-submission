import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Planning and Situation Handling with Active Perception",
  description: "Anonymous submission to IROS 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
