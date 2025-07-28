export const jsonld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Каталог товаров | Барс - Окна и двери в Сургуте",
  description:
    "Каталог оконных конструкций, дверей, балконов, жалюзи и других изделий для вашего дома и бизнеса",
  url: "https://bars-surgu.ru/catalog",
  publisher: {
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  },
};
