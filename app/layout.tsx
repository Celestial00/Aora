import type { Metadata } from "next";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import "./globals.css";
import CustomCursor from "./components/main/CustomeCursor";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aora",
  description: "Software Development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} min-h-screen flex flex-col bg-zinc-900  from-indigo-500/10 via-transparent to-cyan-500/10`}
      >
        <CustomCursor />
        <main className="flex-1 px-10 py-5 md:px-30 md:py-5">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
