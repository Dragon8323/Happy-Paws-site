import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://happy-paws-site-rouge.vercel.app";
const siteDescription =
  "Happy Paws Animal Clinic in Il-Marsa, Malta — helping people help animals. Book an appointment or get in touch with our veterinary team.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Happy Paws Animal Clinic",
  description: siteDescription,
  openGraph: {
    title: "Happy Paws Animal Clinic",
    description: siteDescription,
    url: siteUrl,
    siteName: "Happy Paws Animal Clinic",
    images: [{ url: "/happy-paws-logo.png", width: 800, height: 800 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Happy Paws Animal Clinic",
    description: siteDescription,
    images: ["/happy-paws-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
