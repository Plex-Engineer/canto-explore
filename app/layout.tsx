import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const rmmono = localFont({
  src: "../fonts/rm-mono-regular.ttf",
  variable: "--rm-mono",
});

const videotype = localFont({
  src: "../fonts/videotype.ttf",
  variable: "--videotype",
});

export const metadata: Metadata = {
  title: "Explore the Canto Ecosystem",
  description: "Canto is a new way to explore the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rmmono.variable} ${videotype.variable} ${rmmono.className} `}
      >
        {children}
      </body>
    </html>
  );
}
