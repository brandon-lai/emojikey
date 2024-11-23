import React from "react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  gradient?: string;
}

const FeatureCard = ({
  className = "",
  icon = <div className="w-8 h-8 bg-gray-200 rounded-lg" />,
  title = "Feature Title",
  description = "This is a sample feature description that highlights the capabilities of our keyboard extension.",
  gradient = "from-blue-50 to-indigo-50",
}: FeatureCardProps) => {
  return (
    <Card className={`relative overflow-hidden bg-white ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}
      />
      <div className="relative p-6 h-full flex flex-col shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.05),-2px_-2px_5px_0px_rgba(255,255,255,0.95)] rounded-xl">
        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.9)]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
