import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const font = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morais & Ribeiro - Advocacia e Consultoria Jurídica",
  description: "Advocacia e Consultoria Jurídica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <Nav />

        <div className="">
          <div>{children}</div>
          <a
            href="#"
            target="_blank"
            className="fixed bottom-4 right-4 lg:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FontAwesomeIcon
              className="cursor-pointer duration-500"
              icon={faWhatsapp}
              width={32}
            />
          </a>
        </div>
      </body>
    </html>
  );
}
