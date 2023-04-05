const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
  const caption = container.querySelector('.image-caption');
  container.addEventListener('mouseover', () => {
    caption.style.opacity = 1;
  });
  container.addEventListener('mouseout', () => {
    caption.style.opacity = 0;
  });
});
