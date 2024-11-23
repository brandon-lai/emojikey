import React from "react";
import Logo from "./Logo";
import AppStoreButton from "./AppStoreButton";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  className?: string;
  onFeaturesClick?: () => void;
}

const Navbar = ({
  className = "",
  onFeaturesClick = () => {},
}: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={onFeaturesClick}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Features
            </Button>

            <AppStoreButton />
          </div>
        </div>
      </div>

      {/* Neumorphic bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
    </nav>
  );
};

export default Navbar;
