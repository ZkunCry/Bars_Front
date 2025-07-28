export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ООО Барс",
  description: "Окна Барс — Пластиковые окна и остекление в Сургуте",
  url: "https://bars-surgut.ru",
  logo: "https://bars-surgut.ru/logowhite.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "б-р Свободы, 4",
    addressLocality: "Сургут",
    addressRegion: "Ханты-Мансийский автономный округ",
    postalCode: "628403",
    addressCountry: "RU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7 346 224-33-33",
    contactType: "Customer Service",
  },
};
