import Image from "next/image";
import { ProductCardProps } from "@/src/types/products";
export const ProductCard = ({ title, price, image }: ProductCardProps) => {
  const imageUrl = image
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL + image
    : "/placeholder.png";
  return (
    <div className="w-full max-w-[547px] min-h-[400px] bg-gray-100 p-4 rounded-lg shadow-sm animate-fade-in ">
      <Image
        width={520}
        height={276}
        src={imageUrl}
        alt={title}
        className="w-full h-full max-h-[276px] object-cover rounded-[0.5rem]"
      />
      <div className="py-4">
        <h3 className="font-bold mb-2 text-[1.25rem] leading-[1.75rem]">
          {title}
        </h3>
        <p className="text-orange-500 font-medium">{price} ₽</p>
      </div>
    </div>
  );
};
