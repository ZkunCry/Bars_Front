import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SemanticFooter } from "@/src/components/semantic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Барс",
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
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative`}>
        <div className="flex  flex-col wrapper min-h-dvh overflow-hidden">
          {children}
          <SemanticFooter />
        </div>
      </body>
    </html>
  );
}
