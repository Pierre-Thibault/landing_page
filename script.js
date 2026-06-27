function setTheme(mode) {
  const body = document.body;
  body.classList.remove("light");
  
  if (mode === "light") {
    body.classList.add("light");
  }
  
  localStorage.setItem("theme", mode);
}

function switchLang(lang) {
  if (lang === 'fr') {
    window.location.href = '../fr/index.html';
  } else {
    window.location.href = '../en/index.html';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    setTheme("light");
  }
  
  // Active state pour thème
  document.querySelectorAll(".theme-btn").forEach(btn => {
    if (btn.dataset.theme === saved) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setTheme(btn.dataset.theme);
    });
  });
  
  // Active state pour langue
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
