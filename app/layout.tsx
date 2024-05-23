import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Providers from "./providers";
import { NavBar } from "@/sections/navbar/navbar";
import Footer from "@/sections/footer/footer";

const rmmono = localFont({
  src: "../fonts/rm-mono-regular.ttf",
  variable: "--rm-mono",
});

const videotype = localFont({
  src: "../fonts/videotype.ttf",
  variable: "--videotype",
});

const vcr = localFont({
  src: "../fonts/proto-mono-regular.ttf",
  variable: "--vcr",
});

export const metadata: Metadata = {
  title: "Canto.io - Layer-1 Blockchain",
  description:
    "canto is a layer-1 blockchain built to deliver on the promise of defi. as a post-traditional financial movement, canto enables accessibility, transparency, and freedom for new systems. driven by a loosely organized collective of chain-native builders, canto provides a new commons powered by free public infrastructure_",
  keywords: ["Canto", "web+", "blockchain", "ecosystem", "landing"],
  openGraph: {
    title: "Canto.io - Layer-1 Blockchain",
    description:
      "canto is a layer-1 blockchain built to deliver on the promise of defi. as a post-traditional financial movement, canto enables accessibility, transparency, and freedom for new systems. driven by a loosely organized collective of chain-native builders, canto provides a new commons powered by free public infrastructure_",
    type: "website",
    images: [
      {
        url: "https://app.canto.io/meta.jpg",
        width: 1200,
        height: 630,
        alt: "Canto - Layer-1 Blockchain",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${rmmono.variable} ${videotype.variable} ${vcr.variable} ${rmmono.className} `}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
