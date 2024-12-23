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


