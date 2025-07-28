export const jsonld = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Установка оконных конструкций",
  provider: {
    "@type": "LocalBusiness",
    name: "Барс",
    description: "Компания по установке окон, балконов и дверей в Сургуте",
    telephone: "+7 346 224-33-33",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Сургут",
      addressRegion: "Ханты-Мансийский автономный округ",
      postalCode: "628403",
      streetAddress: "б-р Свободы, 4",
    },
  },
  description: "Профессиональные услуги по установке и монтажу оконных изделий",
  areaServed: "Сургут и Сургутский район",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "Договорная",
      priceCurrency: "RUB",
    },
  },
};
