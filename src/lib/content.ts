export interface LearnItem {
  name: string;
  emoji: string;
  pronunciation: string;
  fact: string;
}

export const FRUITS: LearnItem[] = [
  { name: "Apple", emoji: "🍎", pronunciation: "AP-ul", fact: "An apple is a crunchy red fruit." },
  { name: "Banana", emoji: "🍌", pronunciation: "buh-NAH-na", fact: "A banana is soft, sweet and yellow." },
  { name: "Mango", emoji: "🥭", pronunciation: "MANG-go", fact: "Mango is called the king of fruits." },
  { name: "Orange", emoji: "🍊", pronunciation: "OR-inj", fact: "Oranges are juicy and full of vitamin C." },
  { name: "Grapes", emoji: "🍇", pronunciation: "GRAYPS", fact: "Grapes grow together in bunches." },
  { name: "Watermelon", emoji: "🍉", pronunciation: "WAH-ter-meh-lon", fact: "Watermelon is mostly water inside." },
  { name: "Strawberry", emoji: "🍓", pronunciation: "STRAW-beh-ree", fact: "Strawberries have tiny seeds outside." },
  { name: "Pineapple", emoji: "🍍", pronunciation: "PINE-ap-ul", fact: "A pineapple wears a spiky green crown." },
];

export const VEGETABLES: LearnItem[] = [
  { name: "Carrot", emoji: "🥕", pronunciation: "KA-rut", fact: "Carrots are good for your eyes." },
  { name: "Potato", emoji: "🥔", pronunciation: "puh-TAY-toh", fact: "Potatoes grow under the ground." },
  { name: "Tomato", emoji: "🍅", pronunciation: "tuh-MAH-toh", fact: "Tomatoes are red and juicy." },
  { name: "Brinjal", emoji: "🍆", pronunciation: "BRIN-jal", fact: "Brinjal is also called eggplant." },
  { name: "Cabbage", emoji: "🥬", pronunciation: "KA-bij", fact: "Cabbage has many green leaves." },
  { name: "Spinach", emoji: "🥬", pronunciation: "SPIN-ich", fact: "Spinach makes your body strong." },
  { name: "Peas", emoji: "🫛", pronunciation: "PEEZ", fact: "Peas hide inside a green pod." },
  { name: "Corn", emoji: "🌽", pronunciation: "KORN", fact: "Corn has many yellow kernels." },
];

export interface AlphabetItem {
  letter: string;
  word: string;
  emoji: string;
}

export const ALPHABET: AlphabetItem[] = [
  { letter: "A", word: "Apple", emoji: "🍎" },
  { letter: "B", word: "Banana", emoji: "🍌" },
  { letter: "C", word: "Cat", emoji: "🐱" },
  { letter: "D", word: "Dog", emoji: "🐶" },
  { letter: "E", word: "Elephant", emoji: "🐘" },
  { letter: "F", word: "Fish", emoji: "🐟" },
  { letter: "G", word: "Grapes", emoji: "🍇" },
  { letter: "H", word: "House", emoji: "🏠" },
  { letter: "I", word: "Ice cream", emoji: "🍦" },
  { letter: "J", word: "Jug", emoji: "🫙" },
  { letter: "K", word: "Kite", emoji: "🪁" },
  { letter: "L", word: "Lion", emoji: "🦁" },
  { letter: "M", word: "Mango", emoji: "🥭" },
  { letter: "N", word: "Nest", emoji: "🪹" },
  { letter: "O", word: "Orange", emoji: "🍊" },
  { letter: "P", word: "Penguin", emoji: "🐧" },
  { letter: "Q", word: "Queen", emoji: "👑" },
  { letter: "R", word: "Rainbow", emoji: "🌈" },
  { letter: "S", word: "Sun", emoji: "☀️" },
  { letter: "T", word: "Tree", emoji: "🌳" },
  { letter: "U", word: "Umbrella", emoji: "☂️" },
  { letter: "V", word: "Van", emoji: "🚐" },
  { letter: "W", word: "Watermelon", emoji: "🍉" },
  { letter: "X", word: "Xylophone", emoji: "🎼" },
  { letter: "Y", word: "Yacht", emoji: "⛵" },
  { letter: "Z", word: "Zebra", emoji: "🦓" },
];

export const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen",
  "Nineteen", "Twenty",
];

export function numberWord(n: number) {
  return NUMBER_WORDS[n] ?? String(n);
}

export interface MannerLesson {
  id: string;
  title: string;
  icon: string;
  story: string;
  teaches: string[];
  question: string;
  options: string[];
  answer: string;
  praise: string;
}

export const MANNERS: MannerLesson[] = [
  {
    id: "thank-you",
    title: "Saying Thank You",
    icon: "🙏",
    story: "Zozo gives you a shiny sticker as a gift.",
    teaches: [
      "When someone gives you something",
      "When someone helps you",
      "When someone gives you a gift",
      "When someone is kind to you",
    ],
    question: "Zozo gives you a gift. What should you say?",
    options: ["Go away", "Thank you", "Give me more"],
    answer: "Thank you",
    praise: "Thank you! 😊 That makes friends smile.",
  },
  {
    id: "sorry",
    title: "Saying Sorry",
    icon: "💙",
    story: "You are running fast and you bump into your friend.",
    teaches: [
      "When you hurt someone by accident",
      "When you break something",
      "When you make a mistake",
      "When you do something wrong",
    ],
    question: "You bumped into your friend. What should you say?",
    options: ["Move!", "Sorry", "Nothing"],
    answer: "Sorry",
    praise: "Saying sorry shows a big heart. 💙",
  },
  {
    id: "please",
    title: "Saying Please",
    icon: "✨",
    story: "You feel thirsty and want some water.",
    teaches: ["Ask kindly", "Use please when you want something", "Wait for your turn"],
    question: "How should you ask for water?",
    options: ["Give me water.", "Can I please have some water?", "Water! Now!"],
    answer: "Can I please have some water?",
    praise: "Please makes every question kinder. ✨",
  },
  {
    id: "sharing",
    title: "Sharing",
    icon: "🧸",
    story: "You have two toy cars and your friend has none.",
    teaches: ["Share toys", "Take turns", "Share food kindly", "Be kind to friends"],
    question: "What is the kind thing to do?",
    options: ["Hide both cars", "Share one car with your friend", "Play alone"],
    answer: "Share one car with your friend",
    praise: "Sharing makes playtime twice as fun! 🧸",
  },
  {
    id: "greeting",
    title: "Greeting People",
    icon: "👋",
    story: "You reach school early in the morning and see your teacher.",
    teaches: ["Hello", "Good morning", "Good afternoon", "Good evening", "Goodbye"],
    question: "It is morning. How do you greet your teacher?",
    options: ["Good night", "Good morning!", "Say nothing"],
    answer: "Good morning!",
    praise: "A happy greeting starts a happy day. 👋",
  },
  {
    id: "listening",
    title: "Listening",
    icon: "👂",
    story: "Zozo is telling a story to the whole class.",
    teaches: ["Listen when someone speaks", "Do not interrupt", "Pay attention"],
    question: "Zozo is speaking. What do you do?",
    options: ["Talk loudly", "Listen quietly and wait my turn", "Run around"],
    answer: "Listen quietly and wait my turn",
    praise: "Great listening ears! 👂",
  },
  {
    id: "helping",
    title: "Helping Others",
    icon: "🤝",
    story: "Your friend dropped all their crayons on the floor.",
    teaches: ["Help your parents", "Help your friends", "Be kind to everyone"],
    question: "What should you do?",
    options: ["Laugh", "Help pick up the crayons", "Walk away"],
    answer: "Help pick up the crayons",
    praise: "Helping hands are happy hands. 🤝",
  },
];

export const PRAISE = [
  "Amazing! Zozo is proud of you! 🎉",
  "Wonderful! You did it! 🌟",
  "Super work! Zozo is dancing! 🎉",
];

export const ENCOURAGE = [
  "Almost! Try again! 😊",
  "Good try! Let's look once more. 😊",
  "So close! Zozo believes in you. 💙",
];

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
