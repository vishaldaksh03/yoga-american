/* ==========================================================
   Cedar & Sun Yoga — site scripts
   Every module checks that its elements exist, so this one
   file can be loaded on every page.
   ========================================================== */

/* ---------- Site settings: fill these in before going live ---------- */
const SITE = {
  // Form service URL, e.g. "https://formspree.io/f/abcdwxyz". Empty = demo mode (nothing is sent).
  formEndpoint: "",
  // Studio mobile number for text messages, digits only with country code, e.g. "15125550147". Empty = no text button.
  sms: "15125550147"
};

// Blog images live in assets/img, named by their Pexels photo id.
const PX = path => `assets/img/${path.split("/")[0]}.jpg`;

/* ---------- Data: weekly schedule ---------- */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SCHEDULE = {
  Monday: [
    ["06:00", 60, "Hot Power Flow", "power", "Marcus Bennett", "Intermediate"],
    ["07:30", 60, "Slow Flow", "slowflow", "Lauren Whitaker", "All levels"],
    ["09:30", 60, "Yoga Basics", "basics", "Hannah Brooks", "Beginner"],
    ["12:00", 45, "Lunch Break Flow", "vinyasa", "Jess Calloway", "All levels"],
    ["17:45", 60, "Vinyasa Flow", "vinyasa", "Jess Calloway", "Intermediate"],
    ["19:15", 75, "Yin & Restorative", "yin", "Hannah Brooks", "All levels"]
  ],
  Tuesday: [
    ["06:00", 60, "Vinyasa Flow", "vinyasa", "Jess Calloway", "Intermediate"],
    ["09:30", 60, "Slow Flow", "slowflow", "Lauren Whitaker", "All levels"],
    ["12:00", 45, "Breathwork & Meditation", "breath", "Daniel Reyes", "All levels"],
    ["17:45", 60, "Hot Power Flow", "power", "Marcus Bennett", "Intermediate"],
    ["19:15", 60, "Yoga Basics", "basics", "Hannah Brooks", "Beginner"]
  ],
  Wednesday: [
    ["06:00", 60, "Hot Power Flow", "power", "Marcus Bennett", "Advanced"],
    ["07:30", 60, "Slow Flow", "slowflow", "Lauren Whitaker", "All levels"],
    ["09:30", 75, "Yin & Restorative", "yin", "Hannah Brooks", "All levels"],
    ["12:00", 45, "Lunch Break Flow", "vinyasa", "Jess Calloway", "All levels"],
    ["17:45", 60, "Yoga Basics", "basics", "Hannah Brooks", "Beginner"],
    ["19:15", 60, "Vinyasa Flow", "vinyasa", "Jess Calloway", "Intermediate"]
  ],
  Thursday: [
    ["06:00", 60, "Vinyasa Flow", "vinyasa", "Jess Calloway", "Intermediate"],
    ["09:30", 60, "Prenatal Yoga", "slowflow", "Sierra Dalton", "All levels"],
    ["12:00", 45, "Breathwork & Meditation", "breath", "Daniel Reyes", "All levels"],
    ["17:45", 60, "Hot Power Flow", "power", "Marcus Bennett", "Intermediate"],
    ["19:15", 75, "Yin & Restorative", "yin", "Hannah Brooks", "All levels"]
  ],
  Friday: [
    ["06:00", 60, "Slow Flow", "slowflow", "Lauren Whitaker", "All levels"],
    ["07:30", 60, "Vinyasa Flow", "vinyasa", "Jess Calloway", "Intermediate"],
    ["09:30", 60, "Yoga Basics", "basics", "Hannah Brooks", "Beginner"],
    ["12:00", 45, "Lunch Break Flow", "vinyasa", "Marcus Bennett", "All levels"],
    ["18:00", 75, "Candlelight Flow", "vinyasa", "Jess Calloway", "All levels"]
  ],
  Saturday: [
    ["08:00", 75, "Hot Power Flow", "power", "Marcus Bennett", "Advanced"],
    ["09:45", 60, "Slow Flow", "slowflow", "Lauren Whitaker", "All levels"],
    ["11:30", 120, "Weekend Workshop", "slowflow", "Rotating teachers", "All levels"],
    ["16:00", 60, "Yoga Basics", "basics", "Hannah Brooks", "Beginner"]
  ],
  Sunday: [
    ["08:30", 45, "Sunday Morning Meditation", "breath", "Daniel Reyes", "All levels"],
    ["10:00", 75, "Slow Vinyasa", "vinyasa", "Jess Calloway", "All levels"],
    ["16:00", 60, "Community Class · Pay What You Can", "slowflow", "Lauren Whitaker", "All levels"],
    ["17:30", 75, "Yin & Sound Bath", "yin", "Hannah Brooks", "All levels"]
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
    excerpt: "You don't need a full class to feel the benefits of yoga. These five gentle postures will get your energy moving before your first cup of coffee.",
    body: [
      "Mornings set the tone for the whole day. A short, mindful practice right after waking helps release the stiffness of sleep, brings fresh blood flow to the spine and gives your mind a quiet moment before the inbox opens.",
      "Start seated for one minute with long, slow breaths. Move into Cat-Cow for eight rounds, letting the breath lead the movement. Step back into Downward Dog and pedal the feet to wake up the calves and hamstrings.",
      "From there, walk to the front of your mat for a gentle Standing Forward Fold, then rise slowly into Mountain Pose. Finish with three rounds of Sun Salutation A at your own pace, and one minute of stillness.",
      "Consistency matters far more than intensity. Ten minutes every day will change your body more than one long session a week. Roll out your mat the night before so it's waiting for you."
    ]
  },
  {
    id: "breathwork-anxiety",
    title: "Breathwork for Anxiety: Three Breaths That Calm the Mind",
    cat: "Wellness",
    date: "Sep 10, 2026",
    read: "6 min read",
    img: "3822454/pexels-photo-3822454.jpeg",
    excerpt: "Your breath is the fastest bridge to your nervous system. Learn box breathing, alternate-nostril breathing and the 4-7-8 breath to find calm anywhere.",
    body: [
      "When we feel anxious, breathing becomes short and shallow. Breathwork — known in the yoga tradition as pranayama — reverses this pattern and signals safety to the nervous system.",
      "Box breathing is the simplest place to start: inhale for four counts, hold for four, exhale for four, hold for four. Repeat for two minutes at your desk, in traffic on I-35 or before a big meeting.",
      "Alternate-nostril breathing (Nadi Shodhana) is a classic balancing practice. Close the right nostril with your thumb and inhale left; close the left with your ring finger and exhale right. Continue for five minutes.",
      "The 4-7-8 breath is perfect before sleep: inhale for four counts, hold for seven, and exhale slowly for eight. Practice these daily and join our Breathwork & Meditation class for guided sessions."
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
      "Walking into your first yoga class can feel intimidating, but every single person in the room was once a beginner too. Arrive ten minutes early so you can sign a quick waiver, meet your teacher and settle in.",
      "Wear comfortable, stretchy clothing that lets you move freely. We provide mats, blocks, straps and bolsters, so all you need to bring is a water bottle and an open mind. Parking is free in the lot behind the studio.",
      "Let your teacher know about any injuries or health conditions. They will offer modifications so the practice works for your body. Rest in Child's Pose whenever you need to — it's always allowed.",
      "Most importantly, don't compare yourself with others. Yoga is not a performance. Our Yoga Basics class is designed to build your confidence step by step."
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
    title: "Eating for Energy: What to Eat Before and After Class",
    cat: "Nutrition",
    date: "Jul 30, 2026",
    read: "7 min read",
    img: "14133435/pexels-photo-14133435.jpeg",
    excerpt: "The right snack at the right time can make or break your practice. Here's how our teachers fuel up — and what they skip.",
    body: [
      "What you eat affects how you feel on the mat. Twisting and folding on a full stomach is no fun, but neither is running out of steam halfway through a Hot Power Flow.",
      "Leave at least two hours between a full meal and your practice. If you need something closer to class, keep it light: a banana, a handful of almonds or half a peanut butter toast about 45 minutes before.",
      "Afterward, rehydrate first — especially after a heated class, when electrolytes help. Then go for a balanced plate with protein, whole grains and plenty of color. A breakfast taco with eggs, black beans and avocado is a studio favorite.",
      "Above all, eat mindfully. Sit down, put your phone away and chew slowly — it's a meditation in itself."
    ]
  },
  {
    id: "hill-country-retreat",
    title: "Highlights from Our Summer Retreat in the Texas Hill Country",
    cat: "Retreats",
    date: "Jul 12, 2026",
    read: "6 min read",
    img: "35978212/pexels-photo-35978212/free-photo-of-serene-group-yoga-session-in-jawa-barat.jpeg",
    excerpt: "Four days of sunrise practice by the river, campfires under the stars and friendships that will last a lifetime.",
    body: [
      "This June, twenty-four of our students joined us for a long-weekend retreat in the Texas Hill Country. Each day began with sunrise practice in an open-air pavilion and ended around the campfire.",
      "Between sessions, we floated the river, hiked to a hidden swimming hole and shared simple, delicious farm-to-table meals together.",
      "For many, the highlight was the silent morning — a few phone-free hours of complete quiet that allowed everyone to turn inward and truly rest.",
      "Registration for our fall retreat is open now. Join our newsletter to be the first to hear about future dates."
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

// "?&body=" is the form both iOS and Android accept.
const smsLink = text => `sms:+${SITE.sms}?&body=${encodeURIComponent(text)}`;

function usDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

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
      el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
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
    phone: v => /^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v.trim()) || "Please enter a valid 10-digit phone number.",
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
    const txt = $("#successText");
    if (txt && SITE.sms) {
      txt.href = smsLink(`Hi! I just requested a ${form.elements.classType.selectedOptions[0].text} class on ${usDate(data.date)}. My name is ${data.name}.`);
      txt.hidden = false;
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
      msg.textContent = sent ? "Thank you — you're on the list!" : "Sorry, that didn't work. Please try again.";
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

  if (SITE.sms) {
    const a = document.createElement("a");
    a.className = "text-float";
    a.href = smsLink("Hi! I'd like to know more about your yoga classes.");
    a.setAttribute("aria-label", "Text the studio");
    a.title = "Text us";
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.7A8.4 8.4 0 1 1 21 11.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>';
    document.body.appendChild(a);
    document.body.classList.add("has-text");
    // On the home page, stay out of the way of the hero badges until the visitor scrolls.
    if ($(".hero")) {
      const sync = () => a.classList.toggle("is-hidden", window.scrollY < 300);
      sync();
      window.addEventListener("scroll", sync, { passive: true });
    }
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
