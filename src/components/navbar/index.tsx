import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-3xl p-2 px-5  backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px] flex items-center justify-center gap-4">
        <span
          className="flex cursor-pointer text-xl text-gray-900 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-6 w-6" />
        </span>
        <p className="shrink text-[27px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-poppins font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
