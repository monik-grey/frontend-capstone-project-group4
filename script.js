/**
 * Planet Web Application Logic
 * Group 4 Capstone Project - Integrated with Team Lead's API Fetch Workflow
 */

document.addEventListener("DOMContentLoaded", () => {
  // Define your API endpoint
  const API_URL = "data.json";

  let planets = []; // Global array to hold fetched planet data

  // Global Theme Selectors
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleText = document.getElementById("theme-toggle-text");
  const themeToggleIcon = document.getElementById("theme-toggle-icon");

  // Search Bar Selectors
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("planet-search");
  const searchErrorText = document.getElementById("search-error-text");

  // Content & Error Card Containers
  const planetCard = document.getElementById("planet-card");
  const factsSection = document.getElementById("facts-section");
  const errorCard = document.getElementById("error-card");

  /**
   * Theme Switcher Logic
   */
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);

    if (newTheme === "dark") {
      themeToggleText.textContent = "LIGHT";
      themeToggleIcon.src = "images/temperature-icon.svg";
      themeToggleIcon.alt = "Sun icon";
    } else {
      themeToggleText.textContent = "DARK";
      themeToggleIcon.src = "images/half-moon-icon.svg";
      themeToggleIcon.alt = "Moon icon";
    }
  }

  themeToggleBtn.addEventListener("click", toggleTheme);

    
  // Adeoluwa code start

  /**
   * Clears all search error states and restores content sections
   */
  function clearErrorState() {
    searchErrorText.classList.add("hidden");
    errorCard.classList.add("hidden");
    planetCard.classList.remove("hidden");
    if (factsSection) factsSection.classList.remove("hidden");
  }

  /**
   * Triggers the Search Error State matching Desktop & Mobile Error mockups
   */
  function showErrorState() {
    searchErrorText.classList.remove("hidden");
    planetCard.classList.add("hidden");
    if (factsSection) factsSection.classList.add("hidden");
    errorCard.classList.remove("hidden");
  }

  /**
   * Status handler for network or API load failures
   */
  function showStatus(title, message) {
    planetCard.classList.add("hidden");
    if (factsSection) factsSection.classList.add("hidden");
    errorCard.classList.remove("hidden");

    // Update error card text to reflect network loading failure
    errorCard.querySelector("h2").textContent = title;
    errorCard.querySelector("p").textContent = message;
  }

  // Clear inline error text dynamically as user resumes typing
  searchInput.addEventListener("input", () => {
    if (!searchErrorText.classList.contains("hidden")) {
      searchErrorText.classList.add("hidden");
    }
  });
  // Adeoluwa Code End
 
  /**
   * Renders target planet data into the profile card
   */
  function showPlanet(planet) {
    clearErrorState();

    document.getElementById("planet-name").textContent = planet.name;
    document.getElementById("planet-type").textContent = planet.type;
    document.getElementById("planet-description").textContent =
      planet.description;
    document.getElementById("planet-image").src =
      planet.image || "images/image26.svg";

    document.getElementById("stat-gravity").textContent = planet.gravity;
    document.getElementById("stat-mass").textContent = planet.mass;
    document.getElementById("stat-period").textContent = planet.period;

    document.getElementById("stat-temp").textContent = planet.temperature;
    document.getElementById("stat-moons").textContent = planet.moons;
    document.getElementById("stat-diameter").textContent = planet.diameter;
    document.getElementById("stat-distance").textContent = planet.distance;
  }

  /**
   * Search Query Handler
   */
  function handleSearch(query) {
    const sanitizedQuery = query.trim().toLowerCase();
    if (!sanitizedQuery) return;

    const match = planets.find((p) => p.name.toLowerCase() === sanitizedQuery);

    if (match) {
      showPlanet(match);
    } else {
      showErrorState();
    }
  }

  // Handle Form Submission
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSearch(searchInput.value);
  });

  /**
   * Application Initialization
   */
  async function init() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      planets = await response.json();

      // Default view opens on Earth as specified in mockups
      const earth = planets.find((p) => p.name.toLowerCase() === "earth");
      if (earth) {
        showPlanet(earth);
      } else if (planets.length > 0) {
        showPlanet(planets[0]);
      }
    } catch (error) {
      console.error("Could not load planets:", error);
      showStatus(
        "Couldn't load planet data",
        "Check your connection and refresh the page.",
      );
    }
  }

  // Run initialization on load
  init();
});
