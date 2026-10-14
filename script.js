/*------- THEME SWITCHER -------*/
const root = document.documentElement;
const els ={
    themeBtn: $('theme-toggle'),
    themeLabel: $('theme-label'),
}
function applyTheme(theme) {
    const dark = theme === "dark";
    root.dataset.theme = theme;
    els.themeLabel.textContent = dark ? "Light" : "Dark";
    els.themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    try {localStorage.setItem("theme", theme);} catch {}
}
function initTheme() {
 let saved =null;
 try { saved= localStorage.getItem("theme"); } catch {}
 const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
 applyTheme(saved || (prefersDark ? "dark" : "light"));

 els.themeBtn.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});
}