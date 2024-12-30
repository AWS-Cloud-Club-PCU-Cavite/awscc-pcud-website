// main.js - Example of adding interactivity to your page

// Scroll to top functionality (for example)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑ Scroll to Top';
scrollToTopButton.classList.add('fixed', 'bottom-4', 'right-4', 'bg-blue-900', 'text-white', 'p-2', 'rounded-full', 'shadow-lg');

document.body.appendChild(scrollToTopButton);

// Scroll behavior
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Smooth scroll to other sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
