import "@/assets/css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ComponentProvider from "@/ComponentProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge Builder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ComponentProvider>
            {children}
          </ComponentProvider>
      </body>
    </html>
  );
}
