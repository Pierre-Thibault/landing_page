function setTheme(mode) {
  const body = document.body;
  body.classList.remove("light", "dark");
  
  if (mode === "light") {
    body.classList.add("light");
  } else if (mode === "dark") {
    body.classList.add("dark");
  }
  // "system" = on ne met rien, le CSS par défaut + media query s'en occupe
  
  localStorage.setItem("theme", mode);
  
  // Mise à jour du bouton actif
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === mode);
  });
}

// Détecte le thème système
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Par défaut : suivre le système
    setTheme("system");
  }
  
  // Écoute les changements de thème système en temps réel
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme") === "system") {
      setTheme("system");
    }
  });
  
  // Boutons
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });
});
