const h1 = document.getElementById("uniqe_id");
const bdaycard = document.getElementById("bdaycard");

bdaycard.style.display = "none";

setTimeout(() => {
  h1.innerText = 10;
}, 1000);

let count = 10;

let color = [
  "#D22D16",
  "#3b82f6",
  "#0ea5e9",
  "#dc2626",
  "#facc15",
  "#f43f5e",
  "#eab308",
  "#84cc16",
  "#a855f7",
  "#3b82f6",
  "#E75A70",
];
const interval = setInterval(() => {
  if (count != 0) {
    h1.innerText = count;
    h1.style.color = `${color[count]}`;
    count--;
  } else {
    h1.style.display = "none";
    bdaycard.style.display = "block";
    clearInterval(interval);
  }
}, 1000);

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(12000)
  .typeString(
    `Wish you💞 many more happy returns💖 of the day!💞 Live a long life. 
    I hope your birthday is 💯amazing and 🥰wonderful day✨😍.
    May all your dreams❤️ come true and may you achieve all success🏆 in your life.
    May God😇 bless you. 💞🎂Happy birthday, 💖baby!`
  )
  .pauseFor(5000)
  .start();
