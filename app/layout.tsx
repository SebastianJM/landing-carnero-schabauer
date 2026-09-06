import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carnero Schabauer | Asesoría legal para empresas",
  description: "Acompañamiento legal preventivo y estratégico para emprendedores y empresas en crecimiento.",
  metadataBase: new URL("https://carneroschabauer.pe"),
  openGraph: {
    title: "Carnero Schabauer Abogados & Asociados",
    description: "Asesoría legal para empresas que no se detienen.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
