/* This JavaScript code snippet is creating a color palette generator. Here's a breakdown of what each
part of the code is doing: */
let palates = document.querySelectorAll(".palate");
let copyBtns = document.querySelectorAll(".copy");
let generate = document.querySelector(".generate");


/* This event listener is attached to the "generate" button element. When the "generate" button is
clicked, the code inside the event listener function is executed. Here's a breakdown of what it
does: */
generate.addEventListener("click", () => {
  //   console.log("color changed");
  palates.forEach((palate, idx) => {
    const color = generateRandomColor();
    // console.log(color);
    palate.style.backgroundColor = color;

    const copyBtn = copyBtns[idx];
    // console.log(copyBtn);
    copyBtn.addEventListener("click", () => {
      copyColorCode(color);
    });
  });
});

// this function generate random color and returns it
/**
 * The function `generateRandomColor` generates a random RGB color value.
 * @returns The function `generateRandomColor` returns a randomly generated RGB color in the format
 * `rgb(red, green, blue)`, where `red`, `green`, and `blue` are random values between 0 and 255.
 */
const generateRandomColor = () => {
  let redRandom = Math.floor(Math.random() * 256);
  let blueRandom = Math.floor(Math.random() * 256);
  let greenRandom = Math.floor(Math.random() * 256);

  return `rgb(${redRandom},${greenRandom},${blueRandom})`;
};

/**
 * The `copyColorCode` function copies a color code to the clipboard and displays an alert message with
 * the copied color.
 * @param color - The `color` parameter in the `copyColorCode` function is a string representing a
 * color code, such as "#FF0000" for red or "rgb(255, 0, 0)" for the same color.
 */
const copyColorCode = (color) => {
  navigator.clipboard.writeText(color);
  alert(`the copyed color is - ${color}`);
};
