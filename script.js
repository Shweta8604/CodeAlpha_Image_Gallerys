const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function openLightbox(img) {
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}

// Filter images by category
function filterImages(category) {
  const allCards = document.querySelectorAll('.image-card');
  allCards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
