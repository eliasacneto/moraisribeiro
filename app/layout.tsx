import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import Nav from "./components/Home/Nav";

const font = Marcellus({
  weight:['400'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Morais & Ribeiro",
  description: "Advocacia e Consultoria Jurídica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
        </body>
    </html>
  );
}
