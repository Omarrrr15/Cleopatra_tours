// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== TABS =====
function showTab(tab) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tab + '-content').classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

// ===== LOAD VIDEOS =====
function loadVideos() {
  const grid = document.getElementById('videosGrid');
  if (!grid || !videosData) return;
  grid.innerHTML = '';
  videosData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.onclick = () => {
      if (v.id.startsWith('SAMPLE')) {
        alert('هذا فيديو نموذجي. أضف رابط الدرايف الحقيقي في ملف videos-data.js');
        return;
      }
      window.open(`https://drive.google.com/file/d/${v.id}/view`, '_blank');
    };
    card.innerHTML = `
      <div class="video-thumb">
        <img src="${getVideoThumb(v.id)}" alt="${v.title}" onerror="this.src='hero_bg.png'" />
        <div class="play-btn">▶</div>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== LOAD PHOTOS (categorized) =====
function loadPhotos() {
  const grid = document.getElementById('photosGrid');
  if (!grid || !photosData) return;
  grid.innerHTML = '';

  // اجمع كل الصور من كل الكاتيجوري
  const allCategories = ['beaches', 'yacht', 'aqua', 'safari'];
  allCategories.forEach(cat => {
    const items = photosData[cat] || [];
    items.forEach(p => {
      const item = document.createElement('div');
      item.className = 'photo-item';
      item.dataset.cat = cat;
      const url = getPhotoUrl(p.id);
      item.innerHTML = `
        <img src="${url}" alt="${p.title}" onerror="this.src='hero_bg.png'" />
        <div class="photo-overlay">🔍</div>
        <div class="photo-label">${p.title}</div>
      `;
      item.onclick = () => window.open(url, '_blank');
      grid.appendChild(item);
    });
  });
}

// ===== FILTER PHOTOS =====
function filterPhotos(cat) {
  // تحديث الأزرار
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('cat-' + cat);
  if (activeBtn) activeBtn.classList.add('active');

  // إظهار/إخفاء الصور
  document.querySelectorAll('#photosGrid .photo-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}


// ===== OPEN VIDEO LIGHTBOX =====
function openVideo(driveId) {
  if (driveId.startsWith('SAMPLE')) {
    alert('هذا فيديو نموذجي. أضف رابط الدرايف الحقيقي في ملف videos-data.js');
    return;
  }
  const url = getVideoEmbedUrl(driveId);
  document.getElementById('lightboxFrame').src = url;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightboxFrame').src = '';
  document.body.style.overflow = '';
}

// ===== TRIP MODALS =====
const modalData = {
  beaches: {
    img: 'beaches.png',
    title: '🏖️ رحلات الشواطئ',
    content: `
      <h3>🏖️ رحلات الشواطئ</h3>
      <img src="beaches.png" alt="الشواطئ" />
      <p>استمتع بأجمل شواطئ مرسي مطروح ذات المياه الفيروزية الصافية. نوفر لك يوماً كاملاً من الاسترخاء والمتعة على شواطئ:</p>
      <br/>
      <ul style="color:#94a3b8; padding-right:1.5rem; line-height:2">
        <li>شاطئ عجيبة - أجمل شواطئ مصر</li>
        <li>شاطئ كليوباترا التاريخي</li>
        <li>شاطئ أبو الأصابع</li>
        <li>شاطئ العجوز</li>
      </ul>
      <br/>
      <p><strong style="color:#f0c040">يشمل:</strong> النقل + دخول الشاطئ + مرشد سياحي</p>
    `
  },
  yacht: {
    img: 'yacht.png',
    title: '⛵ رحلات اليخت',
    content: `
      <h3>⛵ رحلات اليخت</h3>
      <img src="yacht.png" alt="اليخت" />
      <p>تجربة فاخرة على متن يخت حديث وسط المياه الزرقاء مع أنشطة متعددة:</p>
      <br/>
      <ul style="color:#94a3b8; padding-right:1.5rem; line-height:2">
        <li>غوص وسنوركل في أجمل المناطق</li>
        <li>صيد الأسماك</li>
        <li>باربيكيو على متن اليخت</li>
        <li>زيارة الجزر المحيطة</li>
      </ul>
      <br/>
      <p><strong style="color:#f0c040">يشمل:</strong> اليخت + معدات الغوص + وجبة غداء</p>
    `
  },
  aqua: {
    img: 'aqua.png',
    title: '🌊 أكوا بارك',
    content: `
      <h3>🌊 أكوا بارك</h3>
      <img src="aqua.png" alt="أكوا بارك" />
      <p>يوم ممتع في أكوا بارك مع ألعاب مائية مثيرة مناسبة لجميع الأعمار:</p>
      <br/>
      <ul style="color:#94a3b8; padding-right:1.5rem; line-height:2">
        <li>زلاقات مائية ضخمة</li>
        <li>مسابح كبيرة للكبار والأطفال</li>
        <li>ألعاب مائية متنوعة</li>
        <li>كافتيريا ومطاعم</li>
      </ul>
      <br/>
      <p><strong style="color:#f0c040">يشمل:</strong> النقل + تذكرة الدخول</p>
    `
  },
  safari: {
    img: 'safari.png',
    title: '🏜️ سفاري الصحراء',
    content: `
      <h3>🏜️ سفاري الصحراء</h3>
      <img src="safari.png" alt="السفاري" />
      <p>مغامرة لا تُنسى في الصحراء المصرية بسياراتنا الرباعية:</p>
      <br/>
      <ul style="color:#94a3b8; padding-right:1.5rem; line-height:2">
        <li>ركوب الجيبات فوق الكثبان الرملية</li>
        <li>مشاهدة غروب الشمس في الصحراء</li>
        <li>سهرة بدوية أصيلة</li>
        <li>شاي على الطريقة البدوية</li>
      </ul>
      <br/>
      <p><strong style="color:#f0c040">يشمل:</strong> السيارات الرباعية + العشاء البدوي</p>
    `
  }
};

function openModal(type) {
  const data = modalData[type];
  if (!data) return;
  document.getElementById('modalContent').innerHTML = data.content;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close with ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('navLinks').classList.remove('open');
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadVideos();
  loadPhotos();
});
