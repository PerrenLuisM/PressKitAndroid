const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown-menu");

// Agregar evento de clic al ícono del menú
menuIcon.addEventListener("click", function () {
    // Alternar entre mostrar y ocultar el menú
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Ocultar
    } else {
        dropdownMenu.style.display = "block"; // Mostrar
    }
});







// Referencias
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Índice actual del slider
let currentIndex = 0;

// Función para cambiar de slide
function updateSlider() {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Asegurar que el índice esté dentro de los límites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Mover el slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Detener todos los videos
    slides.forEach((slide) => {
        const video = slide.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0; // Reiniciar el video
        }
    });

    // Reproducir el video de la diapositiva actual (si existe)
    const currentSlide = slides[currentIndex];
    const currentVideo = currentSlide.querySelector("video");
    if (currentVideo) {
        currentVideo.muted = false; // Desmutear
        currentVideo.play(); // Reproducir
    }
}

// Eventos de los botones
prevBtn.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
});

// Inicialización
updateSlider();
