// src/app/catalog/[category]/page.tsx
import { ProductCard } from "@/src/components/features";
import { StrapiService } from "@/src/services/StrapiService";

export const revalidate = 60;
export const dynamicParams = true;

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  try {
    // logger.info({
    //   event: "page_catalog",
    //   info: {
    //     category,
    //     message: `[CategoryPage] Запрос страницы категории`,
    //   },
    // });

    let cards = [];

    if (category === "all") {
      cards = await StrapiService.getAllCards();
    } else {
      const categoryData = await StrapiService.getCategoryByName(category);

      if (!categoryData) {
        return <p className="p-4 text-gray-500 italic">Категория не найдена</p>;
      }

      cards = categoryData.cards || [];
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

    // logger.info({
    //   event: "page_catalog_success",
    //   info: {
    //     category,
    //     cards_count: cards.length,
    //     message: `Успешно получены товары`,
    //   },
    // });

    return cards.map((card) => (
      <ProductCard
        key={card.id}
        id={card.id}
        title={card.title}
        price={card.price}
        image={card.image?.url || "/placeholder.png"}
      />
    ));
  } catch (error) {
    console.error("CategoryPage error:", error);

    // logger.error({
    //   event: "page_catalog_error",
    //   info: {
    //     category,
    //     message: `Ошибка: ${error.message}`,
    //   },
    // });

    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-lg">
        <p>Сервер временно недоступен</p>
        <p className="text-sm mt-1">
          Пожалуйста, попробуйте перезагрузить страницу позже
        </p>
      </div>
    );
  }
}
