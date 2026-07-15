// Tesla Financial Dashboard - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Add enhanced hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.zIndex = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '0';
        });
    });
    
    // Enhanced hover effects for factor cards
    const factorCards = document.querySelectorAll('.factor-card');
    factorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add subtle animation to header price display
    const priceDisplay = document.querySelector('.current-price');
    if (priceDisplay) {
        setTimeout(() => {
            priceDisplay.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            priceDisplay.style.transform = 'scale(1.05)';
            priceDisplay.style.opacity = '1';
            
            setTimeout(() => {
                priceDisplay.style.transform = 'scale(1)';
            }, 500);
        }, 300);
    }
    
    // Add subtle fade-in effect for sections as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section, .conclusion-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        sectionObserver.observe(section);
    });
    
    // Add a class to make sections visible when they enter the viewport
    document.addEventListener('scroll', function() {
        document.querySelectorAll('.content-section.visible, .conclusion-section.visible').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    });
    
    // Toggle additional details on metric card click
    metricCards.forEach(card => {
        card.addEventListener('click', function() {
            // This would typically toggle a hidden details panel
            // For this example, we'll just add a subtle effect
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 300);
        });
    });
    
    // Enhance chart images with a subtle zoom on hover
    const chartImages = document.querySelectorAll('.chart-image');
    chartImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Initialize and preload all chart images for smooth display
    function preloadImages() {
        const images = document.querySelectorAll('.chart-image');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const newImg = new Image();
                newImg.src = src;
            }
        });
    }
    
    preloadImages();
});