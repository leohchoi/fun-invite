function moveToRandomPosition(element) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log("width", windowWidth, "height", windowHeight)

  const randomX = Math.floor(Math.random() * (windowWidth / 2));
  const randomY = Math.floor(Math.random() * (windowHeight / 2));

  element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}