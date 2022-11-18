window.addEventListener("keydown", listenerFunction);

function listenerFunction(event) {
  const keycode = event.keycode;

  playSound(event);
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
