function stopCountdown() {
  clearInterval(timer);
  countdown = null;
  startButton.disabled = false;
  stopButton.disabled = true;
  audio.pause();
}

function playSoundEffect() {
  audio.src = soundEffect.value;
  audio.currentTime = 0;
  audio.play();
}

function updateClock() {
  remainingTime = Math.round((endTime - Date.now()) / 1000);
  if (remainingTime < 0) {
    clearInterval(timer);
    countdown = null;
    startButton.disabled = false;
    stopButton.disabled = true;
    playSoundEffect();
    return;
  }
  let hours = Math.floor(remainingTime / 3600);
  let minutes = Math.floor((remainingTime % 3600) / 60);
  let seconds = remainingTime % 60;
  digitalClock.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

startButton.addEventListener("click", () => {
  if (countdown === null) {
    if (timePicker.value) {
      let [hours, minutes] = timePicker.value.split(":");
      remainingTime = hours * 3600 + minutes * 60;
    } else if (countdownInput.value) {
      let [hours, minutes, seconds] = countdownInput.value.split(":");
      remainingTime = hours * 3600 + minutes * 60 + seconds * 1;
    }
    if (remainingTime > 0) {
      countdown = true;
      startCountdown();
    }
  }
});

stopButton.addEventListener("click", () => {
  if (countdown !== null) {
    stopCountdown();
  }
});

soundEffect.addEventListener("change", () => {
  playSoundEffect();
});

