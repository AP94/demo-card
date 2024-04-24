import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./app.css";

const heebo = Heebo({ 
  subsets: ["latin"],
  weight: ['400', '600', '800'] });

export const metadata: Metadata = {
  title: "Hire me!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
