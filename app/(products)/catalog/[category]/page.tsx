import { ProductCard } from "@/src/components/features";
export const revalidate = 60;
export const dynamicParams = true;
export async function generateStaticParams() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_STRAPI_API_PROD
          : process.env.NEXT_STRAPI_API_DEV
      }/categories`,
      {
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const categories = await res.json();

    return [
      ...categories.map((cat) => ({
        category: cat.name.toLowerCase(),
      })),
      { category: "all" },
    ];
  } catch (error) {
    console.error("Failed to fetch categories for static generation:", error);
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  let cards = [];
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    if (category === "all") {
      const allCardsRes = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_STRAPI_API_PROD
            : process.env.NEXT_STRAPI_API_DEV
        }/cards`,
        {
          signal: controller.signal,
        }
      );
      clearTimeout(timeoutId);

      if (!allCardsRes.ok) {
        throw new Error(`HTTP error! status: ${allCardsRes.status}`);
      }

      cards = await allCardsRes.json();
    } else {
      const categoryRes = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_STRAPI_API_PROD
            : process.env.NEXT_STRAPI_API_DEV
        }/categories?name=${category}`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (!categoryRes.ok) {
        throw new Error(`HTTP error! status: ${categoryRes.status}`);
      }

      const categories = await categoryRes.json();

      if (categories.length > 0) {
        cards = categories[0].cards || [];
      } else {
        return <p className="p-4 text-gray-500 italic">Категория не найдена</p>;
      }
    }
  } catch (error) {
    console.error("Failed to fetch category data:", error);
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-lg">
        <p>Сервер временно недоступен</p>
        <p className="text-sm mt-1">
          Пожалуйста, попробуйте перезагрузить страницу позже
        </p>
      </div>
    );
  }

  if (category !== "all" && cards.length === 0) {
    return (
      <p className="p-4 text-gray-500 italic">
        Товары для данной категории не добавлены
      </p>
    );
  }

  if (cards.length === 0) {
    return (
      <p className="p-4 text-gray-500 italic">
        {category === "all"
          ? "Товары не найдены"
          : "Товары для данной категории еще не добавлены"}
      </p>
    );
  }

  return cards.map((card, index) => (
    <ProductCard
      key={index}
      id={card.id}
      title={card.title}
      price={card.price}
      image={card.image.url}
    />
  ));
}
