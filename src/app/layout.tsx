import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mascotas",
  description: "Adopt a furry best friend.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
