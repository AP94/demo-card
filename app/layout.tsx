import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./app.css";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
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
