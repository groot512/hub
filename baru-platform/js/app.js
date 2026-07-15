document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scrolled Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class with slight delay based on order if multiple items appear
                entry.target.classList.add('visible');
                
                // Animate progress bars inside when section becomes visible
                const progressBar = entry.target.querySelector('.progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 500);
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });
});
