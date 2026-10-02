/**
 * Romantic website for Ariana — by Saifeddine
 * Pure HTML / CSS / Vanilla JS
 */

/* ===== Photo paths (all files in pics/) ===== */
function photoUrl(name) {
  return "pics/" + encodeURIComponent(name);
}

/**
 * Music: add MP3 files to music/ and list them here (file name only).
 */
const MUSIC_TRACKS = [
  { title: "Crambone — Tom & Jerry", file: "Tom and Jerry - Crambone [youaretube.com].mp3" },
];

function musicTrackSrc(file) {
  return "music/" + encodeURIComponent(file);
}

const PHOTOS = [
  "WhatsApp Image 2026-10-02 at 15.24.40 (1).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.40 (2).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.40.jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (1).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (2).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (3).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (4).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (5).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (6).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41 (7).jpeg",
  "WhatsApp Image 2026-10-02 at 15.24.41.jpeg",
];

/** Love lines for the story section — photos are shuffled; these are always about her. */
const HOW_I_LOVE_YOU = [
  { headline: "The honest truth", text: "I love you more than I know how to explain — and I keep trying anyway." },
  { headline: "Every day", text: "You are my favorite thought before I sleep and the first one when I wake up." },
  { headline: "Distance", text: "Morocco and Switzerland are far on a map. You never feel far from my heart." },
  { headline: "Your smile", text: "One smile from you can undo my whole bad day. That is not fair. I love it." },
  { headline: "Your laugh", text: "Your laugh is my favorite sound in the world. I would listen on repeat forever." },
  { headline: "Just you", text: "I love you when you are silly, serious, sleepy, stubborn — all of it. Especially all of it." },
  { headline: "Choosing you", text: "If I had to choose again, I would choose you. Every single time. No hesitation." },
  { headline: "Home", text: "You feel like home. Not a place — a person. You." },
  { headline: "Proud", text: "I am so proud to love you. Ariana, you are extraordinary." },
  { headline: "Forever energy", text: "I do not need a perfect plan. I need you in my future. That is enough for me." },
  { headline: "Always", text: "I love you, Ariana. Today, tomorrow, and every chapter after. — Saifeddine ❤️" },
];

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const LOVE_MESSAGES = [
  "Because your smile can fix his entire day.",
  "Because Switzerland somehow produced his favorite human.",
  "Because talking to you never feels like enough.",
  "Because you're beautiful even when you don't believe it.",
  "Because you make distance feel temporary.",
  "Because Ariana > everyone.",
  "Because even your annoying moments are somehow cute.",
  "Because your laugh is his favorite sound.",
  "Because you make normal days feel like adventures.",
  "Because Morocco is proud you exist.",
  "Because he misses you before the conversation even ends.",
  "Because your kindness is unfair to everyone else.",
  "Because you play guitar and his heart listens.",
  "Because you're stubborn in the cutest way possible.",
  "Because every photo of you is his new favorite.",
  "Because you chose him too.",
  "Because your voice calms everything.",
  "Because you make him want to be better.",
  "Because distance never stood a chance.",
  "Because you're his first thought in the morning.",
  "Because you're his last thought at night.",
  "Because you turn ordinary into unforgettable.",
  "Because he would cross 1,800 km for one hug.",
  "Because your eyes tell stories he never gets tired of.",
  "Because you are home in human form.",
  "Because he loves you more with every chapter.",
  "Because you're the plot twist he needed.",
  "Because Switzerland + Morocco = magic.",
  "Because forever sounds better with you in it.",
  "Because there is no version of his future without you.",
  "Because you are the reason this website exists.",
  "Because Saifeddine loves Ariana. Full stop.",
];

const QUIZ_QUESTIONS = [
  { q: "Who falls asleep first?", ariana: "Probably Ariana — Saifeddine is still typing.", saif: "Saifeddine claims it's research. It's not." },
  { q: "Who is more stubborn?", ariana: "Ariana. Saifeddine has the data.", saif: "Saifeddine. He wrote this website anyway." },
  { q: "Who misses the other first?", ariana: "Ariana. Saifeddine misses harder (scientifically unproven).", saif: "Saifeddine. Obviously." },
  { q: "Who takes more photos?", ariana: "Ariana — she makes everything photogenic.", saif: "Saifeddine — he needs proof you exist." },
  { q: "Who starts silly arguments?", ariana: "Both. But Ariana wins them.", saif: "Saifeddine. Then he brings food." },
  { q: "Who is cuter?", ariana: "Ariana. Case closed.", saif: "Ariana. Saifeddine accepts defeat." },
  { q: "Who loves more?", special: true },
];

const MOODS = [
  { id: "happy", emoji: "😊", label: "Happy" },
  { id: "missing", emoji: "🥺", label: "Missing me" },
  { id: "angry", emoji: "😡", label: "Angry at Saifeddine" },
  { id: "sleepy", emoji: "😴", label: "Sleepy" },
  { id: "love", emoji: "❤️", label: "In love" },
  { id: "silly", emoji: "😂", label: "Silly" },
];

const MOOD_RESPONSES = {
  happy: "That makes two of us. Your happiness is basically Saifeddine's favorite notification.",
  missing: "Same.\nProbably more.\nActually definitely more.",
  angry: "Emergency protocol activated.\nStep 1: Saifeddine apologizes.\nStep 2: Saifeddine apologizes again.\nStep 3: Food.\nStep 4: Hug.\nStep 5: Ariana wins.",
  sleepy: "Go sleep Ariana.\nThis website will still love you tomorrow.",
  love: "Good. Because Saifeddine is deeply, ridiculously, permanently in love with you.",
  silly: "Perfect mood. Official couple energy detected.",
};

const THINGS_LOVE = [
  "Your smile.",
  "Your laugh.",
  "Your kindness.",
  "Your beautiful chaos.",
  "The way you make normal moments special.",
  "The way you make me smile.",
  "How cute you look when you're focused.",
  "Your voice.",
  "Your personality.",
  "And approximately 8 billion other things.",
];

const BUCKET_ITEMS = [
  "Travel somewhere new together",
  "Watch a sunset together",
  "See the stars far from the city",
  "Take a terrible couple selfie",
  "Cook together",
  "Dance without music",
  "Go on a road trip",
  "Visit Morocco together",
  "Visit Switzerland together",
  "Create our own traditions",
];

const STATS = [
  { label: "Times Saifeddine thought about Ariana today", value: 999, suffix: "+", animate: true },
  { label: "Times Ariana looked beautiful", text: "ERROR: Number too large" },
  { label: "Arguments Saifeddine won", value: 0, animate: true },
  { label: "Chance Saifeddine chooses Ariana again", value: 100, suffix: "%", animate: true },
  { label: "Probability Ariana steals the blanket", value: 97.4, suffix: "%", animate: true, decimal: true },
  { label: "Hugs needed", text: "∞" },
  { label: "Distance that can stop us", value: 0, suffix: " km", animate: true },
];

const SECRETS = [
  "Ariana found a secret!\nReward: Unlimited Saifeddine hugs.",
  "You're very curious.\nI like that.",
  "Fun fact: Saifeddine is probably thinking about you right now.",
  "Achievement unlocked: Professional girlfriend.",
];

const MESSAGE_SCRIPT = [
  { from: "ariana", text: "Miss you." },
  { from: "saif", text: "Miss you more." },
  { from: "ariana", text: "No, I miss YOU more." },
  { from: "saif", text: "Impossible." },
];

const NO_LABELS = ["No", "Are you sure?", "Really Ariana? 😂", "Stop chasing me.", "You know the answer."];

/* ===== Character builder (HTML + CSS cartoons) ===== */
function buildCharacter(type, opts = {}) {
  const isAriana = type === "ariana";
  const tea = opts.tea ? '<div class="prop tea" aria-hidden="true"></div>' : "";
  const guitar = opts.guitar ? '<div class="prop guitar" aria-hidden="true"></div>' : "";
  const phone = opts.phone ? '<div class="prop phone" aria-hidden="true"></div>' : "";
  return `
    <div class="char-shadow"></div>
    <div class="char-bounce">
      ${isAriana ? '<div class="hair hair-long"></div>' : '<div class="hair hair-short"></div>'}
      <div class="head">
        <div class="face">
          <span class="eye left"><span class="pupil"></span></span>
          <span class="eye right"><span class="pupil"></span></span>
          <span class="blush left"></span>
          <span class="blush right"></span>
          <span class="mouth"></span>
        </div>
      </div>
      <div class="torso ${isAriana ? "dress" : "casual"}"></div>
      <div class="arm arm-left"></div>
      <div class="arm arm-right"></div>
      ${guitar}${tea}${phone}
    </div>`;
}

function mountCharacters() {
  const map = [
    ["introAriana", "ariana", {}],
    ["introSaif", "saif", {}],
    ["guitarAriana", "ariana", { guitar: true }],
    ["guitarSaif", "saif", { tea: true }],
    ["distSaif", "saif", {}],
    ["distAriana", "ariana", {}],
    ["msgAriana", "ariana", { phone: true }],
    ["msgSaif", "saif", { phone: true }],
    ["argAriana", "ariana", {}],
    ["argSaif", "saif", {}],
    ["hugSaif", "saif", {}],
    ["hugAriana", "ariana", {}],
    ["musicAriana", "ariana", { guitar: true }],
    ["musicSaif", "saif", {}],
    ["finalAriana", "ariana", { guitar: true }],
    ["finalSaif", "saif", {}],
  ];
  map.forEach(([id, type, opts]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = buildCharacter(type, opts);
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  mountCharacters();
  initTheme();
  initIntro();
  initReveal();
  initHero();
  initOurStory();
  initGuitarNotes();
  initDistanceScene();
  initMessageScene();
  initArgumentSigns();
  initHugScene();
  initMusicPlayer();
  initStats();
  initLoveQuestion();
  initHeartGame();
  initQuiz();
  initLoveMessages();
  initMood();
  initLoveCards();
  initLoveLetter();
  initFutureBars();
  initBucketList();
  initFinalSection();
  initEasterEggs();
  initAmbient();
  initCursorTrail();
  initLightbox();
});

function initTheme() {
  const hour = new Date().getHours();
  const isDay = hour >= 7 && hour < 19;
  document.body.classList.add(isDay ? "theme-day" : "theme-night");
}

function initIntro() {
  const btn = document.getElementById("openStoryBtn");
  const intro = document.getElementById("intro-screen");
  const site = document.getElementById("site");

  btn.addEventListener("click", () => {
    spawnFloatingHearts(24);
    intro.classList.add("exit");
    setTimeout(() => {
      intro.classList.add("hidden");
      site.classList.remove("hidden");
      site.classList.add("active");
      initHeroParallax();
    }, 900);
  });
}

function spawnFloatingHearts(count) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = ["❤", "♥", "✨", "💕"][i % 4];
    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-20px";
    h.style.animationDelay = Math.random() * 0.8 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3500);
  }
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-scale, .love-card-item");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function initHero() {
  const heroBg = document.getElementById("heroBg");
  const finalBg = document.getElementById("finalBg");
  const heroPhoto = photoUrl(PHOTOS[10]);
  const finalPhoto = photoUrl(PHOTOS[0]);
  heroBg.style.backgroundImage = `url("${heroPhoto}")`;
  finalBg.style.backgroundImage = `url("${finalPhoto}")`;
}

let parallaxBound = false;
function initHeroParallax() {
  if (parallaxBound) return;
  parallaxBound = true;
  const heroBg = document.getElementById("heroBg");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
      }
    },
    { passive: true }
  );
}

function initOurStory() {
  const wrap = document.getElementById("ourStoryTimeline");
  if (!wrap) return;

  const shuffledPhotos = shuffleArray(PHOTOS);
  const count = Math.max(HOW_I_LOVE_YOU.length, PHOTOS.length);

  for (let i = 0; i < count; i++) {
    const love = HOW_I_LOVE_YOU[i % HOW_I_LOVE_YOU.length];
    const file = shuffledPhotos[i % shuffledPhotos.length];
    const div = document.createElement("article");
    div.className = "timeline-item";
    div.style.transitionDelay = i * 0.08 + "s";
    div.innerHTML = `
      <span class="timeline-dot"></span>
      <h3>${love.headline}</h3>
      <p>${love.text}</p>
      <img src="${photoUrl(file)}" alt="Us" loading="lazy" class="story-photo">`;
    const img = div.querySelector(".story-photo");
    img.addEventListener("click", () => openLightbox(photoUrl(file)));
    wrap.appendChild(div);
  }

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.2 }
  );
  wrap.querySelectorAll(".timeline-item").forEach((el) => io.observe(el));
}

function initGuitarNotes() {
  const wrap = document.getElementById("musicNotesWrap");
  const symbols = ["♪", "♫", "♬", "♪", "♫"];
  symbols.forEach((s, i) => {
    const n = document.createElement("span");
    n.className = "music-note" + (i % 2 ? " note-to-saif" : "");
    n.textContent = s;
    n.style.left = 20 + i * 14 + "%";
    n.style.top = 15 + (i % 3) * 12 + "%";
    n.style.animationDelay = i * 0.4 + "s";
    n.addEventListener("click", (ev) => {
      ev.stopPropagation();
      noteHeartBurst(ev.clientX, ev.clientY);
    });
    wrap.appendChild(n);
  });
}

function noteHeartBurst(x, y) {
  for (let i = 0; i < 8; i++) {
    const p = document.createElement("span");
    p.className = "note-pop-heart";
    p.textContent = "❤";
    p.style.left = x + (Math.random() - 0.5) * 40 + "px";
    p.style.top = y + "px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

function initDistanceScene() {
  const stage = document.querySelector(".distance-stage");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && stage && !stage.dataset.played) {
          stage.dataset.played = "1";
          stage.classList.add("active");
        }
      });
    },
    { threshold: 0.35 }
  );
  if (stage) io.observe(stage);
}

function initMessageScene() {
  const stage = document.getElementById("messagesScene");
  let step = 0;
  const run = () => {
    const left = document.getElementById("bubblesLeft");
    const right = document.getElementById("bubblesRight");
    left.innerHTML = "";
    right.innerHTML = "";
    step = 0;
    const showTyping = (host) => {
      const t = document.createElement("div");
      t.className = "msg-bubble show typing-dots";
      t.innerHTML = "<span></span><span></span><span></span>";
      t.style.left = "10%";
      t.style.top = step * 18 + 5 + "%";
      host.appendChild(t);
      return t;
    };

    const showNext = () => {
      if (step >= MESSAGE_SCRIPT.length) {
        return;
      }
      const msg = MESSAGE_SCRIPT[step];
      const host = msg.from === "ariana" ? left : right;
      const typing = showTyping(host);
      setTimeout(() => {
        typing.remove();
        const b = document.createElement("div");
        b.className = "msg-bubble show";
        b.textContent = msg.text;
        b.style.left = "10%";
        b.style.top = step * 18 + "%";
        host.appendChild(b);
        step++;
        if (step >= MESSAGE_SCRIPT.length) {
          setTimeout(() => stage?.classList.add("messages-done"), 500);
        } else {
          setTimeout(showNext, 1400);
        }
      }, 700);
    };
    showNext();
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && stage && !stage.dataset.played) {
          stage.dataset.played = "1";
          run();
        }
      });
    },
    { threshold: 0.3 }
  );
  if (stage) io.observe(stage);
}

function initArgumentSigns() {
  const sign = document.getElementById("sorrySign");
  const argAriana = document.getElementById("argAriana");
  const texts = ["Sorry 😭", "Still sorry.", "Food?"];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % texts.length;
    if (sign) sign.textContent = texts[i];
    if (texts[i] === "Food?" && argAriana) {
      argAriana.classList.remove("char--angry");
    }
  }, 2000);
}

function initHugScene() {
  const stage = document.querySelector(".hug-stage");
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && stage?.classList.add("active")),
    { threshold: 0.4 }
  );
  if (stage) io.observe(stage);
}

/* ===== Music player ===== */
let trackIndex = 0;
let musicReady = false;

function initMusicPlayer() {
  const audio = document.getElementById("audioPlayer");
  const playBtn = document.getElementById("playPause");
  const prev = document.getElementById("prevTrack");
  const next = document.getElementById("nextTrack");
  const progress = document.getElementById("progressBar");
  const vol = document.getElementById("volume");
  const now = document.getElementById("nowPlaying");
  const vis = document.getElementById("visualizer");
  const cur = document.getElementById("currentTime");
  const dur = document.getElementById("duration");

  if (!MUSIC_TRACKS.length) {
    now.textContent = "Add MP3 files to music/ and list them in script.js → MUSIC_TRACKS";
    [playBtn, prev, next].forEach((b) => {
      b.disabled = true;
      b.style.opacity = "0.45";
    });
    return;
  }

  musicReady = true;

  function loadTrack(i) {
    trackIndex = (i + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
    const t = MUSIC_TRACKS[trackIndex];
    audio.src = musicTrackSrc(t.file);
    now.textContent = t.title;
    progress.value = 0;
  }

  loadTrack(0);

  if (MUSIC_TRACKS.length <= 1) {
    prev.disabled = true;
    next.disabled = true;
    prev.style.opacity = "0.45";
    next.style.opacity = "0.45";
  }

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      playBtn.textContent = "⏸";
      vis.classList.add("playing");
    } else {
      audio.pause();
      playBtn.textContent = "▶";
      vis.classList.remove("playing");
    }
  });

  prev.addEventListener("click", () => {
    loadTrack(trackIndex - 1);
    if (!audio.paused) audio.play();
  });

  next.addEventListener("click", () => {
    loadTrack(trackIndex + 1);
    if (!audio.paused) audio.play();
  });

  vol.addEventListener("input", () => {
    audio.volume = vol.value;
  });
  audio.volume = vol.value;

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      progress.value = (audio.currentTime / audio.duration) * 100;
      cur.textContent = formatTime(audio.currentTime);
      dur.textContent = formatTime(audio.duration);
    }
  });

  progress.addEventListener("input", () => {
    if (audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });

  audio.addEventListener("ended", () => {
    loadTrack(trackIndex + 1);
    audio.play();
  });
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ":" + String(sec).padStart(2, "0");
}

function initStats() {
  const grid = document.getElementById("statsGrid");
  STATS.forEach((s) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    if (s.text) {
      card.innerHTML = `<p class="stat-label">${s.label}</p><p class="stat-value">${s.text}</p>`;
    } else {
      card.innerHTML = `<p class="stat-label">${s.label}</p><p class="stat-value" data-target="${s.value}" data-suffix="${s.suffix || ""}" data-decimal="${s.decimal || false}">0</p>`;
    }
    grid.appendChild(card);
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll("[data-target]").forEach((el) => animateStat(el));
      });
    },
    { threshold: 0.3 }
  );
  io.observe(grid);
}

function animateStat(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const decimal = el.dataset.decimal === "true";
  const duration = 1500;
  const start = performance.now();
  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const val = target * t;
    el.textContent = (decimal ? val.toFixed(1) : Math.floor(val)) + suffix;
    if (t < 1) requestAnimationFrame(frame);
    else el.textContent = (decimal ? target.toFixed(1) : target) + suffix;
  }
  requestAnimationFrame(frame);
}

/* Love question */
function initLoveQuestion() {
  const no = document.getElementById("noLove");
  const yes = document.getElementById("yesLove");
  const result = document.getElementById("loveResult");
  let attempts = 0;
  const card = document.querySelector(".love-question-card");

  no.addEventListener("click", () => {
    if (attempts < NO_LABELS.length) {
      no.textContent = NO_LABELS[attempts];
      attempts++;
    }
    const rect = card.getBoundingClientRect();
    const maxX = rect.width - no.offsetWidth - 20;
    const maxY = rect.height - no.offsetHeight - 20;
    no.style.position = "absolute";
    no.style.left = 10 + Math.random() * Math.max(20, maxX) + "px";
    no.style.top = 60 + Math.random() * Math.max(20, maxY) + "px";
    if (attempts >= NO_LABELS.length) {
      no.classList.add("hidden");
      yes.style.transform = "scale(1.15)";
    }
  });

  yes.addEventListener("click", () => {
    result.classList.remove("hidden");
    heartExplosion(window.innerWidth / 2, window.innerHeight / 2);
  });
}

function heartExplosion(cx, cy) {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("span");
    h.className = "heart-explosion";
    h.textContent = "❤";
    h.style.left = cx + "px";
    h.style.top = cy + "px";
    const angle = (Math.PI * 2 * i) / 30;
    const dist = 80 + Math.random() * 120;
    h.style.setProperty("--tx", Math.cos(angle) * dist + "px");
    h.style.setProperty("--ty", Math.sin(angle) * dist + "px");
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1100);
  }
}

/* Heart game */
function initHeartGame() {
  const area = document.getElementById("heartGameArea");
  const scoreEl = document.getElementById("heartScore");
  const msg = document.getElementById("heartGameMsg");
  let score = 0;
  let spawnTimer;

  function spawnHeart() {
    const h = document.createElement("span");
    h.className = "game-heart";
    h.textContent = "❤";
    h.style.left = Math.random() * (area.clientWidth - 40) + "px";
    h.style.top = Math.random() * (area.clientHeight - 40) + "px";
    h.addEventListener("click", () => {
      score++;
      scoreEl.textContent = score;
      h.remove();
      if (score === 5) msg.textContent = "Good start 😏";
      if (score === 10) {
        msg.textContent = "Congratulations Ariana. You officially stole Saifeddine's heart.";
      }
      if (score === 20) msg.textContent = "Okay okay. It's already yours.";
    });
    area.appendChild(h);
    setTimeout(() => h.remove(), 3500);
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          spawnTimer = setInterval(spawnHeart, 900);
        } else {
          clearInterval(spawnTimer);
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(area);
}

/* Quiz */
let quizIndex = 0;
function initQuiz() {
  const qEl = document.getElementById("quizQuestion");
  const rEl = document.getElementById("quizResult");
  const buttons = document.querySelectorAll("#quiz [data-pick]");

  function showQuestion() {
    rEl.textContent = "";
    qEl.textContent = QUIZ_QUESTIONS[quizIndex].q;
  }
  showQuestion();

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const q = QUIZ_QUESTIONS[quizIndex];
      const pick = btn.dataset.pick;
      if (q.special) {
        rEl.textContent = "Wrong answer.";
        setTimeout(() => {
          rEl.textContent = "Both ❤️";
        }, 1200);
        quizIndex = 0;
        setTimeout(showQuestion, 2500);
        return;
      }
      rEl.textContent = pick === "Ariana" ? q.ariana : q.saif;
      quizIndex = (quizIndex + 1) % QUIZ_QUESTIONS.length;
      setTimeout(showQuestion, 2800);
    });
  });
}

function initLoveMessages() {
  const btn = document.getElementById("whyLoveBtn");
  const display = document.getElementById("loveMessageDisplay");
  btn.addEventListener("click", () => {
    const msg = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];
    display.textContent = msg;
    display.classList.add("visible");
  });
}

function initMood() {
  const wrap = document.getElementById("moodButtons");
  const response = document.getElementById("moodResponse");
  MOODS.forEach((m) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "mood-btn";
    b.textContent = `${m.emoji} ${m.label}`;
    b.addEventListener("click", () => {
      response.textContent = MOOD_RESPONSES[m.id];
    });
    wrap.appendChild(b);
  });
}

function initLoveCards() {
  const wrap = document.getElementById("loveCards");
  THINGS_LOVE.forEach((text, i) => {
    const c = document.createElement("div");
    c.className = "love-card-item";
    c.style.transitionDelay = i * 0.06 + "s";
    c.textContent = text;
    wrap.appendChild(c);
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.15 }
  );
  wrap.querySelectorAll(".love-card-item").forEach((el) => io.observe(el));
}

function initLoveLetter() {
  const btn = document.getElementById("openLetterBtn");
  const env = document.getElementById("envelope");
  const letter = document.getElementById("letterContent");
  btn.addEventListener("click", () => {
    env.classList.add("open");
    setTimeout(() => {
      letter.classList.remove("hidden");
      letter.classList.add("visible");
    }, 600);
  });
}

function initFutureBars() {
  const data = [
    { label: "More adventures", pct: 80 },
    { label: "More laughs", pct: 100 },
    { label: "More photos", pct: 80 },
    { label: "More memories", pct: 100 },
    { label: "Growing old together", pct: 100, inf: true },
  ];
  const wrap = document.getElementById("futureBars");
  data.forEach((row) => {
    const div = document.createElement("div");
    div.className = "future-row";
    const pctLabel = row.inf ? "∞" : `${row.pct}%`;
    div.innerHTML = `<label><span>${row.label}</span><span class="future-pct">${pctLabel}</span></label><div class="future-track"><div class="future-fill${row.inf ? " future-fill--infinite" : ""}" data-pct="${row.pct}"></div></div>`;
    wrap.appendChild(div);
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".future-fill").forEach((f) => {
            f.style.width = f.dataset.pct + "%";
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  io.observe(wrap);
}

const BUCKET_KEY = "ariana-bucket-v1";
function initBucketList() {
  const grid = document.getElementById("bucketGrid");
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(BUCKET_KEY) || "{}");
  } catch (_) {}

  BUCKET_ITEMS.forEach((label, i) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "bucket-item" + (saved[i] ? " done" : "");
    item.textContent = label;
    item.addEventListener("click", () => {
      item.classList.toggle("done");
      saved[i] = item.classList.contains("done");
      localStorage.setItem(BUCKET_KEY, JSON.stringify(saved));
    });
    grid.appendChild(item);
  });
}

function initFinalSection() {
  const lines = document.querySelectorAll(".reveal-final");
  const section = document.getElementById("final");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        lines.forEach((line) => {
          const delay = parseInt(line.dataset.delay, 10) * 700;
          setTimeout(() => line.classList.add("show"), delay);
        });
      });
    },
    { threshold: 0.25 }
  );
  io.observe(section);

  document.getElementById("oneLastThing")?.addEventListener("click", runFinalCelebration);
}

function runFinalCelebration() {
  const overlay = document.getElementById("finalOverlay");
  const particles = document.getElementById("celebrationParticles");
  const text = document.getElementById("celebrationText");
  const scene = document.getElementById("finalCartoonScene");
  const heart = document.getElementById("finalSceneHeart");
  const tbc = document.getElementById("tbcText");

  overlay.classList.remove("hidden");
  overlay.style.pointerEvents = "none";
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = ["❤", "✨", "⭐", "💕"][i % 4];
    p.style.left = Math.random() * 100 + "%";
    p.style.bottom = "-10px";
    p.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";
    p.style.animationDuration = 2 + Math.random() * 2 + "s";
    particles.appendChild(p);
  }

  setTimeout(() => text.classList.remove("hidden"), 800);
  setTimeout(() => {
    scene.classList.remove("hidden");
    scene.classList.add("active");
    const fa = document.getElementById("finalAriana");
    const fs = document.getElementById("finalSaif");
    if (fa) fa.innerHTML = buildCharacter("ariana", { guitar: true });
    if (fs) fs.innerHTML = buildCharacter("saif", {});
  }, 2200);
  setTimeout(() => heart.classList.remove("hidden"), 4500);
  setTimeout(() => heart.classList.add("show"), 4600);
  setTimeout(() => tbc.classList.remove("hidden"), 5500);
  setTimeout(() => {
    overlay.style.pointerEvents = "auto";
  }, 6000);

  overlay.addEventListener(
    "click",
    () => {
      overlay.classList.add("hidden");
    },
    { once: true }
  );
}

function initEasterEggs() {
  const positions = [
    [12, 8],
    [45, 92],
    [68, 15],
    [88, 75],
  ];
  SECRETS.forEach((msg, i) => {
    const h = document.createElement("button");
    h.type = "button";
    h.className = "secret-heart";
    h.textContent = "♥";
    const pos = positions[i] || [20 + i * 10, 10 + i * 20];
    h.style.top = pos[0] + "%";
    h.style.left = pos[1] + "%";
    h.setAttribute("aria-label", "Secret heart");
    h.addEventListener("click", (e) => {
      e.stopPropagation();
      showSecretToast(msg);
    });
    document.body.appendChild(h);
  });
}

function showSecretToast(msg) {
  const t = document.getElementById("secretToast");
  t.textContent = msg;
  t.classList.remove("hidden");
  setTimeout(() => t.classList.add("hidden"), 4500);
}

function initAmbient() {
  const wrap = document.getElementById("ambientDecor");
  const items = ["♥", "✦", "☁", "♪", "✿", "🦋"];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("span");
    s.textContent = items[i % items.length];
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDelay = -Math.random() * 20 + "s";
    s.style.animationDuration = 18 + Math.random() * 12 + "s";
    wrap.appendChild(s);
  }
}

function initCursorTrail() {
  if (window.matchMedia("(hover: none)").matches) return;
  const trail = document.getElementById("cursorTrail");
  let last = 0;
  document.addEventListener(
    "mousemove",
    (e) => {
      const now = Date.now();
      if (now - last < 80) return;
      last = now;
      const s = document.createElement("span");
      s.textContent = Math.random() > 0.5 ? "♥" : "✦";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      trail.appendChild(s);
      setTimeout(() => s.remove(), 900);
    },
    { passive: true }
  );
}

function initLightbox() {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxClose").addEventListener("click", () => lb.classList.add("hidden"));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) lb.classList.add("hidden");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lb.classList.add("hidden");
  });
}

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  lb.classList.remove("hidden");
}
