/* ------------------------------------ */
/* LOADING SCREEN */
/* ------------------------------------ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 900);
});

/* ------------------------------------ */
/* SMOOTH SCROLL */
/* ------------------------------------ */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener("click", e => {
    if (a.hash) {
      e.preventDefault();
      document.querySelector(a.hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ------------------------------------ */
/* BACKGROUND AUDIO */
/* ------------------------------------ */
const audio = document.getElementById("bg-audio");
const soundBtn = document.getElementById("sound-btn");
let playing = false;

soundBtn.addEventListener("click", () => {
  playing = !playing;
  if (playing) { audio.play(); soundBtn.textContent = "🔊"; }
  else { audio.pause(); soundBtn.textContent = "🔇"; }
});

/* ------------------------------------ */
/* DARK MODE */
/* ------------------------------------ */
const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/* ------------------------------------ */
/* TRAILER MODAL */
/* ------------------------------------ */
const modal = document.getElementById("trailer-modal");
const iframe = document.getElementById("trailer-iframe");
const closeModal = document.getElementById("modal-close");

document.querySelectorAll(".trailer-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".film-card");
    const url = card.dataset.trailer;
    iframe.src = url + "?autoplay=1";
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

/* ------------------------------------ */
/* SCROLL FADE-IN */
/* ------------------------------------ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});
document.querySelectorAll('.event').forEach(el => observer.observe(el));

/* ------------------------------------ */
/* PARALLAX HERO MOVEMENT */
/* ------------------------------------ */
const heroTitle = document.querySelector(".title");
window.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;
  heroTitle.style.transform = `translate(${x}px, ${y}px)`;
});

/* ------------------------------------ */
/* 3D HOVER CARDS */
/* ------------------------------------ */
document.querySelectorAll(".film-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.1)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });
});

/* ------------------------------------ */
/* FLOATING EMBERS PARTICLES */
/* ------------------------------------ */
function createEmber() {
  const ember = document.createElement("div");
  ember.classList.add("ember");
  ember.style.left = Math.random() * window.innerWidth + "px";
  ember.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(ember);
  setTimeout(() => ember.remove(), 6000);
}

setInterval(createEmber, 300);

/* Add ember CSS */
const emberCSS = document.createElement("style");
emberCSS.innerHTML = `
  .ember {
    position: fixed;
    bottom: 0;
    width: 6px;
    height: 6px;
    background: #ff7b00;
    border-radius: 50%;
    box-shadow: 0 0 10px #ff7b00;
    animation: rise linear forwards;
    z-index: 0;
    opacity: 0.8;
  }
  @keyframes rise {
    from { transform: translateY(0) scale(1); opacity: 1; }
    to { transform: translateY(-120vh) scale(0.2); opacity: 0; }
  }
`;
document.head.appendChild(emberCSS);

/* ------------------------------------ */
/* CURSOR GLOW FOLLOW */
/* ------------------------------------ */
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "180px";
glow.style.height = "180px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle, rgba(255,123,0,0.2), transparent)";
glow.style.zIndex = "1";
document.body.appendChild(glow);

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX - 90 + "px";
  glow.style.top = e.clientY - 90 + "px";
});
