function setTheme(mode) {
  const body = document.body;
  body.classList.remove("light", "dark");
  
  if (mode === "light") {
    body.classList.add("light");
  } else if (mode === "dark") {
    body.classList.add("dark");
  }
  // "system" = on enlève toutes les classes (CSS par défaut sombre)
  
  localStorage.setItem("theme", mode);
  
  // Mise à jour visuelle des boutons
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === mode);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Par défaut : suivre le système
    setTheme("system");
  }
  
  // Attacher les clics
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });
});
