const noms = ['Anna', 'Maria', 'Joan', 'David', 'Laura', 'Marc'];

const btnSeleccionarNom = document.getElementById('seleccionar-nom');
const nomContainer = document.getElementById('nom-container');
const nomElement = document.getElementById('nom');
const rodamentSound = document.getElementById('so-rodament');
const aturadaSound = document.getElementById('so-aturada');

function seleccionarNom() {
  const index = Math.floor(Math.random() * noms.length);
  const nom = noms[index];
  nomElement.textContent = nom;
  nomContainer.classList.add('nom-animation');
  rodamentSound.play();
  setTimeout(() => {
    nomContainer.classList.remove('nom-animation');
    nomContainer.classList.add('nom-animation-stop');
    aturadaSound.play();
    setTimeout(() => {
      nomContainer.classList.remove('nom-animation-stop');
    }, 500);
  }, 5000);
}

btnSeleccionarNom.addEventListener('click', seleccionarNom);
