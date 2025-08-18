"use client";
import Image from "next/image";
import TimurReviews from "@/src/assets/TimurReviews.jpg";
import TimurReviews2 from "@/src/assets/TimurReviews2.jpg";
import Olga1 from "@/src/assets/Olga1.jpg";
import Olga2 from "@/src/assets/Olga2.jpg";
import Olga3 from "@/src/assets/Olga3.jpg";
import Olga4 from "@/src/assets/Olga4.jpg";
import Olga5 from "@/src/assets/Olga5.jpg";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Тимур Кузнецов",
    date: "12 августа 2024",
    rating: 5,
    text: "Установили окно и застеклили входную группу. Очень довольны работой. Сделали все быстро и аккуратно, монтаж закончали в один день. Цены приятны, всем рекомендую!",
    images: [TimurReviews, TimurReviews2],
  },
  {
    id: 2,
    name: "Ольга Коверзюк",
    date: "21 мая 2025",
    rating: 5,
    text: "Серьезная компания! Выполняют все четко, профессионально, в заявленные сроки! Качественный материал! Рекомендую! Барс - Вы лучшие❤️",
    images: [Olga1, Olga2, Olga3, Olga4, Olga5],
  },
  {
    id: 3,
    name: "МАРУСЯ НИКОЛАЕВНА",
    date: "19 июня 2018",
    rating: 4,
    text: "Доброго времени суток!!! Осталась довольна работой замерщика и установкой оконных рам. Буду рекомендовать всем своим друзьям. Ребята Вы мастера своего дела. Так держать!!!",
    images: [],
  },
  {
    id: 4,
    name: "Сергей Баишев",
    date: "23 ноября 2019",
    rating: 5,
    text: "Пользуемся услугами фирмы 'Барс' второй раз, устанавливали окно в комнате, на кухне - окно с балконным выходом, остекление балкона. Работа выполнена за 1 день. После установки при сильном ветре отметили продувание окна. Обратились — проблему устранили незамедлительно. Фирмой довольны, рекомендуем!",
    images: [],
  },
  {
    id: 5,
    name: "Иван Арапко",
    date: "16 мая 2024",
    rating: 5,
    text: "Удобное расположение, приехал в офис, описал все моменты и проблемы, тут же приехали специалисты. Сделали всё быстро и качественно. Реально сэкономил деньги и время. Всем рекомендую, цены адекватные, всё вежливые!",
    images: [],
  },
  {
    id: 6,
    name: "Игорь Шаль",
    date: "10 февраля 2025",
    rating: 5,
    text: "Заказывали несколько окон с установкой в этой фирме, установка выполнена качественно, без нареканий. Рекомендую данную фирму.",
    images: [],
  },
];

const ReviewCard = ({ review }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const handlePrevImage = () => {
    setAnimationDirection("left");
    setCurrentImageIndex((prev) =>
      prev === 0 ? review.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setAnimationDirection("right");
    setCurrentImageIndex((prev) =>
      prev === review.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAnimationEnd = () => {
    setAnimationDirection(null);
  };

  return (
    <div className="min-w-[300px] max-w-[320px] rounded-xl overflow-hidden shadow-lg bg-white flex-shrink-0 hover:shadow-xl transition">
      {/* Photo Carousel */}
      <div className="relative h-40 w-full overflow-hidden">
        {review.images.map((image, index) => {
          const isCurrent = index === currentImageIndex;
          const isPrev =
            index ===
            (currentImageIndex === 0
              ? review.images.length - 1
              : currentImageIndex - 1);
          const isNext =
            index ===
            (currentImageIndex === review.images.length - 1
              ? 0
              : currentImageIndex + 1);

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                isCurrent
                  ? "translate-x-0 opacity-100 z-10"
                  : isPrev && animationDirection === "left"
                  ? "translate-x-full opacity-0 z-0"
                  : isPrev && animationDirection === "right"
                  ? "-translate-x-full opacity-0 z-0"
                  : isNext && animationDirection === "right"
                  ? "translate-x-full opacity-0 z-0"
                  : isNext && animationDirection === "left"
                  ? "-translate-x-full opacity-0 z-0"
                  : "opacity-0 z-0"
              }`}
              onTransitionEnd={handleAnimationEnd}
            >
              <Image
                src={image}
                alt={`Фото отзыва ${review.name} ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
        {/* Image Navigation Arrows */}
        {review.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="cursor-pointer  absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition z-20"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="cursor-pointer  absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition z-20"
              aria-label="Следующее фото"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            👤
          </div>
          <div>
            <p className="font-medium">{review.name}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < review.rating ? "★" : "☆"}</span>
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-700 text-sm">{review.text}</p>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 relative">
      <h2 className="text-2xl font-bold mb-6">Отзывы клиентов</h2>

      {/* Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Navigation Arrows for Reviews */}
        <button
          onClick={scrollLeft}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Предыдущие отзывы"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="cursor-pointer  absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Следующие отзывы"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
