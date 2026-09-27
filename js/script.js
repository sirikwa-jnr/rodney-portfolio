// Auto-update footer year
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Contact form handler (front-end only for now)
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = "✅ Thanks! I'll get back to you soon. (Demo — connect Formspree for live email.)";
  e.target.reset();
}

// Smooth fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .cert-card, .testimonial, .card, .hero-text, .hero-image').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});