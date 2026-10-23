import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Terapia ABA em São Paulo | Dra. Joana D'Arc",
  description:
    "Psicóloga especializada em Terapia ABA para crianças com autismo em São Paulo. Atendimento presencial e online com abordagem baseada em evidências científicas.",
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Joana D'Arc | Terapia ABA",
    images: [
      {
        url: "/imagens/banner-dr-joana.webp",
        alt: "Dra. Joana D'Arc, psicóloga especialista em Terapia ABA em São Paulo",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <LocalBusinessSchema />
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
