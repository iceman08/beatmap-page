// Modo Oscuro
const toggle = document.getElementById('darkModeToggle');
const lunaSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`;
const solSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;

function updateToggleIcon() {
    toggle.innerHTML = document.body.classList.contains('dark-mode') ? lunaSVG : solSVG;
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateToggleIcon();
});

window.addEventListener('DOMContentLoaded', updateToggleIcon);

// Menú desplegable (hover)
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (!dropdownMenu) return;
        dropdown.addEventListener('mouseenter', () => {
            dropdowns.forEach(otherDropdown => {
                const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                if (otherMenu && otherMenu !== dropdownMenu) {
                    otherMenu.style.display = 'none';
                }
            });
            dropdownMenu.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
        });
    });
});

// Cargar header y footer dinámicamente y agregar listeners a los enlaces del menú
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Agregar eventos a los enlaces del menú después de cargar el header
        const menuLinks = document.querySelectorAll("nav a");
        menuLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute('href');
                // Si el enlace no lleva a ningún lado
                if (!href || href.trim() === "" || href.trim() === "#") {
                    event.preventDefault();
                    alert("Este enlace aún no está disponible. Página en construcción.");
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

// Mostrar aviso de pérdida de conexión
function verificarConexion() {
    if (!navigator.onLine) {
        document.body.innerHTML = '';
        const contenedor = document.createElement('div');
        contenedor.style.display = 'flex';
        contenedor.style.flexDirection = 'column';
        contenedor.style.alignItems = 'center';
        contenedor.style.justifyContent = 'center';
        contenedor.style.height = '100vh';
        contenedor.style.background = '#181818';

        const img = document.createElement('img');
        img.src = 'img/No.png';
        img.alt = 'Sin conexión';
        img.style.width = '120px';
        img.style.marginBottom = '24px';

        const texto = document.createElement('p');
        texto.textContent = 'Parece que perdiste tu conexión a internet. Por favor, verifica tu red.';
        texto.style.color = '#fff';
        texto.style.fontSize = '1.3rem';

        contenedor.appendChild(img);
        contenedor.appendChild(texto);
        document.body.appendChild(contenedor);
    }
}
window.addEventListener('DOMContentLoaded', verificarConexion);