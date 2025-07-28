import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SemanticFooter } from "@/src/components/semantic";
import { jsonLd } from "@/src/schemas/main";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Окна Барс — Пластиковые окна и остекление в Сургуте",
  description:
    "Компания «Барс» — это команда профессионалов, специализирующаяся на производстве и установке оконных изделий из ПВХ и амалиена.Мы не просто устанавливаем окна — мы создаём комфорт, тепло и тишину в каждом доме.",
  keywords: [
    "Окна Сургут",
    "Установка окон",
    "Пластиковые окна",
    "Окна Барс",
    "Окна ПВХ Сургут",
    "Барс Сургут",
  ],

  openGraph: {
    title: "Окна Барс — Пластиковые окна в Сургуте",
    description:
      "Производство и установка окон ПВХ и амалиена. Бесплатный замер. Гарантия качества. Компания «Барс», Сургут.",
    url: "https://bars-surgut.ru",
    siteName: "Барс",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://bars-surgut.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased relative`}>
        <div className="flex  flex-col wrapper min-h-dvh overflow-hidden">
          {children}
          <SemanticFooter />
        </div>
      </body>
    </html>
  );
}
