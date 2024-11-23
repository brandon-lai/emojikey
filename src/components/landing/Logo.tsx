import React from "react";
import { Keyboard } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div
      className={`flex items-center gap-2 ${className} bg-white rounded-lg p-2 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.05),-2px_-2px_5px_0px_rgba(255,255,255,0.95)]`}
    >
      <Keyboard className="w-6 h-6 text-gray-700" />
      <span className="font-semibold text-xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
        EmojiKey
      </span>
    </div>
  );
};

export default Logo;
