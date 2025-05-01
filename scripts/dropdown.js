document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown'); // Seleccionar todos los dropdowns

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Mostrar el menú al hacer hover
        dropdown.addEventListener('mouseenter', () => {
            // Cerrar todos los demás menús
            dropdowns.forEach(otherDropdown => {
                const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                if (otherMenu !== dropdownMenu) {
                    otherMenu.style.display = 'none';
                }
            });

            // Mostrar el menú actual
            dropdownMenu.style.display = 'block';
        });

        // Ocultar el menú al dejar de hacer hover
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
        });
    });
});