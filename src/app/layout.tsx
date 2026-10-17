import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profileData.name} — ${profileData.headline} | Portfolio`,
  description:
    "Personal portfolio of Pradeepkumar BC, a Software Development Engineer building full-stack applications, machine learning classifiers, and intelligent digital products.",
  keywords: [
    "Pradeepkumar BC",
    "Software Development Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Credit Card Fraud Detection",
    "GMIT Davanagere",
  ],
  authors: [{ name: profileData.name, url: profileData.githubUrl }],
  creator: profileData.name,
  metadataBase: new URL("https://pradeepkumar-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pradeepkumar-portfolio.vercel.app",
    title: `${profileData.name} — Software Development Engineer`,
    description: profileData.heroDescription,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/images/pradeepkumar.jpg",
        width: 800,
        height: 800,
        alt: `${profileData.name} - Software Development Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — Software Development Engineer`,
    description: profileData.heroDescription,
    images: ["/images/pradeepkumar.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#08090D] text-content-primary antialiased selection:bg-brand-blue/30 selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
