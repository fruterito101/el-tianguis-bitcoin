import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Tianguis Bitcoin - Aprende Bitcoin en el Mercado Mexicano",
  description: "Aprende Bitcoin de forma divertida e interactiva en el tianguis más chingón de México. Un proyecto educativo para el Hackathon Bitcoin México 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
