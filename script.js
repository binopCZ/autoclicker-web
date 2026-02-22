document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load saved theme from localStorage (if any)
  const savedTheme = localStorage.getItem("ac-website-theme") || "dark";
  html.setAttribute("data-theme", savedTheme);

  // Toggle event
  toggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("ac-website-theme", nextTheme);
  });
});
