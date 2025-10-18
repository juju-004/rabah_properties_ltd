import React from "react";

// Admin Imports
// import Profile from "views/admin/profile";
// Icon Imports
import { FaHome, FaUserFriends } from "react-icons/fa";
import Properties from "views/properties";

const routes = [
  {
    name: "Properties",
    path: "/",
    icon: <FaHome className="h-5 w-5" />,
    component: <Properties />,
  },
  {
    name: "About Us",
    path: "/about",
    icon: <FaUserFriends className="h-5 w-5" />,
    component: <Properties />,
  },
];
export default routes;
