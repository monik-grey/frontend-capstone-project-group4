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

// ===== Planet data =====
const API_URL = "https://anurella.github.io/json/planet.json";

const searchForm = document.querySelector("#search-form");
const searchField = document.querySelector("#planet-search");
const searchError = document.querySelector("#search-error");
const card = document.querySelector("#planet-card");
const statusCard = document.querySelector("#status-card");

let planets = [];

function setText(id, value) {
    document.querySelector(id).textContent = value;
}

function showPlanet(p) {
    const image = document.querySelector("#planet-image");
    image.src = p.image;
    image.alt = `${p.name}`;

    setText("#planet-name", p.name);
    setText("#planet-type", p.type);
    setText("#planet-description", p.description);
    setText("#planet-gravity", p.gravity);
    setText("#planet-mass", p.mass);
    setText("#planet-period", p.period.toLocaleString());
    setText("#planet-temperature", p.temperature);
    setText("#planet-moons", p.moons);
    setText("#planet-diameter", p.diameter.toLocaleString());
    setText("#planet-distance", p.distanceFromSun);

    searchError.hidden = true;
    searchField.removeAttribute("aria-invalid");
    statusCard.hidden = true;
    card.hidden = false;
}

function showStatus(title, text, isError = false) {
    card.hidden = true;
    setText("#status-title", title);
    setText("#status-text", text);
    statusCard.hidden = false;
    searchError.hidden = !isError;
    if (isError) searchField.setAttribute("aria-invalid", "true");
}

function findPlanet(query) {
    return (
        planets.find((p) => p.name.toLowerCase() === query) ??
        planets.find((p) => p.name.toLowerCase().startsWith(query))
    );
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchField.value.trim().toLowerCase();
    if (query === "") return;

    if (planets.length === 0) {
        showStatus(
            "Still loading",
            "Planet data is not ready yet. Please try again in a moment.",
        );
        return;
    }

    const planet = findPlanet(query);
    if (planet) {
        showPlanet(planet);
    } else {
        showStatus(
            "No results found!",
            "We couldn't find any planet matching your search. Please double-check the name and try again.",
            true,
        );
    }
});

// clear the red error as soon as the person edits the input
searchField.addEventListener("input", () => {
    searchError.hidden = true;
    searchField.removeAttribute("aria-invalid");
});

// ===== Grouped facts table =====
const GROUPS = [
    { label: "Terrestrial Planets", subs: [{ type: "Terrestrial" }] },
    {
        label: "Jovian Planets",
        subs: [
            { label: "Gas Giants", type: "Gas Giant" },
            { label: "Ice Giants", type: "Ice Giant" },
        ],
    },
    { label: "Dwarf Planets", subs: [{ type: "Dwarf Planet" }] },
];

function renderTable() {
    const rows = [];

    for (const group of GROUPS) {
        const subs = group.subs.map((s) => ({
            ...s,
            items: planets.filter((p) => p.type === s.type),
        }));
        const total = subs.reduce((n, s) => n + s.items.length, 0);
        let firstOfGroup = true;

        for (const sub of subs) {
            sub.items.forEach((p, i) => {
                let cells = "";

                if (firstOfGroup) {
                    const span = sub.label ? "" : ' colspan="2"';
                    cells += `<th scope="rowgroup" class="group" rowspan="${total}"${span}>${group.label}</th>`;
                    firstOfGroup = false;
                }
                if (sub.label && i === 0) {
                    cells += `<th scope="rowgroup" class="group" rowspan="${sub.items.length}">${sub.label}</th>`;
                }

                cells += `<th scope="row">${p.name}</th><td class="col-mass">${p.mass}</td><td>${p.diameter.toLocaleString()}</td>`;
                rows.push(`<tr>${cells}</tr>`);
            });
        }
    }

    document.querySelector("#planet-table-body").innerHTML = rows.join("");
}

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
