/*------- THEME SWITCHER -------*/
const root = document.documentElement;
const els ={
    themeBtn: $('theme-toggle'),
    themeLabel: $('theme-label'),
}
function toggleTheme(theme) {
    const dark = theme === "dark";
    root.dataset.theme = theme;
    els.themeLabel.textContent = dark ? "Light" : "Dark";
    els.themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    try {localStorage.setItem("theme", theme);} catch {}
}