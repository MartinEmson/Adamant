import "./globals.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  title: "Adamant Bevakning",
  description: "Professionella säkerhetstjänster för din trygghet",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <SmoothScroll>
          <main className="">{children}</main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
