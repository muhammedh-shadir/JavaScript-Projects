const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

let heading = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  heading.textContent = "Both Draw ⚖";
} else if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 Won!! 🏆";
} else {
  heading.textContent = "Player 2 Won!! 🏆";
}