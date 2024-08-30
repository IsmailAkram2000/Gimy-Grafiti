document.addEventListener("DOMContentLoaded", function () {
  const htmlTag = document.documentElement; // Reference to the <html> tag
  const toggleCheckbox = document.getElementById("toggle");

  // Check the saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      htmlTag.setAttribute("data-bs-theme", savedTheme);
      toggleCheckbox.checked = savedTheme === "dark";
  }

  // Toggle theme and save preference
  toggleCheckbox.addEventListener("change", function () {
      const newTheme = toggleCheckbox.checked ? "dark" : "light";
      htmlTag.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme); // Save the preference
  });
});