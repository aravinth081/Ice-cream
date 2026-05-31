import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "iCream | Premium Handcrafted Ice Cream — Crafted Happiness In Every Scoop",
  description:
    "Experience crafted happiness in every scoop. Handcrafted premium ice creams made with 100% pure farm milk, real fruits, and natural ingredients. Explore 50+ signature flavours from India's finest ice cream brand.",
  keywords: [
    "premium ice cream",
    "iCream",
    "handcrafted ice cream",
    "luxury dessert",
    "natural ice cream",
    "pure milk ice cream",
    "Indian ice cream brand",
    "gelato",
    "kulfi",
  ],
  authors: [{ name: "iCream" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable}`}
    >
      <body className="bg-white text-brand-primary font-sans antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
