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
  title: "Explore Canto’s Ecosystem",
  description:
    "Explore web+! Check out projects and integrations, discover upcoming community events, and stay updated with new developments in Canto’s ecosystem.",
  keywords: ["Canto", "web+", "blockchain", "ecosystem"],
  icons: {
    apple: "meta/apple-touch-icon.png",
    icon: "meta/favicon.ico",
  },
  openGraph: {
    title: "Explore Canto’s Ecosystem",
    description:
      "Explore web+! Check out projects and integrations, discover upcoming community events, and stay updated with new developments in Canto’s ecosystem.",
    type: "website",
    images: [
      {
        url: "https://explore.canto.io/social.jpg",
        width: 1200,
        height: 630,
        alt: "Canto’s Ecosystem",
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
      <body
        className={`${rmmono.variable} ${videotype.variable} ${rmmono.className} `}
      >
        {children}
      </body>
    </html>
  );
}
