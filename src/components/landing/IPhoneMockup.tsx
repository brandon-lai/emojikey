import React from "react";

interface IPhoneMockupProps {
  className?: string;
  screenContent?: React.ReactNode;
}

const IPhoneMockup = ({
  className = "",
  screenContent = (
    <img
      src="https://dummyimage.com/375x812/f5f5f5/666666&text=Keyboard+Demo"
      alt="Keyboard Demo"
      className="w-full h-full object-cover rounded-[2rem]"
    />
  ),
}: IPhoneMockupProps) => {
  return (
    <div
      className={`relative w-[375px] h-[812px] bg-white rounded-[3rem] ${className} shadow-[16px_16px_40px_0px_rgba(0,0,0,0.1),-16px_-16px_40px_0px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[8px_8px_20px_0px_rgba(0,0,0,0.1),-8px_-8px_20px_0px_rgba(255,255,255,0.8)]`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />

      {/* Screen Content */}
      <div className="absolute top-1 left-1 right-1 bottom-1 bg-gray-50 rounded-[2.75rem] overflow-hidden">
        {screenContent}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-10" />

      {/* Volume Buttons */}
      <div className="absolute left-[-2px] top-32 w-2 h-6 bg-gray-300 rounded-r-md" />
      <div className="absolute left-[-2px] top-44 w-2 h-6 bg-gray-300 rounded-r-md" />

      {/* Power Button */}
      <div className="absolute right-[-2px] top-40 w-2 h-8 bg-gray-300 rounded-l-md" />

      {/* Neumorphic inner shadow effect */}
      <div className="absolute inset-0 rounded-[3rem] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] pointer-events-none" />
    </div>
  );
};

export default IPhoneMockup;
