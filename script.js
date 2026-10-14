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
        isDark ? "Switch to light mode" : "Switch to dark mode");
    localStorage.setItem("theme", theme);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(localStorage.getItem("theme") ?? (prefersDark  ? "dark" : "light"));

toggleBtn.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});
