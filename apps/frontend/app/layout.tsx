import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Cust Coding | Software Developer",
  description:
    "Portfólio de Custódio Titosse, desenvolvedor de software focado em backend, arquitetura de sistemas, segurança e tecnologias descentralizadas.",
  keywords: [
    "software developer",
    "backend",
    "system design",
    "cybersecurity",
    "bitcoin",
    "devops",
    "secops",
  ],
  authors: [{ name: "Custódio Titosse" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${jetbrains.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-[var(--font-jetbrains)] bg-black text-white">
        {children}
      </body>
    </html>
  );
}