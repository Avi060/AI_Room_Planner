"use client";

import React from "react";
import Container from "@/components/container";
import LogoContainer from "@/components/logo-container";
import NavMenu from "@/components/nav-menu";
import Link from "next/link";
import GenerateButton from "@/components/generate-button";
import { UserButton } from "@clerk/nextjs";
import { ToggleContainer } from "./toggle-container";


const Header = ({ isAuthenticated }: {isAuthenticated?: Boolean;}) => {
  return (
    <header className="p-4 min-md:px-6 min-md:py-12 border-b border-input min-md:border-none sticky top-2 z-10 backdrop-blur min-md:backdrop-blur-none">
      <Container>
        <div className="flex items-center justify-between border border-transparent min-mid:border-white/15 p-2.5 rounded-xl max-w-4xl mx-auto min-md:backdrop-blur-md">
          <LogoContainer />
          <div className="hidden min-md:block">
            <NavMenu />
          </div>

          <div className="flex gap-4 items-center">
            <Link href={isAuthenticated ? "/dashboard" : "/sign-in"}>
              <GenerateButton label="Generate" />
            </Link>
            <UserButton afterSignOutUrl="/" />
            <ToggleContainer/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
