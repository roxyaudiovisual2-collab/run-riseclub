document.addEventListener('DOMContentLoaded', () => {
    // Crear el elemento Lightbox si no existe
    if (!document.getElementById('lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" src="" alt="Imagen ampliada">
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('.lightbox-content');
        
        // Función para cerrar
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-habilitar scroll
        };

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });

        // Configurar triggers
        const setupTriggers = () => {
            // Buscamos imágenes en galerías, héroes de página y artículos
            const triggers = document.querySelectorAll('.gallery-img, .hero-img, .event-image, .lightbox-trigger');
            
            triggers.forEach(img => {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    lightboxImg.src = img.src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Evitar scroll al ver foto
                });
            });
        };

        setupTriggers();
    }
});
