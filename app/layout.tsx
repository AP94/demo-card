import type { Metadata } from "next";
import { heebo } from "./fonts";
import "./app.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
