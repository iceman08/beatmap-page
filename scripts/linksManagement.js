document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("nav a"); // Selecciona todos los enlaces del menú

    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const target = link.href; // Obtiene el href completo del enlace
            const currentUrl = window.location.href; // Obtiene la URL completa actual

            if (target === currentUrl || target.endsWith("#")) {
                event.preventDefault(); // Previene la recarga si ya estás en la misma página
            }
        });
    });
});