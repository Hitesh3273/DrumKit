// https://copilot.microsoft.com/chats/FgERqrWmDs68veEKfYd3U

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const sound = key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 600);
});
