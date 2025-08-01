import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./(components)/Navbar";
import Footer from "./(components)/_Footer";
import NavSocial from "./(components)/_NavSocial";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Earthaam",
  description: "Earthaam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap&quot;);
        </style>
      </Head>
      <body>
        <NavSocial />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
