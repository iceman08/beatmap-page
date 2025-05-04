fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Agregar eventos a los enlaces del menú después de cargar el header
        const menuLinks = document.querySelectorAll("nav a");
        menuLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                const target = link.href; // Obtiene el href completo del enlace
                const currentUrl = window.location.href; // Obtiene la URL completa actual

                if (target === currentUrl || target.endsWith("#")) {
                    event.preventDefault(); // Previene la recarga si ya estás en la misma página
                }
            });
        });
    })
    .catch(err => console.error('Error al cargar el header:', err));

fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error('Error al cargar el footer:', err));