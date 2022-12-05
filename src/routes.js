import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdPerson, MdHome, MdLock, MdCompare } from "react-icons/md";

// Admin Imports
import Default from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/nfg-marketplace",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Compare",
    layout: "/admin",
    path: "/view-prices",
    icon: <Icon as={MdCompare} width="20px" height="20px" color="inherit" />,
    component: Default,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
