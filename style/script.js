const audio = document.getElementById("sound");

function tryPlayAudio() {
  audio.play().catch((err) => {
    const unlockAudio = () => {
      audio.play().then(() => {
        document.removeEventListener("click", unlockAudio);
        document.removeEventListener("touchstart", unlockAudio);
      }).catch((e) => {
        console.warn("Không thể phát âm thanh:", e);
      });
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);
  });
}

window.addEventListener("load", () => {
  if (audio.readyState >= 2) {
    tryPlayAudio();
  } else {
    audio.addEventListener("canplaythrough", tryPlayAudio);
  }
});

function rain() {
    const cloud = document.querySelector('.cloud');
    const isImage = Math.random() < 0.3;
    const e = document.createElement(isImage ? 'img' : 'div');
    e.classList.add('drop');

    const left = Math.floor(Math.random() * 290);
    const size = 0.5 + Math.random() * 1.5;
    const duration = 1 + Math.random() * 1;

    if (isImage) {
    const images = [];
    for (let i = 1; i <= 7; i++) {
    images.push(`./style/img/Anh (${i}).jpg`);
    }
    const randomImage = images[Math.floor(Math.random() * images.length)];
    e.src = randomImage;
    e.style.width = `${size * 20}px`;
    e.style.height = `${size * 20}px`;
    e.style.borderRadius = '50%';
    } else {
    const hearts = ['❤️', '🧡', '💛', '💚', '💜', '🤍', '💖'];
    const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
    e.innerText = randomHeart;
    e.style.fontSize = size + 'em';
    }

    e.style.left = left + 'px';
    e.style.animation = `animate ${duration}s linear`;
    cloud.appendChild(e);

    setTimeout(() => {
    e.remove();
    }, duration * 1000);
}

setInterval(rain, 70);
