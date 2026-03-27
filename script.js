// ===== GALLERY SYSTEM (Public View) =====
const STORAGE_KEY = 'aquapreaux_gallery';

// Default photos loaded if admin hasn't customized them yet
const DEFAULT_PHOTOS = [
  { id: 'default-1', src: 'https://img1.wsimg.com/isteam/ip/7774352c-6248-4e6a-8323-5aeb0bea501c/COVID_Swim2.jpeg', caption: 'Happy Customers', isDefault: true },
  { id: 'default-2', src: 'https://img1.wsimg.com/isteam/ip/7774352c-6248-4e6a-8323-5aeb0bea501c/best-pool-supplies.jpeg', caption: 'Quality Supplies', isDefault: true },
  { id: 'default-3', src: 'https://img1.wsimg.com/isteam/ip/7774352c-6248-4e6a-8323-5aeb0bea501c/blob-36b4a03.png', caption: 'Green to Clean Transformation', isDefault: true },
  { id: 'default-4', src: 'https://img1.wsimg.com/isteam/ip/7774352c-6248-4e6a-8323-5aeb0bea501c/PoleHolder4_1600x.jpeg', caption: 'Professional Maintenance', isDefault: true },
  { id: 'default-5', src: 'https://img1.wsimg.com/isteam/ip/7774352c-6248-4e6a-8323-5aeb0bea501c/Equipment-700x467.jpeg', caption: 'Equipment Repair & Install', isDefault: true }
];

// Load photos from localStorage, fall back to defaults
function loadPhotos() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [...DEFAULT_PHOTOS];
  } catch {
    return [...DEFAULT_PHOTOS];
  }
}

function savePhotos(photos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (e) {
    console.warn('Could not save photos to localStorage:', e);
  }
}

let currentSlide = 0;

function renderGallery() {
  const slider = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');
  const wrapper = document.querySelector('.slideshow-wrapper');
  
  if (!slider) return;

  const photos = loadPhotos();
  const publicPhotos = photos.filter(p => p.src);

  if (publicPhotos.length === 0) {
    wrapper.style.display = 'none';
    empty.style.display = 'flex';
    return;
  }

  wrapper.style.display = 'flex';
  empty.style.display = 'none';

  slider.innerHTML = publicPhotos.map(photo => `
    <div class="gallery-slide">
      <img src="${photo.src}" alt="${photo.caption || 'Pool photo'}" loading="lazy" />
    </div>
  `).join('');

  // Setup dots
  const dotsContainer = document.getElementById('slideDots');
  if (dotsContainer) {
    dotsContainer.innerHTML = publicPhotos.map((_, i) => `<div class="dot" data-index="${i}"></div>`).join('');
    dotsContainer.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', (e) => goToSlide(parseInt(e.target.dataset.index)));
    });
  }

  goToSlide(0);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;
  
  currentSlide = (index + slides.length) % slides.length;
  document.getElementById('galleryGrid').style.transform = `translateX(-${currentSlide * 100}%)`;
  
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

document.getElementById('slidePrev')?.addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('slideNext')?.addEventListener('click', () => goToSlide(currentSlide + 1));

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

  if (currentY <= 60) {
    navbar.classList.remove('hidden', 'scrolled');
  } else if (currentY > lastScrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
    navbar.classList.add('scrolled');
  }

  lastScrollY = currentY;
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealEls = document.querySelectorAll(
  '.service-card, .cert-card, .review-card, .faq-item, .trust-item, .about-stat'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});

// ===== FILE HELPER =====
function getBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// ===== CONTACT FORM (WEB3FORMS) =====
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = new FormData(form);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      btn.textContent = '✅ Request Sent!';
      btn.style.background = 'linear-gradient(135deg, #00B4C8, #008FA0)';
      btn.style.color = '#fff';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send My Request ✓';
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 4000);
    } else {
      btn.textContent = '❌ Error Sending';
      btn.style.background = '#ff6b6b';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = 'Send My Request ✓';
        btn.disabled = false;
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    }
  } catch (error) {
    btn.textContent = '❌ Network Error';
    btn.style.background = '#ff6b6b';
    btn.style.color = '#fff';
    setTimeout(() => {
        btn.textContent = 'Send My Request ✓';
        btn.disabled = false;
        btn.style.background = '';
        btn.style.color = '';
    }, 3000);
  }
}



// ===== INIT =====
renderGallery();
