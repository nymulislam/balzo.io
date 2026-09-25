// Scroll Reveal Animations
// .animate-on-scroll elements start hidden (see CSS) and fade/rise into view
// once they cross the viewport; an optional inline `transition-delay` staggers groups.
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
