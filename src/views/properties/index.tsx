import LandCard, { Land } from "./components/Banner";
import landsData from "properties.json";

const Properties = () => {
  const lands: Land[] = landsData;
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        {lands.map((land) => (
          <div className="col-span-6 lg:!mb-0">
            <LandCard key={land.id} land={land} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
