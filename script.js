/* ==============================
   Part 2: JavaScript Functions
   ============================== */

// Global variable
let animationActive = false;

/**
 * Function with parameters & return value
 * Calculates the area of a rectangle (demo of logic)
 */
function calculateArea(width, height) {
  return width * height;
}

// Demonstrating local vs global scope
function logBoxArea() {
  let localWidth = 5; // local variable
  let localHeight = 10;
  console.log("Local Box Area:", calculateArea(localWidth, localHeight));
  console.log("Global Animation State:", animationActive); // using global variable
}
logBoxArea();

/* ==============================
   Part 3: Combining CSS & JS
   ============================== */

// Elements
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

/**
 * Start bounce animation
 */
function startAnimation() {
  if (!animationActive) {
    box.classList.add("animate");
    animationActive = true;
    console.log("Animation started!");
  }
}

/**
 * Stop bounce animation
 */
function resetAnimation() {
  if (animationActive) {
    box.classList.remove("animate");
    animationActive = false;
    console.log("Animation stopped!");
  }
}

/**
 * Open modal (CSS handles animation)
 */
function openModal() {
  modal.style.display = "flex";
}

/**
 * Close modal
 */
function closeModalWindow() {
  modal.style.display = "none";
}

// Event listeners
animateBtn.addEventListener("click", startAnimation);
resetBtn.addEventListener("click", resetAnimation);
modalBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalWindow);
