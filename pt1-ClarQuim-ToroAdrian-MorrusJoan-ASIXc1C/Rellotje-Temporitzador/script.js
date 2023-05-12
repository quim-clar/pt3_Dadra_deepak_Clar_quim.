const minutesInput = document.getElementById("minutes-input");
const secondsInput = document.getElementById("seconds-input");
const durationMinutesInput = document.getElementById("duration-minutes-input");
const durationSecondsInput = document.getElementById("duration-seconds-input");
const soundSelect = document.getElementById("sound-select");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const timerDisplay = document.getElementById("timer");
const sound = document.getElementById("sound");
const alarmTimeInput = document.getElementById("alarm-time-input");



let countdown;
let duration;
let startTime;
let elapsedTime = 0;

function startTimer() {
  let now = new Date();
  let alarmTime = new Date(alarmTimeInput.value);
  if (alarmTimeInput.value && alarmTime < now) {
    alarmTime.setDate(alarmTime.getDate() + 1);
  }

  if (alarmTimeInput.value) {
    duration = (alarmTime - now) / 1000;
  } else if (minutesInput.value || secondsInput.value) {
    duration = (Number(minutesInput.value) || 0) * 60 + (Number(secondsInput.value) || 0);
  } else {
    duration = (Number(durationMinutesInput.value) || 0) * 60 + (Number(durationSecondsInput.value) || 0);
  }

  if (isNaN(duration) || duration < 0) {
    alert("La duració ha de ser un número vàlid i major que zero.");
    return;
  }

  startTime = Date.now();
  stopButton.disabled = false;
  startButton.disabled = true;

  countdown = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = duration - elapsed;

    if (remaining < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "00:00";
      sound.src = soundSelect.value;
      sound.play();
      startButton.disabled = false;
      stopButton.disabled = true;
    } else {
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }
  }, 1000);
}

    
    function stopTimer() {
    clearInterval(countdown);
    startButton.disabled = false;
    stopButton.disabled = true;
    elapsedTime += Math.floor((Date.now() - startTime) / 1000);
    duration = 0;
    timerDisplay.textContent = "00:00";
    sound.pause();
    sound.currentTime = 0;
    }
    
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
// Resta del codi JavaScript existent

function displayCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const currentTimeElement = document.getElementById("current-time");
  currentTimeElement.textContent = formattedTime;
}

// Resta del codi JavaScript existent

// Afegim una funció per actualitzar l'hora actual cada segon
setInterval(displayCurrentTime, 1000);
