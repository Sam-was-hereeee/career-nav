import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/hook/use-user";
import Footer from "@/components/shared_components/Footer";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "職屬：文學院職涯經驗分享平台",
  description: "文學院職涯經驗分享平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-auto`}
      >
        <UserProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
          <NaviBar />
          <main>{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
