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

function seleccionarNom() {
  const randomNom = noms[Math.floor(Math.random() * noms.length)];
  const anglePerNom = 360 / noms.length;
  let currentAngle = 0;
  let newAngle = 0;
  const animationTime = 3000; // temps de 3 segons
  
  const animationInterval = setInterval(() => {
    currentAngle += anglePerNom;
    nomContainer.style.transform = `rotate(${currentAngle}deg)`;
    
    if (currentAngle >= 360) {
      currentAngle = 0;
    }
    
    if (currentAngle === newAngle) {
      clearInterval(animationInterval);
      nomText.textContent = randomNom;
      nomContainer.classList.remove("nom-animation");
      nomContainer.classList.add("nom-animation-stop");
    }
  }, animationTime / noms.length);
  
  nomContainer.classList.add("nom-animation");
}

const seleccionarNomBtn = document.getElementById("seleccionar-nom");
seleccionarNomBtn.addEventListener("click", seleccionarNom);

