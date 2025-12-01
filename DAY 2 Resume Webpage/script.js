// Theme toggle + persist
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const body = document.body;

function applyTheme(isLight) {
  if (isLight) {
    body.classList.add("light");
    themeToggle.textContent = "Dark";
  } else {
    body.classList.remove("light");
    themeToggle.textContent = "Light";
  }
  localStorage.setItem("resume-light", isLight ? "1" : "0");
}

themeToggle.addEventListener("click", () => {
  const isLight = !body.classList.contains("light");
  applyTheme(isLight);
});

// initialize theme from storage
const saved = localStorage.getItem("resume-light");
applyTheme(saved === "1");

// Print / Download as PDF
document.getElementById("printBtn").addEventListener("click", () => {
  // before printing, you could hide other UI if needed
  window.print();
});

// auto-year
document.getElementById("year").textContent = new Date().getFullYear();
