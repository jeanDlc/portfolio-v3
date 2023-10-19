import type { Metadata } from "next";
import { poppins } from "@/fonts";

import "./globals.scss";

export const metadata: Metadata = {
  title: "jeanDLC portfolio",
  description: `It is the portfolio of the full stack developer Jean Pierre de la Cruz`,
  authors: { name: "Jean Pierre de la Cruz" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
