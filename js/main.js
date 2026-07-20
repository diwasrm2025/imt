/* ======================================================================
   SRM IMT — SITE BEHAVIOUR
   Renders every data-driven section from SITE_DATA and wires interactions.
   ====================================================================== */

const ICONS = {
  hospital: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21V9m0 0V3m0 6H6m6 0h6"/><path d="M4 21V9l8-6 8 6v12"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h4l2-7 4 14 3-9 2 5h5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>',
  sim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M9 21h6M12 17v4"/></svg>',
  mentor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
  research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-5-5"/></svg>',
  icu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l2-4 3 8 2-6 2 2h5"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>',
  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5a2 2 0 0 1 2-2h9v18H6a2 2 0 0 1-2-2Z"/><path d="M15 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/></svg>',
  lab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><path d="M9 15h6"/></svg>',
  hall: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
};

function icon(name) { return ICONS[name] || ''; }

/* ---------------- Header / Footer ---------------- */

function renderHeader(current) {
  const el = document.getElementById('site-header');
  if (!el) return;
  const d = SITE_DATA;
  el.innerHTML = `
    <div class="nav-wrap">
      <a href="index.html" class="brand">
        <span class="brand-mark">SR</span>
        <span class="brand-text">
          <span class="name">${d.brand.name}</span>
          <span class="sub">${d.brand.programmeShort}</span>
        </span>
      </a>
      <nav class="main-nav" id="main-nav">
        <ul>
          ${d.nav.map(n => `<li><a href="${n.href}" class="${n.href === current ? 'active' : ''}">${n.label}</a></li>`).join('')}
        </ul>
        <div class="nav-cta">
          <a href="admissions.html#apply" class="btn btn-gold">Apply Now</a>
        </div>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const d = SITE_DATA;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="brand-mark">SR</span>
            <span class="brand-text">
              <span class="name">${d.brand.name}</span>
              <span class="sub">${d.brand.programmeShort}</span>
            </span>
          </a>
          <p>${d.footer.about}</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>${d.footer.quickLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:${d.brand.phone.replace(/\s/g,'')}">${d.brand.phone}</a></li>
            <li><a href="mailto:${d.brand.email}">${d.brand.email}</a></li>
            <li><span>${d.brand.address}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">${d.footer.copyright}</div>
    </div>
  `;
}

/* ---------------- Home page sections ---------------- */

function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  const h = SITE_DATA.hero;
  el.innerHTML = `
    <div class="container hero-grid">
      <div>
        <span class="eyebrow">${h.eyebrow}</span>
        <h1>${h.headline}<span class="accent">${h.headlineAccent}</span></h1>
        <p class="lede">${h.subheading}</p>
        <div class="hero-ctas">
          ${h.ctas.map(c => `<a href="${c.href}" class="btn ${c.primary ? 'btn-gold' : 'btn-outline'}">${c.label}</a>`).join('')}
        </div>
      </div>
      <div class="pulse-wrap">
        <div class="pulse-card">
          <svg viewBox="0 0 420 160">
            <path class="pulse-line" d="M0,80 L70,80 L95,30 L120,130 L145,55 L165,80 L230,80 L255,45 L280,110 L305,80 L420,80" />
          </svg>
          <div class="pulse-caption">
            <span><b>JRCPTB</b>Curriculum Aligned</span>
            <span style="text-align:right"><b>3 Yrs</b>Stage 1 Pathway</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStats() {
  const el = document.getElementById('stats');
  if (!el) return;
  el.innerHTML = `
    <div class="container stats-grid">
      ${SITE_DATA.stats.map(s => `
        <div class="stat">
          <div class="num" data-count="${s.value}">0<span class="plus">${s.suffix}</span></div>
          <div class="lbl">${s.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWhyChoose() {
  const el = document.getElementById('why-choose');
  if (!el) return;
  const w = SITE_DATA.whyChoose;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Why Us</span>
        <h2>${w.heading}</h2>
        <p>${w.intro}</p>
      </div>
      <div class="feature-grid">
        ${w.items.map(i => `
          <div class="feature-card">
            <div class="icon-badge">${icon(i.icon)}</div>
            <h3>${i.title}</h3>
            <p>${i.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderOverview() {
  const el = document.getElementById('overview');
  if (!el) return;
  const o = SITE_DATA.overview;
  el.innerHTML = `
    <div class="container overview-split">
      <div>
        <span class="eyebrow">Overview</span>
        <h2>${o.heading}</h2>
        <p style="margin-top:1rem;color:var(--c-text-muted)">${o.text}</p>
      </div>
      <div class="overview-visual">
        <div class="cap">Programme Includes</div>
        <h3 style="color:#fff">Structured, Assessed, Mentored</h3>
        <ul class="overview-points">
          ${o.points.map(p => `<li>${icon('check')}<span>${p}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderStructure() {
  const el = document.getElementById('structure');
  if (!el) return;
  const s = SITE_DATA.structure;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Pathway</span>
        <h2>${s.heading}</h2>
        <p>${s.intro}</p>
      </div>
      <div class="timeline">
        ${s.years.map((y, idx) => `
          <div class="timeline-item">
            <div class="timeline-node">${idx + 1}</div>
            <div class="timeline-card">
              <div class="yr">${y.year}</div>
              <h3>${y.title}</h3>
              <p>${y.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderRotations() {
  const el = document.getElementById('rotations');
  if (!el) return;
  const r = SITE_DATA.rotations;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Clinical Exposure</span>
        <h2>${r.heading}</h2>
        <p>${r.intro}</p>
      </div>
      <div class="rotation-grid">
        ${r.list.map(name => `<div class="rotation-chip"><span class="dot"></span>${name}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderFacilities() {
  const el = document.getElementById('facilities');
  if (!el) return;
  const f = SITE_DATA.facilities;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Infrastructure</span>
        <h2>${f.heading}</h2>
        <p>${f.intro}</p>
      </div>
      <div class="facility-grid">
        ${f.items.map(i => `
          <div class="facility-card">
            <div class="icon-badge">${icon(i.icon)}</div>
            <h3>${i.title}</h3>
            <p>${i.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCtaBanner(target, headline, sub, ctaLabel, ctaHref) {
  const el = document.getElementById(target);
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="cta-banner">
        <div>
          <h2>${headline}</h2>
          <p>${sub}</p>
        </div>
        <a href="${ctaHref}" class="btn btn-gold">${ctaLabel}</a>
      </div>
    </div>
  `;
}

/* ---------------- Programme page sections ---------------- */

function renderCurriculum() {
  const el = document.getElementById('curriculum');
  if (!el) return;
  const c = SITE_DATA.curriculum;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Curriculum</span>
        <h2>${c.heading}</h2>
        <p>${c.intro}</p>
      </div>
      <div class="accordion-list">
        ${c.sections.map((s, i) => `
          <div class="accordion-item ${i === 0 ? 'open' : ''}">
            <button class="accordion-trigger">
              <span>${s.title}</span>
              <span class="plus">+</span>
            </button>
            <div class="accordion-panel">
              <div class="accordion-panel-inner">${s.text}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAssessment() {
  const el = document.getElementById('assessment');
  if (!el) return;
  const a = SITE_DATA.assessment;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Assessment</span>
        <h2>${a.heading}</h2>
        <p>${a.intro}</p>
      </div>
      <div class="method-grid">
        ${a.methods.map(m => `
          <div class="method-card">
            <div class="abbr">${m.abbr}</div>
            <div class="full">${m.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFaculty() {
  const el = document.getElementById('faculty');
  if (!el) return;
  const f = SITE_DATA.faculty;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Our Team</span>
        <h2>${f.heading}</h2>
        <p>${f.intro}</p>
      </div>
      <div class="faculty-track-wrap">
        <div class="faculty-track" id="faculty-track">
          ${f.members.map(m => `
            <div class="faculty-card">
              <div class="faculty-avatar">${m.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
              <div class="role">${m.role}</div>
              <h3>${m.name}</h3>
              <p>${m.detail}</p>
            </div>
          `).join('')}
        </div>
        <div class="faculty-arrows">
          <button class="arrow-btn" id="faculty-prev" aria-label="Previous">‹</button>
          <button class="arrow-btn" id="faculty-next" aria-label="Next">›</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------------- Admissions page sections ---------------- */

function renderEligibility() {
  const el = document.getElementById('eligibility');
  if (!el) return;
  const e = SITE_DATA.eligibility;
  el.innerHTML = `
    <div class="container overview-split">
      <div>
        <span class="eyebrow">Eligibility</span>
        <h2>${e.heading}</h2>
        <p style="margin-top:1rem;color:var(--c-text-muted)">${e.intro}</p>
      </div>
      <div class="overview-visual">
        <div class="cap">Requirements</div>
        <h3 style="color:#fff">Who Can Apply</h3>
        <ul class="overview-points">
          ${e.criteria.map(c => `<li>${icon('check')}<span>${c}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderAdmissionProcess() {
  const el = document.getElementById('admission-process');
  if (!el) return;
  const p = SITE_DATA.admissionProcess;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">How To Apply</span>
        <h2>${p.heading}</h2>
        <p>${p.intro}</p>
      </div>
      <div class="steps-list" style="max-width:640px;margin:0 auto;">
        ${p.steps.map((s, i) => `
          <div class="step-row">
            <div class="step-num">${i + 1}</div>
            <div class="step-body">
              <h3>${s.title}</h3>
              <p>${s.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFees() {
  const el = document.getElementById('fees');
  if (!el) return;
  const f = SITE_DATA.fees;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Investment</span>
        <h2>${f.heading}</h2>
        <p>${f.intro}</p>
      </div>
      <div class="fee-table-wrap">
        <table class="fee-table">
          ${f.table.map(r => `<tr><td>${r.label}</td><td>${r.value}</td></tr>`).join('')}
        </table>
      </div>
      <div class="fee-columns">
        <div class="fee-col includes">
          <h3>✓ Programme Fee Includes</h3>
          <ul>${f.includes.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="fee-col excludes">
          <h3>Fee Excludes</h3>
          <ul>${f.excludes.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderFaq() {
  const el = document.getElementById('faq');
  if (!el) return;
  const f = SITE_DATA.faq;
  el.innerHTML = `
    <div class="container" style="max-width:820px">
      <div class="section-head center">
        <span class="eyebrow">FAQ</span>
        <h2>${f.heading}</h2>
      </div>
      ${f.items.map(item => `
        <div class="faq-item accordion-item">
          <button class="accordion-trigger">
            <span>${item.q}</span>
            <span class="plus">+</span>
          </button>
          <div class="accordion-panel">
            <div class="accordion-panel-inner">${item.a}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderContact() {
  const el = document.getElementById('contact');
  if (!el) return;
  const d = SITE_DATA.brand;
  el.innerHTML = `
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Get In Touch</span>
        <h2>Enquire Now</h2>
        <p>Have a question about the programme? Send us a message and our admissions office will respond.</p>
      </div>
      <div class="contact-grid">
        <form class="contact-form" id="enquiry-form" novalidate>
          <div id="form-fields">
            <div class="form-row">
              <div class="field">
                <label for="f-name">Full Name</label>
                <input type="text" id="f-name" name="name" required placeholder="Your name" />
              </div>
              <div class="field">
                <label for="f-email">Email</label>
                <input type="email" id="f-email" name="email" required placeholder="you@example.com" />
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <label for="f-phone">Phone Number</label>
                <input type="tel" id="f-phone" name="phone" required placeholder="+91" />
              </div>
              <div class="field">
                <label for="f-nationality">Nationality</label>
                <input type="text" id="f-nationality" name="nationality" placeholder="e.g. Indian" />
              </div>
            </div>
            <div class="field">
              <label for="f-message">Your Message</label>
              <textarea id="f-message" name="message" placeholder="Tell us what you'd like to know..."></textarea>
            </div>
            <button type="submit" class="btn btn-gold btn-block">Send Enquiry</button>
            <p class="form-note">We typically respond within 1–2 business days.</p>
          </div>
          <div class="form-success" id="form-success">
            ${icon('check')}
            <h3>Thank you!</h3>
            <p>Your enquiry has been received. Our admissions team will be in touch shortly.</p>
          </div>
        </form>
        <div class="contact-info">
          <div class="contact-card">
            <div class="icon-badge">${icon('phone')}</div>
            <div><h4>Call Us</h4><p>${d.phone}</p></div>
          </div>
          <div class="contact-card">
            <div class="icon-badge">${icon('mail')}</div>
            <div><h4>Email Us</h4><p>${d.email}</p></div>
          </div>
          <div class="contact-card">
            <div class="icon-badge">${icon('pin')}</div>
            <div><h4>Visit Us</h4><p>${d.address}</p></div>
          </div>
          <div class="map-frame">
            <iframe src="${d.mapEmbed}" loading="lazy" title="Map"></iframe>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------- Interactions ---------------- */

function initNavToggle() {
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
    document.body.classList.remove('nav-open');
  }));
}

function initAccordions() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;
    const item = trigger.closest('.accordion-item');
    const panel = item.querySelector('.accordion-panel');
    const wasOpen = item.classList.contains('open');

    // close siblings within the same list
    const list = item.parentElement;
    list.querySelectorAll('.accordion-item.open').forEach(other => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('.accordion-panel').style.maxHeight = null;
      }
    });

    if (wasOpen) {
      item.classList.remove('open');
      panel.style.maxHeight = null;
    } else {
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });

  // open first item by default where marked
  document.querySelectorAll('.accordion-item.open').forEach(item => {
    const panel = item.querySelector('.accordion-panel');
    if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
  });
}

function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const plusEl = el.querySelector('.plus');
    const plusHTML = plusEl ? plusEl.outerHTML : '';
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = Math.floor(eased * target) + plusHTML;
      if (p < 1) requestAnimationFrame(tick);
      else el.innerHTML = target + plusHTML;
    }
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
}

function initFacultyCarousel() {
  const track = document.getElementById('faculty-track');
  const prev = document.getElementById('faculty-prev');
  const next = document.getElementById('faculty-next');
  if (!track || !prev || !next) return;
  const scrollAmt = 290;
  prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: scrollAmt, behavior: 'smooth' }));
}

function initStickyApply() {
  const el = document.getElementById('sticky-apply');
  if (!el) return;
  const applyLink = document.getElementById('apply');
  window.addEventListener('scroll', () => {
    el.classList.toggle('show', window.scrollY > 500);
  });
}

function initForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    document.getElementById('form-fields').style.display = 'none';
    document.getElementById('form-success').classList.add('show');
  });
}

function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  const reveal = () => {
    loader.classList.add('is-hidden');
    window.setTimeout(() => loader.remove(), 650);
  };
  // Hold for a minimum beat so the animation reads intentionally,
  // but never block longer than the page actually takes to load.
  const minimumDelay = new Promise((resolve) => window.setTimeout(resolve, 500));
  const pageReady = new Promise((resolve) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });
  Promise.all([minimumDelay, pageReady]).then(reveal);
}

document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initNavToggle();
  initAccordions();
  initCounters();
  initFacultyCarousel();
  initStickyApply();
  initForm();
});
