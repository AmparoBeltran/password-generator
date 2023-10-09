const generatePasswordBtn = document.querySelector("button");
const toggle = document.querySelector("#toggle>input");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordContainerOne = document.querySelector(".password-one");
let passwordContainerTwo = document.querySelector(".password-two");

let password = document.querySelectorAll(".password");

password.forEach((el) => {
  el.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert("Copied: " + e.target.innerText);
  });
});

function generatePassword() {
  let password = "";
  for (let i = 0; i < 16; i++) {
    password +=
      characters[Math.floor(Math.random(characters) * characters.length)];
  }
  return password;
}

generatePasswordBtn.addEventListener("click", () => {
  passwordContainerOne.innerText = generatePassword();

  passwordContainerTwo.innerText = generatePassword();
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle(
    "light",
    !document.body.classList.contains("light")
  );
});
