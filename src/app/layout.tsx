import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const inter = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "My Next.js Site",
  description: "This is my Next.js site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
