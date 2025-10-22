document.addEventListener('DOMContentLoaded', function() {
    const zoomContainer = document.querySelector('.zoom-container');
    const zoomImage = zoomContainer?.querySelector('.zoomed');
    const closeBtn = zoomContainer?.querySelector('.close-zoom');

    if (!zoomContainer || !zoomImage || !closeBtn) return;

    function openZoom(src) {
        zoomImage.src = src;
        zoomContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // for accessibility: focus close button
        closeBtn.focus();
    }

    function closeZoom() {
        zoomContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
        zoomImage.src = '';
    }

    // abrir al hacer click en cada imagen dentro de #productos
    document.querySelectorAll('#productos .preview-img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openZoom(img.src));
    });

    // también abrir si se usa el botón "Ampliar imagen" dentro del preview-img-container
    document.querySelectorAll('#productos .preview-img-container .zoom-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = btn.closest('.preview-img-container');
            const img = container?.querySelector('.preview-img');
            if (img) openZoom(img.src);
        });
    });

    // cerrar con botón, clic fuera o ESC
    closeBtn.addEventListener('click', closeZoom);

    zoomContainer.addEventListener('click', (e) => {
        if (e.target === zoomContainer) closeZoom();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && zoomContainer.style.display === 'flex') closeZoom();
    });

    // Menú responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Animación de elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card, .service-card').forEach((el) => observer.observe(el));
});