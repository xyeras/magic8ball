const answers = [
  "magic8ball_1.png",
  "magic8ball_2.png",
  "magic8ball_3.png",
  "magic8ball_4.png",
  "magic8ball_5.png",
  "magic8ball_6.png",
  "magic8ball_7.png",
  "magic8ball_8.png",
  "magic8ball_9.png",
  "magic8ball_10.png",
  "magic8ball_11.png",
  "magic8ball_12.png",
  "magic8ball_13.png",
  "magic8ball_14.png",
  "magic8ball_15.png",
  "magic8ball_16.png",
  "magic8ball_17.png",
  "magic8ball_18.png",
  "magic8ball_19.png",
  "magic8ball_20.png"
];

const answer = document.getElementById("answers");
const answerImg = answer.querySelector("img");

const div = document.getElementById("userInput");
const input = div.querySelector("input");
const button = div.querySelector("button");
const paragraph = div.querySelector("p");

// const resetButton = div.querySelectorAll("button")[1];
const resetButton = div.getElementsByTagName("button")[1];
// const resetButton = div.getElementById("btn");

button.addEventListener("click", function () {
  // 1. Get the text from the input field.
  const text = input.value;

  // 2. Set display: none on the input and button
  input.style.display = "none";
  button.style.display = "none";
  
  // 3. Set the innerText of the p tag to whatever was in the input field
  paragraph.innerText = `You asked: ${text}`;

  paragraph.style.backgroundColor = "white";
  paragraph.style.marginTop = "9px";
  paragraph.style.height = "37px";
  paragraph.style.padding = "7px";
  paragraph.style.borderRadius = "4px";
  paragraph.style.borderColor = "gray";
  
  // 4. Set display: block on the p tag
  paragraph.style.display = "block";
  
  // 5. Set display: inline-block on the reset button
  resetButton.style.display = "inline-block";
});

button.addEventListener("click", function () {
  let index = Math.floor(Math.random() * answers.length);
  const answerSrc = `./img/${answers[index]}`;
  answerImg.src = answerSrc;
});

resetButton.addEventListener("click", function () {
  // 1. Set input.value = ""
  input.value = "";
  
  // 2. Set display: inline-block on input
  input.style.display = "inline-block";
  
  // 3. Set display: inline-block on button
  button.style.display = "inline-block";
  
  // 4. Set display: none on the paragraph element
  paragraph.style.display = "none";
  
  // 5. Set display: none on the reset button.
  resetButton.style.display = "none";
});