export type ZozoExpression =
  | "happy"
  | "excited"
  | "curious"
  | "celebrate"
  | "sad"
  | "sleepy"
  | "neutral";

export const EXPRESSION_FACE: Record<ZozoExpression, string> = {
  happy: "😊",
  excited: "🤩",
  curious: "🤔",
  celebrate: "🎉",
  sad: "😢",
  sleepy: "😴",
  neutral: "🙂",
};

export const EXPRESSION_LABEL: Record<ZozoExpression, string> = {
  happy: "Happy",
  excited: "Excited",
  curious: "Curious",
  celebrate: "Celebrating",
  sad: "A little sad",
  sleepy: "Sleepy",
  neutral: "Ready",
};

/** Commands that will later be sent to the physical ESP32-S3 Zozo. */
export type ZozoCommandType =
  | "START_LESSON"
  | "SHOW_ALPHABET"
  | "SHOW_FRUIT"
  | "SHOW_VEGETABLE"
  | "SHOW_NUMBER"
  | "START_ADDITION"
  | "START_SUBTRACTION"
  | "START_GAME"
  | "CHANGE_EXPRESSION"
  | "MOVE_HEAD"
  | "DISPLAY_CONTENT"
  | "REACT_CORRECT"
  | "REACT_WRONG";

export interface ZozoCommand {
  type: ZozoCommandType;
  payload?: Record<string, unknown>;
  at: number;
}

export type TopicKey =
  | "alphabets"
  | "numbers"
  | "fruits"
  | "vegetables"
  | "math"
  | "manners"
  | "games";

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  topic: TopicKey;
  requirement: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "alphabet-explorer", icon: "🏆", title: "Alphabet Explorer", topic: "alphabets", requirement: 40 },
  { id: "fruit-master", icon: "🍎", title: "Fruit Master", topic: "fruits", requirement: 60 },
  { id: "number-star", icon: "🔢", title: "Number Star", topic: "numbers", requirement: 50 },
  { id: "math-beginner", icon: "➕", title: "Math Beginner", topic: "math", requirement: 30 },
  { id: "kindness-champion", icon: "❤️", title: "Kindness Champion", topic: "manners", requirement: 50 },
  { id: "veggie-friend", icon: "🥕", title: "Veggie Friend", topic: "vegetables", requirement: 60 },
  { id: "game-explorer", icon: "🎮", title: "Game Explorer", topic: "games", requirement: 20 },
];

export const TOPIC_LABEL: Record<TopicKey, string> = {
  alphabets: "Alphabets",
  numbers: "Numbers",
  fruits: "Fruits",
  vegetables: "Vegetables",
  math: "Math",
  manners: "Manners",
  games: "Games",
};
