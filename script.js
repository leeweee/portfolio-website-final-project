// darkmode button
const themeButton = document.getElementById("themeButton");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeButton.textContent = "Light Mode";
    } else {
      themeButton.textContent = "Dark Mode";
    }
  });
}


// random images for home
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "numbness.jpg",
    "untitled(1).jpg",
    "okaymyles.jpg"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.backgroundImage = `url('${randomImage}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }
});
