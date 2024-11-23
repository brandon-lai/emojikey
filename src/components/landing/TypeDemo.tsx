import React, { useState, useEffect } from "react";
import { SmilePlus } from "lucide-react";

interface TypeDemoProps {
  className?: string;
  width?: number;
  height?: number;
}

const TypeDemo = ({
  className = "",
  width = 320,
  height = 200,
}: TypeDemoProps) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(["😊", "👍", "❤️"]);
  const [isTyping, setIsTyping] = useState(true);

  const demoText = "Just had an amazing day! ";
  const positiveEmojis = ["😊", "🎉", "✨", "❤️", "🌟"];

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (currentIndex < demoText.length) {
          setText(demoText.slice(0, currentIndex + 1));
          currentIndex++;

          // Update emoji suggestions based on text length
          if (currentIndex > demoText.length / 2) {
            setSuggestions(positiveEmojis);
          }
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setText("");
            setSuggestions(["😊", "👍", "❤️"]);
            setIsTyping(true);
            currentIndex = 0;
          }, 2000);
        }
      }, 100);
    }

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <div
      className={`${className} bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)]`}
      style={{ width, height }}
    >
      {/* Input Area */}
      <div className="relative w-full h-24 mb-4 bg-gray-50 rounded-lg p-3 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">
        <div className="text-gray-700">{text}</div>
        <div className="absolute bottom-2 right-2">
          <div className="w-6 h-6 animate-pulse bg-gray-300 rounded-full opacity-50" />
        </div>
      </div>

      {/* Emoji Suggestions */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.9)]">
          <SmilePlus className="w-4 h-4 text-gray-500" />
        </div>
        <div className="flex gap-2 overflow-x-auto py-2">
          {suggestions.map((emoji, index) => (
            <button
              key={index}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-lg text-xl transition-all duration-300 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.9)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.05),-1px_-1px_3px_rgba(255,255,255,0.9)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.9)]"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeDemo;
