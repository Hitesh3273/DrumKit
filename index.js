// Function to play sound
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop if no audio element

  // Reset audio to start and play
  audio.currentTime = 0;
  audio.play().catch((err) => console.log("Audio play failed:", err));

  // Add playing class for animation
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 600);
}

// Function to remove animation class
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if not transform
  this.classList.remove("playing");
}

// Touch/click support for mobile
function handleClick(e) {
  const key = e.currentTarget;
  const keyCode = key.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;

  // Reset audio and play
  audio.currentTime = 0;
  audio.play().catch((err) => console.log("Audio play failed:", err));

  // Add playing class
  key.classList.add("playing");

  // Remove class after animation
  setTimeout(() => {
    key.classList.remove("playing");
  }, 300);
}

// Event listeners
window.addEventListener("keydown", playSound);

// Add transition end listener to all keys
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", handleClick);
  key.addEventListener("touchstart", handleClick);
});

// Prevent default touch behaviors that might interfere
document.addEventListener(
  "touchstart",
  function (e) {
    if (e.target.closest(".key")) {
      e.preventDefault();
    }
  },
  { passive: false }
);
