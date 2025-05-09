const box = document.getElementById("animatedBox");
const btn = document.getElementById("animateBtn");
const colorPicker = document.getElementById("colorPicker");

// Load saved color on page load
window.onload = () => {
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Animate and save color
btn.addEventListener("click", () => {
  // Trigger animation
  box.classList.add("animate");

  // Save selected color to localStorage
  const selectedColor = colorPicker.value;
  localStorage.setItem("boxColor", selectedColor);
  box.style.backgroundColor = selectedColor;

  // Remove animation class after it finishes
  setTimeout(() => {
    box.classList.remove("animate");
  }, 600); // Match with CSS animation duration
});
