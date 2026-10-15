/*------- THEME SWITCHER -------*/
const root = document.documentElement;
const toggleBtn = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.dataset.theme = theme;
  themeLabel.textContent = isDark ? "Light" : "Dark";
  toggleBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  localStorage.setItem("theme", theme);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(localStorage.getItem("theme") ?? (prefersDark ? "dark" : "light"));

toggleBtn.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

/// ===== Start =====
async function init() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    planets = await response.json();

    renderTable();
    const earth = planets.find((p) => p.name === "Earth");
    if (earth) showPlanet(earth); // the design opens on Earth
  } catch (error) {
    console.error("Could not load planets:", error);
    showStatus(
      "Couldn't load planet data",
      "Check your connection and refresh the page.",
    );
  }
}

init();
