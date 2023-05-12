// Get the countdown input elements
var minutesInput = document.getElementById('minutes-input');
var secondsInput = document.getElementById('seconds-input');

// Get the alarm input element
var alarmTimeInput = document.getElementById('alarm-time-input');

// Get the start and stop buttons
var startButton = document.getElementById('start-btn');
var stopButton = document.getElementById('stop-btn');

// Get the sound element
var sound = document.getElementById('sound');

var countdownInterval;

// Function to start the countdown
function startCountdown() {
  var minutes = parseInt(minutesInput.value);
  var seconds = parseInt(secondsInput.value);

  var totalTime = minutes * 60 + seconds;

  countdownInterval = setInterval(function() {
    totalTime--;

    var remainingMinutes = Math.floor(totalTime / 60);
    var remainingSeconds = totalTime % 60;

    // Update the countdown display
    minutesInput.value = remainingMinutes.toString().padStart(2, '0');
    secondsInput.value = remainingSeconds.toString().padStart(2, '0');

    // Check if the countdown has reached zero
    if (totalTime <= 0) {
      clearInterval(countdownInterval);
      playSound();
    }
  }, 1000);

  // Disable the start button and enable the stop button
  startButton.disabled = true;
  stopButton.disabled = false;
}

// Function to stop the countdown
function stopCountdown() {
  clearInterval(countdownInterval);

  // Enable the start button and disable the stop button
  startButton.disabled = false;
  stopButton.disabled = true;

  // Stop the sound
  sound.pause();
}

// Function to play the selected sound
function playSound() {
  var soundSelect = document.getElementById('sound-select');
  var selectedSound = soundSelect.value;

  sound.src = selectedSound;
  sound.play();
}

// Function to set the alarm based on the input time
function setAlarm() {
  var alarmTime = alarmTimeInput.value;
  var alarmHour = parseInt(alarmTime.split(':')[0]);
  var alarmMinute = parseInt(alarmTime.split(':')[1]);

  var now = new Date();
  var currentHour = now.getHours();
  var currentMinute = now.getMinutes();

  // Set the alarm time for the next day if it's already passed
  if (
    alarmHour < currentHour ||
    (alarmHour === currentHour && alarmMinute <= currentMinute)
  ) {
    now.setDate(now.getDate() + 1);
  }

  now.setHours(alarmHour);
  now.setMinutes(alarmMinute);
  now.setSeconds(0);

  var timeUntilAlarm = now - Date.now();

  // Start the countdown with the time until the alarm
  minutesInput.value = Math.floor(timeUntilAlarm / (1000 * 60)).toString().padStart(2, '0');
  secondsInput.value = Math.floor((timeUntilAlarm / 1000) % 60).toString().padStart(2, '0');

  startCountdown();
}

// Function to stop the alarm sound
function stopSound() {
  sound.pause();
  sound.currentTime = 0;
}

// Attach click event listeners to the buttons
startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);

// Call the setAlarm function when the alarm input changes
alarmTimeInput.addEventListener('change', setAlarm);

var currentTimeElement = document.getElementById('current-time');

function updateCurrentTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var currentTimeString = hours + ':' + minutes + ':' + seconds;
  currentTimeElement.textContent = currentTimeString;
}

setInterval(updateCurrentTime, 1000);

function changeTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

// Attach click event listener to the mode button
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', changeTheme);
