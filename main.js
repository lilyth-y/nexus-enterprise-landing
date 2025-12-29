document.addEventListener('DOMContentLoaded', () => {
    // Add scroll listener for navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // Reveal animations on scroll
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

    document.querySelectorAll('.section-reveal').forEach(section => {
        observer.observe(section);
    });

    // Track scroll position for mouse glow effect
    const glowBg = document.querySelector('.glow-bg');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        
        glowBg.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(59, 130, 246, 0.2), transparent 40%),
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 40%)
        `;
    });

    // Button magnetic effect (simplified)
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
});
