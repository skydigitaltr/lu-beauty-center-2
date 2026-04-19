import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LU Beauty Clinic | Premium Güzellik & Bakım Merkezi",
  description:
    "Cilt bakımı, lazer epilasyon ve profesyonel güzellik uygulamalarında modern, güvenilir ve konforlu hizmet. İstanbul Kadıköy'de premium güzellik deneyimi.",
  keywords:
    "güzellik merkezi, cilt bakımı, lazer epilasyon, hydrafacial, kalıcı makyaj, Kadıköy, İstanbul",
  openGraph: {
    title: "LU Beauty Clinic | Premium Güzellik & Bakım Merkezi",
    description:
      "Işıltınızı ortaya çıkaran premium bakım deneyimi. İstanbul Kadıköy.",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
