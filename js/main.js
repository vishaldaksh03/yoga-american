/* ==========================================================
   Surya Yoga Shala — site scripts
   Every module checks that its elements exist, so this one
   file can be loaded on every page.
   ========================================================== */

/* ---------- Site settings: fill these in before going live ---------- */
const SITE = {
  // Form service URL, e.g. "https://formspree.io/f/abcdwxyz". Empty = demo mode (nothing is sent).
  formEndpoint: "",
  // WhatsApp number with country code, digits only, e.g. "919876543210". Empty = no chat button.
  whatsapp: ""
};

// Blog images live in assets/img, named by their Pexels photo id.
const PX = path => `assets/img/${path.split("/")[0]}.jpg`;

/* ---------- Data: weekly schedule ---------- */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SCHEDULE = {
  Monday: [
    ["06:30", 60, "Hatha Flow", "hatha", "Ananya Sharma", "All levels"],
    ["08:00", 45, "Meditation & Pranayama", "meditation", "Ananya Sharma", "All levels"],
    ["10:00", 60, "Beginners Foundations", "beginners", "Kavya Nair", "Beginner"],
    ["17:30", 60, "Power Yoga", "power", "Arjun Rao", "Intermediate"],
    ["19:00", 75, "Yin & Restorative", "yin", "Kavya Nair", "All levels"]
  ],
  Tuesday: [
    ["06:30", 60, "Vinyasa Flow", "vinyasa", "Meera Iyer", "Intermediate"],
    ["09:00", 60, "Hatha Flow", "hatha", "Ananya Sharma", "All levels"],
    ["12:30", 45, "Lunchtime Stretch", "beginners", "Kavya Nair", "Beginner"],
    ["18:00", 60, "Vinyasa Flow", "vinyasa", "Meera Iyer", "Intermediate"],
    ["19:30", 45, "Meditation & Pranayama", "meditation", "Ananya Sharma", "All levels"]
  ],
  Wednesday: [
    ["06:30", 60, "Power Yoga", "power", "Arjun Rao", "Advanced"],
    ["08:00", 60, "Hatha Flow", "hatha", "Ananya Sharma", "All levels"],
    ["10:00", 75, "Yin & Restorative", "yin", "Kavya Nair", "All levels"],
    ["17:30", 60, "Beginners Foundations", "beginners", "Kavya Nair", "Beginner"],
    ["19:00", 60, "Vinyasa Flow", "vinyasa", "Meera Iyer", "Intermediate"]
  ],
  Thursday: [
    ["06:30", 60, "Vinyasa Flow", "vinyasa", "Meera Iyer", "Intermediate"],
    ["09:00", 45, "Meditation & Pranayama", "meditation", "Ananya Sharma", "All levels"],
    ["12:30", 45, "Lunchtime Stretch", "beginners", "Kavya Nair", "Beginner"],
    ["18:00", 60, "Power Yoga", "power", "Arjun Rao", "Intermediate"],
    ["19:30", 75, "Yin & Restorative", "yin", "Kavya Nair", "All levels"]
  ],
  Friday: [
    ["06:30", 60, "Hatha Flow", "hatha", "Ananya Sharma", "All levels"],
    ["08:00", 60, "Vinyasa Flow", "vinyasa", "Meera Iyer", "Intermediate"],
    ["10:00", 60, "Beginners Foundations", "beginners", "Kavya Nair", "Beginner"],
    ["18:00", 90, "Sunset Candlelight Flow", "vinyasa", "Meera Iyer", "All levels"]
  ],
  Saturday: [
    ["07:00", 75, "Power Yoga", "power", "Arjun Rao", "Advanced"],
    ["09:00", 60, "Hatha Flow", "hatha", "Ananya Sharma", "All levels"],
    ["11:00", 120, "Weekend Workshop", "hatha", "Rotating teachers", "All levels"],
    ["17:00", 60, "Beginners Foundations", "beginners", "Kavya Nair", "Beginner"]
  ],
  Sunday: [
    ["07:30", 60, "Sunrise Meditation", "meditation", "Ananya Sharma", "All levels"],
    ["09:30", 75, "Slow Vinyasa", "vinyasa", "Meera Iyer", "All levels"],
    ["17:30", 90, "Yin & Sound Bath", "yin", "Kavya Nair", "All levels"]
  ]
};

/* ---------- Data: blog posts ---------- */
const POSTS = [
  {
    id: "morning-ritual",
    title: "A 10-Minute Morning Ritual to Wake Up Your Body",
    cat: "Practice",
    date: "Sep 18, 2026",
    read: "5 min read",
    img: "3822534/pexels-photo-3822534.jpeg",
    excerpt: "You don't need a full class to feel the benefits of yoga. These five gentle postures will get your energy moving before your first cup of chai.",
    body: [
      "Mornings set the tone for the whole day. A short, mindful practice right after waking helps release the stiffness of sleep, brings fresh blood flow to the spine and gives your mind a quiet moment before the rush begins.",
      "Start seated for one minute with long, slow breaths. Move into Cat-Cow for eight rounds, letting the breath lead the movement. Step back into Downward Dog and pedal the feet to wake up the calves and hamstrings.",
      "From there, walk to the front of your mat for a gentle Standing Forward Fold, then rise slowly into Mountain Pose. Finish with three rounds of Surya Namaskar A at your own pace, and one minute of stillness.",
      "Consistency matters far more than intensity. Ten minutes every day will change your body more than one long session a week. Roll out your mat the night before so it's waiting for you."
    ]
  },
  {
    id: "breathwork-anxiety",
    title: "Pranayama for Anxiety: Three Breaths That Calm the Mind",
    cat: "Wellness",
    date: "Sep 10, 2026",
    read: "6 min read",
    img: "3822454/pexels-photo-3822454.jpeg",
    excerpt: "Your breath is the fastest bridge to your nervous system. Learn Nadi Shodhana, Bhramari and the 4-7-8 breath to find calm anywhere.",
    body: [
      "When we feel anxious, breathing becomes short and shallow. Pranayama — the yogic practice of breath regulation — reverses this pattern and signals safety to the nervous system.",
      "Nadi Shodhana (alternate nostril breathing) balances the left and right sides of the brain. Close the right nostril with your thumb, inhale left; close the left with your ring finger, exhale right. Continue for five minutes.",
      "Bhramari, or humming bee breath, uses a gentle hum on the exhale. The vibration soothes the vagus nerve and quiets racing thoughts almost instantly.",
      "The 4-7-8 breath is perfect before sleep: inhale for four counts, hold for seven, and exhale slowly for eight. Practise these daily and join our Meditation & Pranayama class for guided sessions."
    ]
  },
  {
    id: "first-class",
    title: "Your First Yoga Class: What to Expect (and What to Bring)",
    cat: "Beginners",
    date: "Aug 29, 2026",
    read: "4 min read",
    img: "8436710/pexels-photo-8436710.jpeg",
    excerpt: "Nervous about your first class? Here's everything you need to know, from what to wear to how to find your spot in the room.",
    body: [
      "Walking into your first yoga class can feel intimidating, but every single person in the room was once a beginner too. Arrive ten minutes early so you can meet your teacher and settle in.",
      "Wear comfortable, stretchy clothing that lets you move freely. We provide mats, blocks, straps and bolsters, so all you need to bring is a water bottle and an open mind.",
      "Let your teacher know about any injuries or health conditions. They will offer modifications so the practice works for your body. Rest in Child's Pose whenever you need to — it's always allowed.",
      "Most importantly, don't compare yourself with others. Yoga is not a performance. Our Beginners Foundations class is designed to build your confidence step by step."
    ]
  },
  {
    id: "yin-vs-restorative",
    title: "Yin vs. Restorative Yoga: Which Slow Practice Is Right for You?",
    cat: "Practice",
    date: "Aug 15, 2026",
    read: "5 min read",
    img: "8436711/pexels-photo-8436711.jpeg",
    excerpt: "Both are slow and quiet, but they work very differently. Understand the difference and choose what your body needs today.",
    body: [
      "Yin yoga targets the deep connective tissues — fascia, ligaments and joints — by holding passive postures for three to five minutes. You will feel a gentle, sometimes intense stretch that improves long-term flexibility.",
      "Restorative yoga, on the other hand, is all about complete relaxation. The body is fully supported with bolsters and blankets so that no effort is required, allowing the nervous system to rest and repair.",
      "If you feel stiff and want to increase mobility, choose Yin. If you feel exhausted, stressed or are recovering from illness, choose Restorative.",
      "Our Yin & Restorative class weaves both together, finishing with a long, guided Savasana."
    ]
  },
  {
    id: "yoga-nutrition",
    title: "Eating for Energy: Sattvic Food Tips from Our Kitchen",
    cat: "Nutrition",
    date: "Jul 30, 2026",
    read: "7 min read",
    img: "14133435/pexels-photo-14133435.jpeg",
    excerpt: "Ayurveda describes sattvic food as pure, fresh and light. Here's how to bring that philosophy to your everyday plate.",
    body: [
      "In yogic philosophy, food affects not just the body but the mind. Sattvic foods — fresh fruit, vegetables, whole grains, nuts, seeds and dairy — are believed to promote clarity and calm.",
      "Try to eat freshly cooked meals and avoid heavily processed or fried foods. Warm, spiced dishes like khichdi are easy to digest and deeply nourishing after an evening practice.",
      "Leave at least two hours between a full meal and your yoga practice. A banana or a handful of soaked almonds is a perfect light snack before an early class.",
      "Above all, eat mindfully. Sit down, put your phone away and chew slowly — it's a meditation in itself."
    ]
  },
  {
    id: "rishikesh-retreat",
    title: "Highlights from Our Himalayan Retreat in Rishikesh",
    cat: "Retreats",
    date: "Jul 12, 2026",
    read: "6 min read",
    img: "35978212/pexels-photo-35978212/free-photo-of-serene-group-yoga-session-in-jawa-barat.jpeg",
    excerpt: "Seven days of sunrise practice by the Ganga, satsang under the stars and friendships that will last a lifetime.",
    body: [
      "This summer, twenty-four of our students joined us for a week-long retreat in the foothills of the Himalayas. Each day began with sunrise practice by the river and ended with evening aarti on the ghats.",
      "Between sessions, we explored ancient temples, hiked to hidden waterfalls and shared simple, delicious sattvic meals together.",
      "For many, the highlight was the silent morning — twelve hours of complete silence that allowed everyone to turn inward and truly rest.",
      "Registrations for our next retreat open soon. Join our newsletter to be the first to know."
    ]
  }
];

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function to12h(t) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
}

function levelPill(level) {
  const cls = level === "Advanced" ? "pill--adv" : level === "Intermediate" ? "pill--int" : level === "All levels" ? "pill--all" : "";
  return `<span class="pill ${cls}">${level}</span>`;
}

function todayName() {
  return DAYS[(new Date().getDay() + 6) % 7];
}

const waLink = text => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

// Posts form data to SITE.formEndpoint. In demo mode (no endpoint) it resolves true without sending.
async function sendForm(data) {
  if (!SITE.formEndpoint) return true;
  try {
    const res = await fetch(SITE.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch {
    return false;
  }
}

/* ---------- Header: scroll state, mobile menu, active link ---------- */
function initHeader() {
  const header = $(".site-header");
  if (!header) return;

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $(".nav-toggle");
  const nav = $(".main-nav");
  const closeMenu = () => {
    header.classList.remove("nav-open");
    document.body.classList.remove("lock");
    toggle && toggle.setAttribute("aria-expanded", "false");
  };
  toggle && toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    document.body.classList.toggle("lock", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav && $$("a", nav).forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  const page = location.pathname.split("/").pop() || "index.html";
  $$(".main-nav a:not(.mobile-cta)").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}

/* ---------- Hero video ---------- */
function initHeroVideo() {
  const video = $(".hero__video");
  const btn = $(".video-toggle");
  if (!video) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setIcon = () => {
    if (!btn) return;
    btn.innerHTML = video.paused
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    btn.setAttribute("aria-label", video.paused ? "Play background video" : "Pause background video");
  };

  let userPaused = reduce;
  const tryPlay = () => {
    if (!userPaused && video.paused) video.play().catch(() => {});
  };

  if (reduce) video.pause();
  else tryPlay();
  // Some mobile browsers ignore the first autoplay attempt; retry once data or a gesture arrives.
  video.addEventListener("canplay", tryPlay, { once: true });
  ["touchstart", "scroll", "click"].forEach(ev => window.addEventListener(ev, tryPlay, { once: true, passive: true }));

  // Save battery: pause while the hero is off-screen.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) tryPlay();
      else if (!video.paused) video.pause();
    }).observe(video);
  }

  video.addEventListener("play", setIcon);
  video.addEventListener("pause", setIcon);
  setIcon();

  btn && btn.addEventListener("click", () => {
    userPaused = !video.paused;
    video.paused ? video.play() : video.pause();
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

/* ---------- Animated counters ---------- */
function initCounters() {
  const counters = $$("[data-count]");
  if (!counters.length) return;
  const run = el => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    const dur = 1800;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ---------- Testimonials slider ---------- */
function initSlider() {
  const root = $(".testimonials");
  if (!root) return;
  const slides = $$(".testimonial", root);
  const dotsWrap = $(".slider-dots", root);
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", `Show testimonial ${i + 1}`);
    b.addEventListener("click", () => { go(i); restart(); });
    dotsWrap.appendChild(b);
  });
  const dots = $$("button", dotsWrap);

  function go(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === index));
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6500);
  }
  $(".slider-prev", root).addEventListener("click", () => { go(index - 1); restart(); });
  $(".slider-next", root).addEventListener("click", () => { go(index + 1); restart(); });
  go(0);
  restart();
}

/* ---------- Full weekly schedule (Classes page) ---------- */
function initSchedule() {
  const list = $("#scheduleList");
  if (!list) return;
  const tabs = $("#dayTabs");
  const filter = $("#styleFilter");
  let day = todayName();

  DAYS.forEach(d => {
    const b = document.createElement("button");
    b.className = "day-tab";
    b.type = "button";
    b.textContent = d.slice(0, 3);
    b.dataset.day = d;
    b.setAttribute("aria-label", d);
    b.addEventListener("click", () => { day = d; render(); });
    tabs.appendChild(b);
  });

  filter.addEventListener("change", render);

  function render() {
    $$(".day-tab", tabs).forEach(b => b.classList.toggle("active", b.dataset.day === day));
    const style = filter.value;
    const rows = SCHEDULE[day].filter(c => style === "all" || c[3] === style);
    if (!rows.length) {
      list.innerHTML = `<div class="empty-note">No ${filter.options[filter.selectedIndex].text} classes on ${day}. Try another day!</div>`;
      return;
    }
    list.innerHTML = rows.map(([time, dur, name, styleKey, teacher, level], i) => `
      <div class="schedule-row" style="animation-delay:${i * 0.06}s">
        <div class="schedule-row__time">${to12h(time)}<small>${dur} min</small></div>
        <div class="schedule-row__name">${name}<small>${day}</small></div>
        <div class="schedule-row__teacher">with ${teacher}</div>
        ${levelPill(level)}
        <a class="btn btn--sm btn--outline" href="contact.html?class=${styleKey}#booking">Book</a>
      </div>`).join("");
  }
  render();
}

/* ---------- Today's classes (Home) ---------- */
function initToday() {
  const wrap = $("#todayClasses");
  if (!wrap) return;
  const day = todayName();
  const label = $("#todayLabel");
  if (label) label.textContent = day;
  wrap.innerHTML = SCHEDULE[day].map(([time, dur, name, styleKey, teacher, level], i) => `
    <div class="schedule-row" style="animation-delay:${i * 0.06}s">
      <div class="schedule-row__time">${to12h(time)}<small>${dur} min</small></div>
      <div class="schedule-row__name">${name}<small>${level}</small></div>
      <div class="schedule-row__teacher">with ${teacher}</div>
      ${levelPill(level)}
      <a class="btn btn--sm btn--outline" href="contact.html?class=${styleKey}#booking">Book</a>
    </div>`).join("");
}

/* ---------- Pricing toggle ---------- */
function initPricing() {
  const toggle = $(".billing-toggle");
  if (!toggle) return;
  const buttons = $$("button", toggle);
  buttons.forEach(btn => btn.addEventListener("click", () => {
    const mode = btn.dataset.billing;
    buttons.forEach(b => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", String(b === btn));
    });
    $$("[data-monthly]").forEach(el => {
      el.textContent = el.dataset[mode];
    });
    $$("[data-note-monthly]").forEach(el => {
      el.textContent = mode === "yearly" ? el.dataset.noteYearly : el.dataset.noteMonthly;
    });
  }));
}

/* ---------- Gallery filter + lightbox ---------- */
function initGallery() {
  const items = $$(".masonry__item");
  const bar = $("#galleryFilter");
  if (bar) {
    $$(".day-tab", bar).forEach(btn => btn.addEventListener("click", () => {
      $$(".day-tab", bar).forEach(b => b.classList.toggle("active", b === btn));
      const f = btn.dataset.filter;
      items.forEach(it => it.classList.toggle("hidden", f !== "all" && it.dataset.cat !== f));
    }));
  }

  const box = $("#lightbox");
  if (!box || !items.length) return;
  const img = $("img", box);
  const cap = $("figcaption", box);
  let current = 0;

  const visible = () => items.filter(it => !it.classList.contains("hidden"));
  function show(i) {
    const list = visible();
    current = (i + list.length) % list.length;
    const it = list[current];
    img.src = it.dataset.full;
    img.alt = it.dataset.caption;
    cap.textContent = it.dataset.caption;
  }
  function open(it) {
    show(visible().indexOf(it));
    box.classList.add("open");
    document.body.classList.add("lock");
    $(".lightbox__close", box).focus();
  }
  function close() {
    box.classList.remove("open");
    document.body.classList.remove("lock");
  }
  items.forEach(it => it.addEventListener("click", () => open(it)));
  $(".lightbox__close", box).addEventListener("click", close);
  $(".lightbox__prev", box).addEventListener("click", () => show(current - 1));
  $(".lightbox__next", box).addEventListener("click", () => show(current + 1));
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}

/* ---------- Blog ---------- */
function postCard(p, delay = 0) {
  return `
    <article class="post-card reveal ${delay ? "reveal-delay-" + delay : ""}" data-cat="${p.cat}">
      <div class="post-card__img"><img src="${PX(p.img, 800)}" alt="${p.title}" loading="lazy"></div>
      <div class="post-card__body">
        <div class="post-meta"><span class="pill">${p.cat}</span><span>${p.date}</span><span>${p.read}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <a class="link-arrow" href="blog.html#${p.id}" data-post="${p.id}">Read article</a>
      </div>
    </article>`;
}

function initBlog() {
  const latest = $("#latestPosts");
  if (latest) latest.innerHTML = POSTS.slice(0, 3).map((p, i) => postCard(p, i)).join("");

  const grid = $("#postGrid");
  if (!grid) return;
  grid.innerHTML = POSTS.slice(1).map((p, i) => postCard(p, i % 3)).join("");

  const bar = $("#blogFilter");
  bar && $$(".day-tab", bar).forEach(btn => btn.addEventListener("click", () => {
    $$(".day-tab", bar).forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".post-card", grid).forEach(c => {
      c.classList.toggle("hidden", f !== "all" && c.dataset.cat !== f);
      c.classList.add("in");
    });
  }));

  const modal = $("#postModal");
  const openPost = id => {
    const p = POSTS.find(x => x.id === id);
    if (!p) return;
    $(".modal__panel > img", modal).src = PX(p.img, 1400);
    $(".modal__panel > img", modal).alt = p.title;
    $(".modal__content", modal).innerHTML = `
      <div class="post-meta"><span class="pill">${p.cat}</span><span>${p.date}</span><span>${p.read}</span></div>
      <h2>${p.title}</h2>
      ${p.body.map(par => `<p>${par}</p>`).join("")}
      <a class="btn mt-40" href="contact.html#booking">Book a class</a>`;
    modal.classList.add("open");
    document.body.classList.add("lock");
    modal.scrollTop = 0;
    $(".modal__close", modal).focus();
  };
  const closePost = () => {
    modal.classList.remove("open");
    document.body.classList.remove("lock");
    history.replaceState(null, "", location.pathname);
  };

  document.addEventListener("click", e => {
    const link = e.target.closest("[data-post]");
    if (!link) return;
    e.preventDefault();
    history.replaceState(null, "", "#" + link.dataset.post);
    openPost(link.dataset.post);
  });
  $(".modal__close", modal).addEventListener("click", closePost);
  modal.addEventListener("click", e => { if (e.target === modal) closePost(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closePost(); });

  if (location.hash) openPost(location.hash.slice(1));
}

/* ---------- Booking form ---------- */
function initBooking() {
  const form = $("#bookingForm");
  if (!form) return;

  const params = new URLSearchParams(location.search);
  const cls = params.get("class");
  const plan = params.get("plan");
  if (cls && form.elements.classType) form.elements.classType.value = cls;
  if (plan && form.elements.plan) form.elements.plan.value = plan;

  const dateInput = form.elements.date;
  if (dateInput) {
    const now = new Date();
    dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  }

  const rules = {
    name: v => v.trim().length >= 2 || "Please enter your full name.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
    phone: v => /^[+\d][\d\s-]{7,}$/.test(v.trim()) || "Please enter a valid phone number.",
    classType: v => !!v || "Please choose a class.",
    date: v => !!v || "Please pick a preferred date."
  };

  const check = input => {
    const rule = rules[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    const field = input.closest(".field");
    field.classList.toggle("invalid", result !== true);
    if (result !== true) $(".error-msg", field).textContent = result;
    return result === true;
  };

  Object.keys(rules).forEach(name => {
    const input = form.elements[name];
    input && input.addEventListener("blur", () => check(input));
    input && input.addEventListener("input", () => input.closest(".field").classList.contains("invalid") && check(input));
  });

  const submitBtn = $("button[type=submit]", form);
  const formError = $("#bookingError");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const ok = Object.keys(rules).map(n => check(form.elements[n])).every(Boolean);
    if (!ok) {
      const first = $(".field.invalid input, .field.invalid select", form);
      first && first.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    data._subject = `New class booking: ${form.elements.classType.selectedOptions[0].text}`;

    submitBtn.disabled = true;
    submitBtn.dataset.label = submitBtn.dataset.label || submitBtn.innerHTML;
    submitBtn.textContent = "Sending…";
    formError.textContent = "";

    const sent = await sendForm(data);
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitBtn.dataset.label;
    if (!sent) {
      formError.textContent = "Sorry, something went wrong. Please try again or call us.";
      return;
    }

    const name = data.name.trim().split(" ")[0];
    const success = $("#bookingSuccess");
    $("#successName").textContent = name;
    const wa = $("#successWhatsApp");
    if (wa && SITE.whatsapp) {
      wa.href = waLink(`Namaste! I just requested a ${form.elements.classType.selectedOptions[0].text} class on ${data.date}. My name is ${data.name}.`);
      wa.hidden = false;
    }
    form.hidden = true;
    success.classList.add("show");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  const again = $("#bookAgain");
  again && again.addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    $("#bookingSuccess").classList.remove("show");
  });
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  $$(".newsletter").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const input = $("input", form);
      const msg = form.nextElementSibling;
      const email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = "Please enter a valid email.";
        return;
      }
      msg.textContent = "Subscribing…";
      const sent = await sendForm({ email, _subject: "New newsletter subscriber" });
      msg.textContent = sent ? "Thank you! Namaste — you're on the list." : "Sorry, that didn't work. Please try again.";
      if (sent) input.value = "";
    });
  });
}

/* ---------- Back to top + year ---------- */
function initMisc() {
  const btn = $(".back-to-top");
  if (btn) {
    window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 700), { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
  $$(".year").forEach(el => (el.textContent = new Date().getFullYear()));

  if (SITE.whatsapp) {
    const a = document.createElement("a");
    a.className = "wa-float";
    a.href = waLink("Namaste! I'd like to know more about your yoga classes.");
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat with us on WhatsApp");
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"/></svg>';
    document.body.appendChild(a);
    document.body.classList.add("has-wa");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHeroVideo();
  initSchedule();
  initToday();
  initBlog();
  initReveal();
  initCounters();
  initSlider();
  initPricing();
  initGallery();
  initBooking();
  initNewsletter();
  initMisc();
});
