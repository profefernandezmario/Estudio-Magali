// Simple animation for buttons
document.querySelectorAll('.btn-custom').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
