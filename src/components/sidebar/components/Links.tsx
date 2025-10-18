/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  const location = useLocation();
  const { routes } = props;

  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => (
      <Link key={index} to={route.path}>
        <div className="relative mb-3 flex hover:cursor-pointer">
          <li
            className="my-[3px] flex cursor-pointer items-center px-8"
            key={index}
          >
            <span
              className={`${
                activeRoute(route.path)
                  ? "font-bold text-green-500 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.icon ? route.icon : <DashIcon />}{" "}
            </span>
            <p
              className={`leading-1 ml-4 flex ${
                activeRoute(route.path)
                  ? "font-bold text-gray-600 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.name}
            </p>
          </li>
          {activeRoute(route.path) && (
            <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-green-500 dark:bg-green-400" />
          )}
        </div>
      </Link>
    ));
  };

  return (
    <div className="flex flex-col">
      {/* Main app links */}
      {createLinks(routes)}

      {/* Divider */}
      <div className="my-4 h-[1px] w-full bg-gray-200 dark:bg-gray-700" />

      {/* More from Us */}
      <div className="px-8">
        <h4 className="mb-2 text-sm font-semibold uppercase text-gray-500">
          More from Us
        </h4>
        <a
          href="https://rabah-tech.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
        >
          🌐 Visit Rabahtech
        </a>
      </div>
    </div>
  );
};

export default SidebarLinks;
