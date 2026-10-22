import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turnkey Solar PV & BESS Manufacturing Lines India | Novus Hi-Tech",
  description:
    "Turnkey solar PV manufacturing lines (Ingot to Module) and BESS assembly lines (Cell to Container). Built by roboticists. World-leading process equipment integrated with Novus robotics and MES. Delivered and serviced in India. 16 to 20 week commissioning.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
