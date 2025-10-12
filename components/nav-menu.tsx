"use client";

import { NavRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavMenuProps {
  isMobile?: boolean;
}
const NavMenu = ({ isMobile }: NavMenuProps) => {
  const { isSignedIn } = useAuth();
  const pathName = usePathname();
  const filteredRoutes = NavRoutes.filter(
    (route) => !route.protected || isSignedIn
  );

  return (
    <nav
      className={cn(
        "flex gap-8 m-2",
        isMobile && "flex-col items-start items gap-10 mb-10"
      )}
    >
      {filteredRoutes.map((route) => {
        const isActive =
          route.link === "/"
            ? pathName === "/"
            : pathName.startsWith(route.link);
        return (
          <Link
            key={route.link}
            href={route.link}
            className={cn(
              "text-white/70 hover:text-white transition",
              isActive && "text-white"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
