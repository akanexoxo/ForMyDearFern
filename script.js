document.addEventListener("DOMContentLoaded", () => {

  const sections = {
    intro: document.getElementById("intro"),
    memory: document.getElementById("memory"),
    feel: document.getElementById("feel"),
    end: document.getElementById("end")
  };

  const bgm = document.getElementById("bgm");
  const photo = document.getElementById("photo");
  const caption = document.getElementById("caption");

  const captions = [
    "month 1 — first smile",
    "month 2 — closer",
    "month 3 — warmth",
    "month 4 — still choosing",
    "month 5 — gentle days",
    "month 6 — half a year",
    "month 7 — comfort",
    "month 8 — safe",
    "month 9 — missing you",
    "month 10 — calm",
    "month 11 — holding on",
    "month 12 — one year",
    "month 13 — dreaming",
    "month 14 — my place",
    "month 15 — always here",
    "month 16 — being myself",
    "month 17 — still us",
    "month 18 — here we are"
  ];

  let index = 0;

  document.querySelector(".enter").addEventListener("click", () => {
    switchTo("memory");

    bgm.currentTime = 0;
    bgm.volume = 0.3;
    bgm.play().catch(() => {});
  });

  document.getElementById("next").onclick = next;
  document.getElementById("prev").onclick = prev;

  function switchTo(name) {
    Object.values(sections).forEach(s => s.classList.remove("active"));
    sections[name].classList.add("active");
  }

  function update() {
    photo.style.opacity = 0;
    photo.style.filter = "blur(6px)";
    setTimeout(() => {
      photo.src = `month${index + 1}.jpg`;
      caption.textContent = captions[index];
      photo.style.opacity = 1;
      photo.style.filter = "blur(0)";
    }, 400);
  }

  function next() {
    index++;
    if (index < captions.length) {
      update();
    } else {
      switchTo("feel");
      setTimeout(() => {
        switchTo("end");
        setTimeout(() => {
          document.getElementById("final").textContent = "∞";
        }, 1500);
      }, 3500);
    }
  }

  function prev() {
    if (index > 0) {
      index--;
      update();
    }
  }

  /* emoji */
  const emojis = ["🤍", "🌸", "🌼"];
  const maxEmojis = 10;

  function createEmoji() {
    if (document.querySelectorAll(".emoji").length > maxEmojis) return;

    const e = document.createElement("div");
    e.className = "emoji";
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = (12000 + Math.random() * 6000) + "ms";

    document.body.appendChild(e);
    setTimeout(() => e.remove(), 18000);
  }

  setInterval(createEmoji, 2000);

});

