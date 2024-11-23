import React from "react";
import { Button } from "@/components/ui/button";
import { AppleIcon } from "lucide-react";

interface AppStoreButtonProps {
  className?: string;
  href?: string;
}

const AppStoreButton = ({
  className = "",
  href = "https://apps.apple.com",
}: AppStoreButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="lg"
      className={
        `${className} relative group rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)] transition-all duration-300` +
        " py-4 bg-gradient-to-r from-gray-50 to-white"
      }
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-4 text-gray-800"
      >
        <AppleIcon className="w-5 h-5" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-xs">Download on the</span>
          <span className="text-lg font-semibold">App Store</span>
        </div>
      </a>
    </Button>
  );
};

export default AppStoreButton;
