let timer;
let isRunning = false;
let time = 0; 
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
function updateDisplay() {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        time++;
        updateDisplay();
    }, 1000);
}
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    updateDisplay();
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
updateDisplay();
