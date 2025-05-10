const photoElement = document.getElementById('main-photo');
const messageFinal = document.getElementById('message-final');
const finalPhotoSection = document.getElementById('final-photo-section');

const totalFotos = 8;
let currentFoto = 2;
const interval = 10000; // cada 3 segundos
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.querySelector("audio");
  
    const iniciarAudio = () => {
      audio.currentTime = 18; // Comenzar desde el segundo 14
      audio.volume = 0.5;
      audio.play().catch(err => {
        console.warn("Autoplay bloqueado:", err);
      });
  
      // Quitar los listeners después de la primera interacción
      document.removeEventListener("click", iniciarAudio);
      document.removeEventListener("scroll", iniciarAudio);
      document.removeEventListener("keydown", iniciarAudio);
      document.removeEventListener("touchstart", iniciarAudio);
    };
  
    // Escuchar cualquier interacción del usuario
    document.addEventListener("click", iniciarAudio);
    document.addEventListener("scroll", iniciarAudio);
    document.addEventListener("keydown", iniciarAudio);
    document.addEventListener("touchstart", iniciarAudio); // Para móviles
  });
  
const timer = setInterval(() => {
  if (currentFoto <= totalFotos) {
    photoElement.src = `recursos/foto${currentFoto}.jpg`;
    currentFoto++;
  } else if (currentFoto === totalFotos + 1) {
    messageFinal.style.opacity = 1;
    currentFoto++;
  } else {
    // Mostrar imagen final en pantalla completa
    photoElement.style.display = "none";
    messageFinal.style.display = "none";
    finalPhotoSection.style.display = "block";
    clearInterval(timer);
  }
}, interval);
