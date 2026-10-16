const heading = document.getElementById("heading");
const message = document.getElementById("message");
const response = document.getElementById("response");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const floating = document.querySelector(".floating-hearts");

const playfulReplies = [
  "Areee Sirji, itni jaldi nahi! Pehle Gulgula ko smile toh do 😂🩷",
  "Wrong answer, Sirji ji. Ek baar aur try karo 😌💗",
  "Soch lo… Gulgula ke drama ka lifetime subscription free hai! 🤭",
  "Button dabaane se pehle hi aapka dil 'haan' bol chuka hai 😏💕"
];
let noCount = 0;

yesBtn.addEventListener("click", () => {
  heading.textContent = "YAYYY! Sirji is stuck with Gulgula! 🩷";
  message.textContent = "Ab no return, no exchange, no cancellation. Lifetime pyaar aur thoda sa drama guaranteed! 😂💘";
  response.textContent = "Officially approved by Gulgula. Ab ek virtual hug banta hai 🤗🩷";
  yesBtn.textContent = "Pakka promise! 💞";
  noBtn.hidden = true;
  burstHearts();
});

noBtn.addEventListener("click", () => {
  response.textContent = playfulReplies[noCount % playfulReplies.length];
  noCount++;
  if (noCount >= 3) noBtn.textContent = "Achha baba, Haan! 😭";
});

function burstHearts() {
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["💗", "🩷", "💖", "💕", "✨"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2.2 + Math.random() * 2.4) + "s";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    floating.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = Math.random() > .5 ? "🩷" : "✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  heart.style.fontSize = (14 + Math.random() * 14) + "px";
  floating.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}, 900);
