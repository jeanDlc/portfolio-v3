import type { Metadata } from "next";
import { poppins } from "@/fonts";

import "./globals.scss";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "jeanDLC portfolio",
  description: `It is the portfolio of the full stack developer Jean Pierre de la Cruz`,
  authors: { name: "Jean Pierre de la Cruz" },
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="layout">
          <CustomCursor />
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
