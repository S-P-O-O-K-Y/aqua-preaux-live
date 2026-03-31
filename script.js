// ===== GALLERY SYSTEM (Public View) =====
const STORAGE_KEY = 'aquapreaux_gallery';

const DEFAULT_PHOTOS = [
  { id: 'fb-img-1', src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/605631855_122197887686067566_5921091547367837264_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=chY0m_zGJB4Q7kNvwGHPXEC&_nc_oc=AdqIrhM1gXVfw5iBF1U-RFdS-vw8QlMT6b9Hs2jGdqLeTCt2wwIOCFuVzf5rpxb0EvM&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=V1LMt13BbVx0G8Xaj-8IeQ&_nc_ss=7a32e&oh=00_AfzRzGp8cUMzSC1JF1gSWjp2_ZUHNR9ERbwrHWkSYwnhBg&oe=69CCF8F7', caption: '', isDefault: true },
  { id: 'fb-img-10', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/490864463_122173269656067566_4394130151233845109_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KU1JNuNIMfMQ7kNvwHcgPrv&_nc_oc=AdoHUluJE3jpNU5DPX0_go7dGBnj8x9gmyMb_Sk-aW4ESARp4VvytXNWRS7lCv6seQE&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=20OnWnY7ZOM7gtWStOUaUg&_nc_ss=7a32e&oh=00_Afy0EobaTnKmA_AnSIYahZrXWeFs7MmFv2KKSG_c8XQVBw&oe=69CCE7DB', caption: '', isDefault: true },
  { id: 'fb-img-9', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/491949212_122173269650067566_2500389712955584772_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zJtgVG38wLUQ7kNvwGI8Mtf&_nc_oc=AdrRnrxC9r8CfQDHFYmUSfs05aNATT-urv_M8FNzV0sKTS7RL8kQ6ckhkZeBjP5GycE&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2vof-onnzJ-SDSntPKEy9w&_nc_ss=7a32e&oh=00_AfxUgeo1TIzLKvPY5fJvgT_tkje8-vwF7T3_NaYOrwhz2w&oe=69CD08A2', caption: '', isDefault: true },
  { id: 'fb-img-4', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/605722476_122197887608067566_8041315321915906149_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=agdyc9MPHtcQ7kNvwFnwHLm&_nc_oc=Adq6bSxHOX5cbBKJSC_FVP-4epHYUH7zWsy2AIyiglKINO6xhsE0zPpFHXhhwLc4xtQ&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JYFxcBnbUscWRQuxEEtYjA&_nc_ss=7a32e&oh=00_Afy1PrirjjoZACT9u0s51AHYGKhKPF3Zp5Wtz_Kew5EGTQ&oe=69CCF983', caption: '', isDefault: true },
  { id: 'fb-img-3', src: 'https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/605740364_122197887602067566_942448506403612026_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8tSeb9QDMG0Q7kNvwFWzFqq&_nc_oc=Adr-ugBlFnFXGCnrzSO5f-BeaewgUhD3e99_x4u7IbWvydELFxn4gC06yTZiiQ5JzQg&_nc_zt=23&_nc_ht=scontent-dfw6-1.xx&_nc_gid=Xjbk13go0a1IaUtDNFYECQ&_nc_ss=7a32e&oh=00_AfwWuj8A5PbGobxs2k0XQG25oSRGQysX_LjfAD4YeQVZbA&oe=69CD042F', caption: '', isDefault: true },
  { id: 'fb-img-2', src: 'https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/605883930_122197887620067566_3863701150643451757_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RGcTwWnVIkEQ7kNvwHRgw-7&_nc_oc=Adqzkkf46aJBSBvmwFMabnAOwnEKM76QVX-yDeslugL1T8u6MhGyTHvw0_BBhZCWGNs&_nc_zt=23&_nc_ht=scontent-dfw6-1.xx&_nc_gid=-0vzGs-Mfg3Os3zNpVfKYg&_nc_ss=7a32e&oh=00_AfzTXBRwxugjfjsZC3iNoC99IaIYpLZcCwAAFmoVJiOp2A&oe=69CD019A', caption: '', isDefault: true },
  { id: 'fb-img-6', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/492069588_122173602542067566_1626435836364361626_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5F20jHcnlYcQ7kNvwFX0a8C&_nc_oc=Adq7z-0ga8SWtCO71EeJPu36zZKC5n9eA-TLE9kvm0Ik_lPAVC1h6DYtrMTsVAPKHKs&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mcfANhMsna0Ux1dfHbil9A&_nc_ss=7a32e&oh=00_AfzIuoBjEGuHWFeoPytDq4Q7s01Sy1BPdxmJmGwBQd1tYw&oe=69CCDD8E', caption: '', isDefault: true },
  { id: 'fb-img-5', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/490535907_122173602656067566_2752925091260125480_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=e3vEGVfgNVoQ7kNvwFELsYb&_nc_oc=Adqnr4T3qSUEubjipjtZBi9LQ5Rn31_slgdP6UYRR8YSaYRzcSE03hQNnLbHQeQs5wc&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ld_NQpJpQod1MrvqJWrGFQ&_nc_ss=7a32e&oh=00_Afz2L1GMEA_DgXK-iN8Hhnm4_lB5FMR9vz3cOrRMcvBCmw&oe=69CCD656', caption: '', isDefault: true },
  { id: 'fb-img-8', src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/490685271_122173269896067566_7106306581075384424_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zC5r4Ak-sdgQ7kNvwEzoRH6&_nc_oc=Adq_Qf5GzqaAgaYovt0zdtxUY3QxRZ08WSB8ScHXztDVXO5ST5eZi9yOXQd_nlFCs_4&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=evdZFcsjXhbs8GHOsi_iIA&_nc_ss=7a32e&oh=00_AfybeZo1uzA7YlTJTVeFJ9RzLuD-dx9OYpk3zabQrZGTWg&oe=69CD0C50', caption: '', isDefault: true },
  { id: 'fb-img-7', src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/491419274_122173269884067566_4856487220698258329_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6cMCAlp7ULsQ7kNvwHjitEv&_nc_oc=Ado0siP9ZYGnrt2fKnyXCG4H48bw6xlwNoIygtASLpGURjo5CDwOEEJZCm2OupbBBY8&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=lNpPVoZ8Z5vWv7x5sFB9Tw&_nc_ss=7a32e&oh=00_AfyZGSeyNEiDvUBQH2X9NFKTJfKgPlEFzZRPLyoyJ7iqLw&oe=69CD0076', caption: '', isDefault: true },
  { id: 'fb-img-12', src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/480309685_122166832382067566_6349207401593021327_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yb6b9mcpCpwQ7kNvwFytCqx&_nc_oc=AdqzWfLygekzbSML8U-1pWubKAZOYJHetFrFB_nkmzTAm7JSYP3CdileyCYvsU7vAjo&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8DinIIPF9aiEl0szwiHtTA&_nc_ss=7a32e&oh=00_AfyUeyWjSGvtULpcTQaBcQr19oyfxsl4M5iWcyy2JZo1pA&oe=69CCFA77', caption: '', isDefault: true },
  { id: 'fb-img-11', src: 'https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/480278436_122166832406067566_1367985572131616586_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JG2U-NU2gcAQ7kNvwEwqIRs&_nc_oc=Adotw3A0Vwmbwz_vT7ZZ9ibfdOYD8Zv_al849NA8-lGtm7pPYyGZLA77j6vAUjSApjY&_nc_zt=23&_nc_ht=scontent-dfw6-1.xx&_nc_gid=wXiOK3BmAJL59wG-ZxefjQ&_nc_ss=7a32e&oh=00_Afx9EENChU5CXGGbcjT92KlByx4_X77SCcTh3qf5jMT9cA&oe=69CCEB00', caption: '', isDefault: true }
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
