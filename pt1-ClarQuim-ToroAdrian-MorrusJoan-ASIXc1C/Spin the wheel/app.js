const noms = [
  "Nom 1",
  "Nom 2",
  "Nom 3",
  "Nom 4",
  "Nom 5",
  "Nom 6",
  "Nom 7",
  "Nom 8",
  "Nom 9",
  "Nom 10"
];

const nomContainer = document.getElementById("nom-container");
const nomText = document.getElementById("nom");
const rodamentSound = document.getElementById("so-rodament");
const aturadaSound = document.getElementById("so-aturada");

function seleccionarNom() {
  const randomNom = noms[Math.floor(Math.random() * noms.length)];
  const anglePerNom = 360 / noms.length;
  let currentAngle = 0;
  let newAngle = anglePerNom * noms.indexOf(randomNom);
  const animationTime = 6000; // Tiempo de 3 segundos

  nomContainer.style.transition = "transform 3s ease-in-out";
  nomContainer.classList.add("nom-animation");

  rodamentSound.play(); // Reproducir el sonido de rodadura
  
  const animationInterval = setInterval(() => {
    currentAngle += anglePerNom;
    nomContainer.style.transform = `rotate(${currentAngle}deg)`;

    if (currentAngle >= 360) {
      currentAngle = 0;
    }

    if (currentAngle === newAngle) {
      clearInterval(animationInterval);
      nomText.textContent = randomNom;
      nomContainer.style.transition = "";
      nomContainer.classList.remove("nom-animation");
      rodamentSound.pause(); // Pausar el sonido de rodadura
      aturadaSound.play(); // Reproducir el sonido de parada
    }
  }, animationTime / noms.length);
}

const seleccionarNomButton = document.getElementById("seleccionar-nom");
seleccionarNomButton.addEventListener("click", seleccionarNom);

const themeToggle = document.getElementById('theme-toggle');
const lightThemeLink = document.getElementById('light-theme');
const darkThemeLink = document.getElementById('dark-theme');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    lightThemeLink.disabled = true;
    darkThemeLink.disabled = false;
  } else {
    lightThemeLink.disabled = false;
    darkThemeLink.disabled = true;
  }
});

