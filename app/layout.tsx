"use client";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";


let title = "Should I Buy ?";
let description = "fin the best deal in seconds.";


export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/fav.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >

        <SessionProvider>
          <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
              {children}
            </main>
            <Footer />
          </div>
        </SessionProvider>

        <Analytics />
      </body>
    </html>
  );
}
