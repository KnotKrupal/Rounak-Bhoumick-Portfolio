// script.js

// Scroll reveal using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once visible, no need to re-observe
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

revealElements.forEach((el) => observer.observe(el));

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
