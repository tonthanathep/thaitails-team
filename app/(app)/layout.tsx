import type { Metadata } from "next";
import { Noto_Sans_Thai, Nunito_Sans } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: "variable",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Thaitails Convention",
  description: "About Thaitails Convention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${notoSansThai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
