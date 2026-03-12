// Navbar scroll effect + topbar hide
const navbar = document.getElementById('navbar');
const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    if(topbar) topbar.style.display = 'none';
  } else {
    navbar.classList.remove('scrolled');
    if(topbar) topbar.style.display = '';
  }
  const scrollBtn = document.getElementById('scrollTop');
  if(scrollBtn) {
    if(window.scrollY > 300) scrollBtn.classList.add('visible');
    else scrollBtn.classList.remove('visible');
  }
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if(hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}

// Scroll to top
const scrollBtn = document.getElementById('scrollTop');
if(scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Contact form — FormSubmit ko actually POST karo (e.preventDefault NAHI hai)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const btn = this.querySelector('.form-submit');
    if(btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }
    // Form normally submit hoga FormSubmit server ko — no preventDefault
  });
}

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.service-card, .why-card, .blog-card, .testi-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
