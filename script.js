// Détection réelle du thème système
function isSystemDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setTheme(mode) {
  const body = document.body;
  body.classList.remove("light", "dark");

  if (mode === "light") {
    body.classList.add("light");
  } else if (mode === "dark") {
    body.classList.add("dark");
  }
  // "system" = on applique le vrai thème du système

  localStorage.setItem("theme", mode);

  // Mise à jour visuelle
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === mode);
  });
}

function switchLang(lang) {
  if (lang === 'fr') {
    window.location.href = '../fr/index.html';
  } else {
    window.location.href = '../en/index.html';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Par défaut : vrai thème système
    setTheme("system");
  }

  // Boutons
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });

  // Suivi des changements système en temps réel
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (_) => {
    if (localStorage.getItem("theme") === "system") {
      setTheme("system");
    }
  });
});
