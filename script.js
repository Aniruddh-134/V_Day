const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

// Messages to show when she clicks "No"
const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Plsss? :((",
];

let messageIndex = 0;
let fontSize = 1.5; // Initial font size for Yes button

noBtn.addEventListener("click", () => {
  // 1. Change the text on the No button
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // 2. Make the Yes button Grow
  fontSize *= 1.2; // Increase size by 20%
  yesBtn.style.fontSize = `${fontSize}rem`;

  // Optional: Increase padding to match
  const currentPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
  yesBtn.style.padding = `${currentPadding * 1.1}px`;
});
