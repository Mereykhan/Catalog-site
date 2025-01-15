// Автоматически добавляем фотографии в галерею
const gallery = document.querySelector('.images');
const totalPhotos = 15; // Количество фотографий

for (let i = 1; i <= totalPhotos; i++) {
  const img = document.createElement('img');
  img.src = `Pictures/${i}.jpg`; // Путь к фото
  img.alt = `Кровать ${i}`;
  gallery.appendChild(img);
}
