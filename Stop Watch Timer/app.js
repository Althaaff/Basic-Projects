// Create Template Variables : 
const INTERVAL_MS = 1000 / 60;
let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;


// Get Our Data From the DOM :
const timer = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');


// USE EVENTS :
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


// ---- CREATING A FUNCTION -----

// 1. Start Timer :
function startTimer() {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;


    lastTimerStartTime = Date.now();
    timerID = setInterval(updateTimer, INTERVAL_MS);
}


// 2. Stop Timer :
function stopTimer() {
    startButton.disabled = false;
    stopButton.disabled =  true;
    resetButton.disabled = false;


    millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
    clearInterval(timerID);   
}


// 3. Reset Timer :
function resetTimer() {
    resetButton.disabled = true;
    timer.textContent = "00:00:00";
    millisElapsedBeforeLastStart = 0;
}



// 4. Update Timer :
function updateTimer() {
    const millisElapsed = Date.now() - lastTimerStartTime + 
    millisElapsedBeforeLastStart;
    const secondElapsed = millisElapsed / 1000;
    const minutesElapsed = secondElapsed / 60;


    const milisText = formatenumber(millisElapsed % 1000, 3);
    const secondsText = formatenumber(Math.floor(secondElapsed) % 60, 2);
    const minutesText = formatenumber(Math.floor(minutesElapsed), 2)
    timer.textContent = `${minutesText}:${secondsText}:${milisText}`

}

// 5. Formate Number :
function formatenumber(number, desiredLength) {
    const stringNumber = String(number);
    if (stringNumber.length > desiredLength) {
        return stringNumber.slice(0, desiredLength);
    }


    return stringNumber.padStart(desiredLength, "0");
}


