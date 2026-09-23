# Zozo's Learning Den

Build a Website for “Zozo” – Interactive AI Learning Companion for Kids

Create a modern, aesthetic, child-friendly educational web platform called “Zozo”, designed to work together with a physical AI/robotic companion named Zozo.

The purpose of the platform is to make learning interactive, playful, visual, and screen-conscious, where the website provides learning content and games while Zozo acts as the child's physical companion.

1. Overall Design

Create a premium but playful UI.

Color palette

Use:

Dark navy blue as the primary background

White for main text

Black/deep navy for secondary sections

Soft blue accents

Subtle gradients

Small amounts of bright accent colors for children's activities

The website should feel:

Modern

Aesthetic

Minimal

Friendly

Playful

Safe

Premium

Not overly childish

Avoid excessive rainbow colors or a cluttered cartoon-style interface.

Use rounded cards, soft shadows, subtle glowing effects, smooth animations, and clean typography.

2. Landing Page

Create a hero section introducing Zozo.

Headline:

“Meet Zozo — Learn. Play. Grow.”

Subheading:

“A playful learning companion that helps kids explore, learn and build good habits through interactive experiences.”

Include:

A visual representation/place for the Zozo robot

“Start Learning” button

“Explore Games” button

Small feature highlights:

Interactive Learning

Fun Games

Good Manners

Screen Sharing

Learning with Zozo

Add subtle animated elements around Zozo.

3. Main Dashboard

After clicking Start Learning, show a dashboard with large interactive cards.

Sections:

📚 Learning

Learn basic concepts through interactive lessons.

🎮 Games

Small educational games designed for short, fun play sessions.

🌱 Good Manners

Teach children everyday manners and social behaviour.

🖥️ Screen Share

Allow the parent/teacher to share educational content with Zozo.

⭐ My Progress

Show learning progress, completed activities, badges and achievements.

4. LEARNING SECTION

Create a dedicated “Learn with Zozo” section.

Display learning topics as attractive cards.

A. Fruits 🍎

Teach:

Apple

Banana

Mango

Orange

Grapes

Watermelon

Strawberry

Pineapple

For each fruit:

Large visual

Fruit name

Pronunciation

Simple fact

Optional sound/voice

Interactive quiz

Example:

Apple 🍎

“Apple”

“An apple is a fruit.”

Question:

“Which one is an apple?”

Show 3–4 visual choices.

Zozo should ideally react when the child selects the correct answer.

B. Vegetables 🥕

Teach:

Carrot

Potato

Tomato

Brinjal

Cabbage

Spinach

Peas

Corn

Use the same interactive learning format.

C. Alphabets 🔤

Create an interactive A–Z learning experience.

Example:

A

A is for 🍎 Apple

B

B is for 🍌 Banana

Each letter should have:

Large animated letter

Example object

Image

Pronunciation

Simple interaction

Add a “Next” and “Previous” button.

Allow Zozo to display/react to the selected alphabet.

5. NUMBERS 🔢

Create a basic numbers section.

Teach:

1–10 initially.

Later allow expansion to:

1–20
1–50
1–100

For each number:

Large number

Visual objects representing the number

Audio pronunciation

Small interaction

Example:

3

🍎 🍎 🍎

“Three apples!”

6. BASIC MATHEMATICS ➕

Create a Math with Zozo section.

Start with:

Addition

Example:

🍎 🍎 + 🍎 = ?

Answers:

2
3
4

When the child answers correctly:

“Yay! Correct! 🎉”

Zozo should show a happy/excited expression.

Subtraction

Example:

🍎 🍎 🍎 − 🍎 = ?

Answers:

1
2
3

Start with very simple numbers and gradually increase difficulty.

Create levels:

Level 1: Numbers 1–5
Level 2: Numbers 1–10
Level 3: Simple addition/subtraction

7. GOOD MANNERS SECTION ❤️

Create a dedicated section called:

“Learn Good Manners with Zozo”

Teach children everyday social behaviours.

Topics should include:

Saying Thank You

Teach:

“When should I say Thank You?”

Examples:

Someone gives you something

Someone helps you

Someone gives you a gift

Someone does something kind for you

Example interaction:

Zozo gives the child something.

Question:

“What should you say?”

Options:

“Go away”
“Thank you”
“Give me more”

Correct answer:

“Thank you! 😊”

Saying Sorry

Teach when to say sorry:

When you hurt someone accidentally

When you break something

When you make a mistake

When you do something wrong

Example:

“You accidentally bumped into your friend. What should you say?”

Options:

“Move!”
“Sorry”
“Nothing”

Correct answer:

“Sorry.”

Please

Teach children to use “Please” when asking for something.

Example:

Instead of:

“Give me water.”

Teach:

“Can I please have some water?”

Sharing

Teach:

Sharing toys

Taking turns

Sharing food appropriately

Being kind to friends

Greeting People

Teach:

Hello

Good morning

Good afternoon

Good evening

Goodbye

Listening

Teach:

Listen when someone is speaking

Don't interrupt

Pay attention

Helping Others

Teach:

Helping parents

Helping friends

Being kind to others

Use short stories, animations and interactive questions rather than long text.

8. GAMES SECTION 🎮

Create a dedicated “Play with Zozo” section.

The games should be:

Very simple

Short

Fun

Kid-friendly

Educational where possible

Easy to control

Visually attractive

Include at least 4 games.

Game 1 – XO / Tic-Tac-Toe

Create a simple XO game.

Modes:

Child vs Zozo

Two-player

Use simple animations when someone wins.

Zozo can react based on the result.

Win → Happy/excited expression
Lose → Sad/funny expression
Draw → Confused/funny expression

Game 2 – Mini Snake 🐍

Create a simple Snake game.

The snake moves around the screen and eats food.

Every time it eats food:

Snake grows bigger.

Display:

Score: 10
Length: 5

Keep gameplay simple and suitable for kids.

Add increasing difficulty gradually.

Game 3 – Catch the Fruit 🍎

Objects such as apples, bananas and oranges fall from the top.

The player controls a basket and catches the correct fruit.

Example:

“Catch the Apples!”

Correct fruit → +1 point

Wrong fruit → no point or small penalty.

This can also reinforce fruit learning.

Game 4 – Match the Object 🧩

Show an object and ask the child to match it with the correct word/category.

Example:

🍎

Apple

Options:

Apple
Banana
Carrot

Correct answer → celebration animation.

9. SCREEN SHARE SECTION 🖥️

Create a section called:

“Share with Zozo”

The purpose is to allow a parent or teacher to share content from the website to Zozo.

Create a prominent button:

“Share Screen with Zozo”

Include:

Screen sharing interface

Start sharing

Stop sharing

Connection status

Zozo connection indicator

Show:

🟢 Zozo Connected

or

🔴 Zozo Disconnected

Design this section so that it can later be connected to the physical Zozo hardware through Wi-Fi/WebSocket/API communication.

Do not assume the actual hardware communication is already implemented. Create the frontend structure so the integration can be added later.

10. ZOZO CONNECTION PANEL 🤖

Create a small persistent Zozo status component.

Example:

🤖 Zozo

🟢 Connected

Current activity:

Learning: Alphabets

Zozo's current expression:

😊 Happy

This should eventually communicate with the physical ESP32-S3-based Zozo.

Design the frontend/API structure so it can later send commands such as:

Change expression

Start lesson

Move head

Display content

Start game

React to correct answer

React to wrong answer

11. PROGRESS SECTION ⭐

Create a simple child-friendly progress dashboard.

Show:

Learning Progress

Alphabets: ████████░░ 80%

Numbers: ██████░░░░ 60%

Fruits: █████████░ 90%

Vegetables: ███████░░░ 70%

Math: █████░░░░░ 50%

Manners: ████████░░ 80%

Also include:

Achievements

🏆 Alphabet Explorer
🍎 Fruit Master
🔢 Number Star
➕ Math Beginner
❤️ Kindness Champion
🎮 Game Explorer

Use badges and small animations.

12. CHILD-FRIENDLY INTERACTIONS

Use positive reinforcement.

Correct answer:

“Amazing! Zozo is proud of you! 🎉”

Wrong answer:

“Almost! Try again! 😊”

Never use harsh language such as:

Wrong!

You failed!

Bad answer!

Keep the experience encouraging.

13. ZOZO REACTIONS

The website should be designed around Zozo's expressions.

Different events should trigger different reactions.

Examples:

Correct answer → Happy 😊

Very good performance → Excited 🤩

Wrong answer → Curious/encouraging 🤔

Game won → Celebration 🎉

Game lost → Funny/sad 😢

Long inactivity → Sleepy 😴

New lesson → Curious 👀

This should eventually map to Zozo's physical facial expressions.

14. NAVIGATION

Use a simple navigation bar:

Zozo

Home
Learn
Games
Manners
Share
Progress

Add a clear “Play with Zozo” CTA.

The website should work well on:

Desktop

Tablet

Mobile

But prioritize tablet/desktop because the platform may be used alongside the physical Zozo robot.

15. TECHNICAL STRUCTURE

Build the website using a modern component-based architecture.

Suggested stack:

React

TypeScript

Tailwind CSS

Modern component library

Responsive design

WebSocket-ready architecture for future Zozo communication

REST API-ready architecture

Browser Screen Capture API for screen sharing

Local storage/database-ready progress tracking

Keep the code modular.

Create reusable components for:

Lesson cards

Quiz cards

Game cards

Progress bars

Zozo status

Expression indicators

Achievement badges

Screen sharing

Navigation

Learning modules

16. FUTURE HARDWARE INTEGRATION

The website should be designed with future communication between:

Website → Internet/Wi-Fi → ESP32-S3 → Zozo

and:

Zozo → ESP32-S3 → Internet/Wi-Fi → Website

in mind.

Possible future commands:

START_LESSON
SHOW_ALPHABET
SHOW_FRUIT
SHOW_VEGETABLE
SHOW_NUMBER
START_ADDITION
START_SUBTRACTION
START_GAME
CHANGE_EXPRESSION
MOVE_HEAD
DISPLAY_CONTENT


The actual hardware communication can be implemented later.

17. IMPORTANT UX PRINCIPLE

The website should NOT feel like a traditional online classroom.

It should feel like:

“A digital playground for learning with Zozo.”

Learning should happen through:

See → Listen → Touch/Interact → Answer → Zozo Reacts → Reward

The goal is to make children curious and engaged while keeping lessons short and interactive.

FINAL VISUAL DIRECTION

Imagine a combination of:

Premium dark-blue technology interface

Friendly educational platform

Interactive children's game UI

Soft futuristic robotics aesthetic

Minimal animations

Rounded cards

Glowing blue accents

White typography

Cute but sophisticated Zozo personality

Do not make the website look like a generic school website.

Make it look like a real product platform for an AI robotic learning companion.

The overall brand message should be:

ZOZO — Learn. Play. Grow.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/220dbc8d-1720-4bab-8e3d-651e8f08136b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
