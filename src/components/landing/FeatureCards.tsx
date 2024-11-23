import React from "react";
import { Brain, Sparkles, Keyboard } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface FeatureCardsProps {
  className?: string;
}

const FeatureCards = ({ className = "" }: FeatureCardsProps) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Sentiment Analysis",
      description:
        "Advanced AI analyzes your message tone to suggest the perfect emojis that match your emotions.",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "Smart Suggestions",
      description:
        "Get contextually relevant emoji suggestions that enhance your messages in real-time.",
      gradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Keyboard className="w-6 h-6 text-green-600" />,
      title: "Seamless Integration",
      description:
        "Integrates smoothly with your iOS keyboard for a natural and intuitive typing experience.",
      gradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${className}`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Features that Make a Difference
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how our smart keyboard enhances your messaging experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
