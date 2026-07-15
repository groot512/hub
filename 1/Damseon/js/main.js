document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Language Switching Logic
    const langBtns = document.querySelectorAll('.lang-switch button');
    let currentLang = 'ko'; // Default language

    // Function to update content
    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Check if element has children tags (like <br>)
                if (translations[lang][key].includes('<')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update Font Family based on Language
        if (lang === 'ko') {
            document.body.style.fontFamily = "var(--font-kr)";
        } else {
            document.body.style.fontFamily = "var(--font-en)";
        }

        // Update Active Button State
        langBtns.forEach(btn => {
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Event Listeners for Language Buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.split('-')[1];
            currentLang = lang;
            updateContent(lang);
        });
    });

    // Initial Load
    updateContent(currentLang);

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .card, .feature-item, .sol-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
