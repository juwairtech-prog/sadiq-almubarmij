
/* صديق المبرمج - الوظائف الأساسية */

"use strict";

const MadarApp = {
  init() {
    this.setupTheme();
    console.log("صديق المبرمج جاهز للعمل.");
  },

  setupTheme() {
    const savedTheme = localStorage.getItem("sadiq-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
    }
  },

  toggleTheme() {
    const root = document.documentElement;
    const nextTheme =
      root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    localStorage.setItem("sadiq-theme", nextTheme);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  MadarApp.init();
});
