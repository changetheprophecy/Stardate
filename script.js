document.addEventListener("DOMContentLoaded", function () {
  const sky = document.getElementById("sky");

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    sky.appendChild(star);

    // Twinkling animation
    gsap.to(star, {
      opacity: Math.random(),
      duration: Math.random() * 1 + 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: Math.random() * 2,
    });
  }

  for (let i = 0; i < 200; i++) {
    createStar();
  }
});
