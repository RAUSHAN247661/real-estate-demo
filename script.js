document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const hamIcon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            hamIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            hamIcon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger?.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        contactForm.reset();
    });

    // --- Property Filtering (Listings Page) ---
    const filterType = document.getElementById('filterType');
    const filterPrice = document.getElementById('filterPrice');
    const listingsGrid = document.getElementById('listingsGrid');

    function filterProperties() {
        if (!listingsGrid) return;
        const type = filterType.value;
        const priceRange = filterPrice.value;
        const cards = Array.from(listingsGrid.querySelectorAll('.property-card'));

        cards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price);
            let showType = type === 'all' || cardType === type;
            let showPrice = true;

            if (priceRange === 'low') showPrice = cardPrice < 500000;
            else if (priceRange === 'mid') showPrice = cardPrice >= 500000 && cardPrice <= 1000000;
            else if (priceRange === 'high') showPrice = cardPrice > 1000000;

            if (showType && showPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterType?.addEventListener('change', filterProperties);
    filterPrice?.addEventListener('change', filterProperties);

    // --- Scroll Effects ---
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Hero Carousel ---
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    }
});
