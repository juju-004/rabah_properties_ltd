import { useState } from "react";
import LandCard, { Land } from "./components/Banner";
import landsData from "properties.json";

const tabs = ["All", "Ogun", "Lagos", "Abia"];

const Properties = () => {
  const lands: Land[] = landsData;
  const [activeTab, setActiveTab] = useState("All");

  const filteredLands =
    activeTab === "All"
      ? lands
      : lands.filter((land) => land.state === activeTab);
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 flex max-w-lg items-center justify-center gap-2 overflow-x-auto rounded-full bg-white p-2 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all
            ${
              activeTab === tab
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-ful mt-1 flex h-fit flex-col gap-5 md:grid md:grid-cols-12">
        {filteredLands.map((land) => (
          <div className="col-span-6 lg:!mb-0">
            <LandCard key={land.id} land={land} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
