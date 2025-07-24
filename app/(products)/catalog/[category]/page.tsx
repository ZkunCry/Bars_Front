import { ProductCard } from "@/src/components/features";
import { STRAPI_API } from "@/src/constants/api";
import { logger } from "@/src/lib/logger";
export const revalidate = 60;
export const dynamicParams = true;
export async function generateStaticParams() {
  try {
    const url = `${STRAPI_API}/categories`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      logger.warn({
        event: "page_catalog",
        info: {
          url: url,
          message: "[generateStaticParams] Запрос прерван по таймауту (3 сек)",
        },
      });
    }, 3000);
    logger.info({
      event: "page_catalog",
      info: {
        url: url,
        message: "Проверка URL",
      },
    });

    const res = await fetch(url, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    logger.info({
      event: "page_catalog",
      info: {
        url: url,
        message: `[generateStaticParams] Ответ от API: статус ${res.status}`,
      },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const categories = await res.json();
    logger.info({
      event: "page_catalog",
      info: {
        url: url,
        message: `[generateStaticParams] Получено категорий: ${categories.length}`,
      },
    });
    return [
      ...categories.map((cat) => ({
        category: cat.name.toLowerCase(),
      })),
      { category: "all" },
    ];
  } catch (error) {
    console.error("Failed to fetch categories for static generation:", error);
    logger.error({
      event: "page_catalog",
      info: {
        message: `[generateStaticParams] Ошибка при загрузке категорий: ${error}`,
      },
    });
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
    logger.info({
      event: "page_catalog",
      info: {
        url: `${STRAPI_API}/categories?name=${category}`,
        message: `[CategoryPage] Запрос страницы категории: ${category}`,
      },
    });
    if (category === "all") {
      const allCardsRes = await fetch(`${STRAPI_API}/cards`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!allCardsRes.ok) {
        throw new Error(`HTTP error! status: ${allCardsRes.status}`);
      }

      cards = await allCardsRes.json();
    } else {
      const categoryRes = await fetch(
        `${STRAPI_API}/categories?name=${category}`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (!categoryRes.ok) {
        throw new Error(`HTTP error! status: ${categoryRes.status}`);
      }

      const categories = await categoryRes.json();
      logger.info({
        event: "page_catalog",
        info: {
          url: `${STRAPI_API}/categories?name=${category}`,
          message: `[CategoryPage] Категория найдена: ${JSON.stringify(
            categories
          )}`,
        },
      });
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
  logger.info({
    event: "page_catalog",
    info: {
      url: `${STRAPI_API}/categories?name=${category}`,
      message: `[CategoryPage] Товары: ${JSON.stringify(cards)}`,
    },
  });
  return cards.map((card, index) => (
    <ProductCard
      key={index}
      id={card.id}
      title={card.title}
      price={card.price}
      image={card.image ? card.image.url : "/placeholder.png"}
    />
  ));
}
