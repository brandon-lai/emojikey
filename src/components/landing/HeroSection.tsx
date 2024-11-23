import React from "react";
import { useNavigate } from "react-router-dom";
import IPhoneMockup from "./IPhoneMockup";
import TypeDemo from "./TypeDemo";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = "" }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section
      className={`relative w-full min-h-[600px] bg-white overflow-hidden ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Smart Emoji Suggestions for Your Messages
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Express yourself better with AI-powered emoji suggestions that
              understand the sentiment of your messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <TypeDemo className="mx-auto lg:mx-0" width={320} height={200} />
              <Button
                onClick={() => navigate("/demo")}
                className="text-lg py-6 px-8 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white shadow-lg"
              >
                Try it now
              </Button>
            </div>
          </div>

          {/* Right content - iPhone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[375px] animate-float">
              <IPhoneMockup
                screenContent={
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4">
                    <TypeDemo width={343} height={400} />
                  </div>
                }
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-pink-100/20 to-orange-100/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Neumorphic bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Add floating animation keyframes to tailwind.config.js */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
