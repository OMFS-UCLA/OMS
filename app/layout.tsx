import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "OMS Nexus",
  description: "OMS Nexus",
  icons: {
    icon: `${basePath}/logo2.png`,
    shortcut: `${basePath}/logo2.png`,
    apple: `${basePath}/logo2.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
