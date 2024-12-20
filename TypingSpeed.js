const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "Typing is an essential skill in the digital age.",
    "Hard work beats talent when talent doesn't work hard.",
    "Consistency is the key to success."
];

const quoteElement = document.getElementById("quote");
const inputBox = document.getElementById("inputBox");
const restartButton = document.getElementById("restartButton");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");

let currentQuote = "";
let timer = 0;
let interval = null;

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
    currentQuote = getRandomQuote();
    quoteElement.textContent = currentQuote;
    inputBox.value = "";
    inputBox.disabled = false;
    inputBox.focus();

    timer = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        timer++;
        timeElement.textContent = timer;
    }, 1000);
}

function calculateWPM() {
    const words = inputBox.value.trim().split(/\s+/).length;
    const minutes = timer / 60;
    return Math.round(words / minutes);
}

inputBox.addEventListener("input", () => {
    if (inputBox.value.trim() === currentQuote) {
        clearInterval(interval);
        inputBox.disabled = true;
        wpmElement.textContent = calculateWPM();
        alert("Test completed! Your typing speed is " + calculateWPM() + " WPM.");
    }
});

restartButton.addEventListener("click", startTest);

startTest();