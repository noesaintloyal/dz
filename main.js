// 5.1
let clickCount = 0;
const clickButton = document.getElementById("clickButton");
const clickCountSpan = document.getElementById("clicks");
const clickMessage = document.getElementById("overClick");

clickButton.addEventListener("click", () => {
    clickCount++;
    clickCountSpan.textContent = clickCount;
    if (clickCount >= 15) {
        clickButton.disabled = true;
        clickMessage.classList.remove("hidden");
    }
});

// 5.2
let countdown = 10;
let countdownInterval;
const countdownSpan = document.getElementById("start");
const resetCountdownButton = document.getElementById("reset");

function startCountdown() {
    clearInterval(countdownInterval);
    countdown = 10;
    countdownSpan.textContent = countdown;
    countdownInterval = setInterval(() => {
        countdown--;
        countdownSpan.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            countdownSpan.textContent = "Время вышло!";
        }
    }, 1000);
}

resetCountdownButton.addEventListener("click", startCountdown);
startCountdown();

// 5.3
let timer = 0;
let timerInterval;
const timerSpan = document.getElementById("timer");
const startButton = document.getElementById("startTimer");
const stopButton = document.getElementById("stopTimer");
const resetButton = document.getElementById("resetTimer");

startButton.addEventListener("click", () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timer++;
            timerSpan.textContent = timer;
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timer = 0;
    timerSpan.textContent = timer;
});
