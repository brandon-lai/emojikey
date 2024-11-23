import React, { useState, useEffect } from "react";
import { SmilePlus, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { analyzeSentiment } from "@/lib/sentiment";

const InteractiveDemo = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Refined emotion-based emoji mappings with intensity variations
  const emojiMappings = {
    happy: {
      low: ["🙂", "☺️", "👍", "😌"], // Subtle happiness
      medium: ["😊", "😄", "🙌", "✨"], // Clear happiness - most common
      high: ["🥰", "🤗", "🌟", "⭐", "🎉"], // Intense joy - requires strong sentiment
    },
    sad: {
      low: ["😕", "🙁", "💭", "😐"], // Mild sadness
      medium: ["😔", "😢", "💔", "😞"], // Clear sadness - most common
      high: ["😭", "🥺", "💔", "😪", "💧"], // Intense sadness - requires strong sentiment
    },
    angry: {
      low: ["😒", "😑", "😤", "😫"], // Mild annoyance
      medium: ["😠", "😡", "💢", "😤"], // Clear anger - most common
      high: ["🤬", "💢", "💥", "😡", "👿"], // Intense anger - requires strong sentiment
    },
    surprised: {
      low: ["😯", "🤔", "👀", "😳"], // Mild surprise
      medium: ["😮", "😲", "✨", "❗"], // Clear surprise - most common
      high: ["😱", "🤯", "⚡", "❗", "💫"], // Intense surprise - requires strong sentiment
    },
    neutral: ["😊", "👍", "✨", "💫", "🌟"], // Default set - keeping it positive
  };

  useEffect(() => {
    // Analyze sentiment and update emoji suggestions
    if (text.trim() === "") {
      setSuggestions(emojiMappings.neutral);
    } else {
      const { emotion, intensity } = analyzeSentiment(text);

      if (emotion === "neutral") {
        setSuggestions(emojiMappings.neutral);
      } else {
        setSuggestions(emojiMappings[emotion][intensity]);
      }
    }
  }, [text]);

  const handleEmojiClick = (emoji: string) => {
    // Add space before emoji if text is not empty and doesn't end with a space
    const needsSpace = text.length > 0 && !text.endsWith(" ");
    setText(text + (needsSpace ? " " : "") + emoji);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Try EmojiKey
        </h1>

        <div className="w-full max-w-xl mx-auto bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)]">
          {/* Input Area */}
          <div className="relative w-full h-32 mb-4 bg-gray-50 rounded-lg p-3 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing to see emotion-based emoji suggestions..."
              className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-gray-700"
            />
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
                  onClick={() => handleEmojiClick(emoji)}
                  className="flex items-center justify-center w-8 h-8 bg-white rounded-lg text-xl transition-all duration-300 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.9)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.05),-1px_-1px_3px_rgba(255,255,255,0.9)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.9)]"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
