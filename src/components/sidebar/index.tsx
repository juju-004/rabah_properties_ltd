/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes";
import { BsXCircleFill } from "react-icons/bs";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col gap-8 rounded-r-3xl bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <BsXCircleFill size={25} className="text-gray-800/70 " />
      </span>

      <div className={`mx-[56px] mt-14 flex items-center`}>
        <div className="ml-1 mt-1 font-poppins text-[26px] font-bold">
          <span className="logo flex flex-col text-xl">
            {/* <span className="text-blue-600 ">{"<"}</span> */}
            <span className="text-c3/80">rabah</span>
            <span className="text-green-600 ">properties LTD.</span>
            {/* <span className="text-blue-600 ">properties LTD.{"/>"}</span> */}
          </span>
        </div>
      </div>
      {/* Nav item */}

      <ul className=" pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
};

export default Sidebar;
