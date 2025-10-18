import React from "react";
import Card from "components/card";
export interface Land {
  id: number;
  image: string;
  status: string;
  price: string;
  title: string;
  location: string;
  size: string;
  document: string;
}

interface LandCardProps {
  land: Land;
}

const LandCard: React.FC<LandCardProps> = ({ land }) => {
  const { image, status, price, title, location, size, document } = land;

  return (
    <Card extra="flex flex-col w-full h-full p-4 bg-cover">
      {/* Land Image */}
      <div className="h-40 w-full overflow-hidden rounded-xl">
        <div
          className="relative flex h-full w-full justify-center  bg-cover bg-center duration-150 hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {status}
          </div>
          <div className="absolute bottom-3 right-3 rounded-md bg-white/90 px-3 py-1 text-sm font-bold text-green-700 shadow-sm">
            {price}
          </div>
        </div>
      </div>

      {/* Land Info */}
      <div className="mt-4 flex flex-col items-start">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-600">📍 {location}</p>
        <p className="mt-1 text-sm text-gray-500">
          Size: {size} · Title: {document}
        </p>
      </div>

      {/* Divider */}
      <div className="my-3 h-[1px] w-full bg-gray-200 dark:bg-gray-700"></div>

      {/* Action Buttons */}
      <div className="flex w-full items-center justify-between">
        <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-700">
          View Details
        </button>
        <button className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition-all hover:bg-green-50">
          Contact Agent
        </button>
      </div>
    </Card>
  );
};

export default LandCard;
