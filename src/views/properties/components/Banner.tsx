import React from "react";
import Card from "components/card";
import { HiOutlineHome } from "react-icons/hi";
export interface Land {
  id: number;
  image: string | null;
  status: string;
  price: string;
  title: string;
  slashedprice?: string;
  state: string;
  location: string;
  size: string;
  document: string;
}

interface LandCardProps {
  land: Land;
}

const LandCard: React.FC<LandCardProps> = ({ land }) => {
  const {
    image,
    status,
    price,
    title,
    location,
    size,
    document,
    slashedprice,
  } = land;
  const openWhatsApp = () => {
    const phoneNumber = "2347036869758";
    const message = encodeURIComponent(
      "Hello! I'm interested in your land listings."
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <Card extra="flex flex-col w-full h-full p-4 bg-cover">
      <div className="h-40 w-full overflow-hidden rounded-xl">
        <div className="relative flex h-full w-full justify-center overflow-hidden rounded-xl bg-center duration-150 hover:scale-105">
          {image ? (
            // If image exists, show it as background
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ) : (
            // If NO image, show dummy icon
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
              <HiOutlineHome className="h-16 w-16 opacity-80" />
            </div>
          )}

          {/* Status Tag */}
          <div className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {status}
          </div>

          {/* Price Tag */}
          <div className="absolute bottom-3 right-3 flex flex-col items-end rounded-md bg-white/95 px-3 py-2 shadow-sm">
            {/* If slashedPrice exists, show both */}
            {slashedprice ? (
              <>
                <span className="text-xs font-semibold text-red-500 line-through opacity-80">
                  {slashedprice}
                </span>
                <span className="text-sm font-bold text-green-700">
                  {price}
                </span>
              </>
            ) : (
              // Otherwise just show normal price
              <span className="text-sm font-bold text-green-700">{price}</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-start">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-600">📍 {location}</p>
        <p className="mt-1 text-sm text-gray-500">
          Size: {size} · Title: {document}
        </p>
      </div>
      <div className="my-3 h-[1px] w-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={openWhatsApp}
          className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition-all hover:bg-green-50"
        >
          Contact Agent
        </button>
      </div>
    </Card>
  );
};

export default LandCard;
