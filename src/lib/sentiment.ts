// AFINN-111 Lexicon
export const afinn: { [key: string]: number } = {
  // Positive sentiments
  good: 3,
  great: 3,
  awesome: 4,
  amazing: 4,
  love: 4,
  excellent: 3,
  happy: 3,
  wonderful: 4,
  fantastic: 4,
  glad: 3,
  excited: 3,
  joy: 4,
  delighted: 4,
  perfect: 3,
  blessed: 3,
  beautiful: 3,
  brilliant: 3,
  thrilled: 4,
  smile: 2,
  laugh: 2,
  fun: 2,
  nice: 2,
  pleasant: 2,
  proud: 2,
  peaceful: 2,
  calm: 2,
  relaxed: 2,
  content: 2,
  satisfied: 2,
  win: 3,
  victory: 3,
  success: 3,
  celebrate: 3,
  congratulations: 3,

  // Negative sentiments
  bad: -3,
  terrible: -4,
  horrible: -4,
  awful: -3,
  hate: -4,
  sad: -3,
  angry: -3,
  upset: -2,
  disappointed: -2,
  frustrating: -3,
  frustrated: -3,
  annoyed: -2,
  annoying: -2,
  pain: -3,
  painful: -3,
  hurt: -3,
  fail: -3,
  failure: -3,
  lose: -3,
  lost: -3,
  sorry: -1,
  regret: -2,
  worried: -2,
  worry: -2,
  anxious: -2,
  anxiety: -2,
  stress: -2,
  stressed: -2,
  depressed: -4,
  depression: -4,
  miserable: -3,
  alone: -2,
  lonely: -2,
  tired: -1,
  exhausted: -2,
  sick: -2,
  ill: -2,
  death: -4,
  die: -4,
  dead: -4,
  crying: -2,
  cry: -2,
  tears: -2,

  // Surprise/shock sentiments
  wow: 2,
  omg: 2,
  surprised: 2,
  shocking: -2,
  shocked: -2,
  unexpected: 0,
  unbelievable: 1,
  incredible: 3,
  amazed: 3,
  astonished: 2,
  startled: 0,
  stunned: 0,

  // Intensifiers
  very: 1,
  really: 1,
  extremely: 2,
  absolutely: 2,
  completely: 1,
  totally: 1,
  utterly: 1,
  so: 1,
  too: 1,
  more: 1,
  most: 1,
  super: 2,
  extra: 1,
};

export type SentimentResult = {
  score: number;
  emotion: "happy" | "sad" | "angry" | "surprised" | "neutral";
  intensity: "low" | "medium" | "high";
};

export function analyzeSentiment(text: string): SentimentResult {
  const words = text.toLowerCase().match(/\w+/g) || [];
  let score = 0;
  let wordCount = 0;
  let lastIntensifier = 0;
  let hasEmotionalWord = false;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sentiment = afinn[word] || 0;

    if (sentiment !== 0) {
      // Apply intensifier from previous word if exists
      score += sentiment * (1 + lastIntensifier);
      lastIntensifier = 0;
      wordCount++;
      if (Math.abs(sentiment) >= 3) {
        hasEmotionalWord = true;
      }
    } else if (afinn[word] === undefined && lastIntensifier > 0) {
      // Reset intensifier if not used
      lastIntensifier = 0;
    } else if (word in afinn && afinn[word] === 1) {
      // Word is an intensifier
      lastIntensifier = afinn[word];
    }
  }

  // Normalize score based on word count
  const normalizedScore = wordCount > 0 ? score / wordCount : 0;

  // Determine emotion and intensity
  const intensity = getIntensity(Math.abs(normalizedScore), hasEmotionalWord);
  const emotion = getEmotion(normalizedScore);

  return {
    score: normalizedScore,
    emotion,
    intensity,
  };
}

function getIntensity(
  score: number,
  hasEmotionalWord: boolean,
): "low" | "medium" | "high" {
  // Adjusted thresholds to favor medium intensity
  if (score >= 3.5) return "high";
  if (score <= 1) return "low";
  // Default to medium for most cases
  return "medium";
}

function getEmotion(
  score: number,
): "happy" | "sad" | "angry" | "surprised" | "neutral" {
  if (score > 2) return "happy";
  if (score > 0) return "surprised";
  if (score < -2) return "angry";
  if (score < 0) return "sad";
  return "neutral";
}
