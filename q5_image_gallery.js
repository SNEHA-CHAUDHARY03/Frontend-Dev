"use strict";
// Q5 Image Gallery with Modal Preview

const images = [
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1025/400/300',
  'https://picsum.photos/id/1035/400/300',
  'https://picsum.photos/id/1045/400/300',
  'https://picsum.photos/id/1055/400/300',
  'https://picsum.photos/id/1065/400/300'
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src; img.alt = '';
  gallery.appendChild(img);
});

// Open modal on image click (event delegation)
gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  modalImg.src = img.src;
  modal.classList.remove('hidden');
});

// Close when clicking outside box
modal.addEventListener('click', () => { modal.classList.add('hidden'); });

// Prevent close when clicking inside the image / box
modalImg.addEventListener('click', (e) => { e.stopPropagation(); });
