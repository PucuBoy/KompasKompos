const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let visibleItems = 4; // Default jumlah item yang terlihat sekaligus di desktop
const intervalTime = 5000; // Waktu pergeseran otomatis dalam milidetik

// Fungsi untuk menentukan jumlah item yang terlihat berdasarkan ukuran layar
function updateVisibleItems() {
  if (window.innerWidth <= 768) {
    visibleItems = 1; // Jika ukuran layar <= 768px, tampilkan 1 item
  } else {
    visibleItems = 4; // Di ukuran layar lebih besar, tampilkan 4 item
  }
}

// Mengatur pergeseran carousel
function updateCarousel() {
  const newTransformValue = -(currentIndex * (100 / visibleItems));
  carousel.style.transform = `translateX(${newTransformValue}%)`;
}

// Geser ke item berikutnya
function nextItem() {
  currentIndex = (currentIndex + 1) % (totalItems - visibleItems + 1);
  updateCarousel();
}

// Geser ke item sebelumnya
function prevItem() {
  currentIndex = (currentIndex - 1 + (totalItems - visibleItems + 1)) % (totalItems - visibleItems + 1);
  updateCarousel();
}

// Tombol navigasi manual
document.querySelector('.carousel-next').addEventListener('click', nextItem);
document.querySelector('.carousel-prev').addEventListener('click', prevItem);

// Pergeseran otomatis setiap interval waktu
setInterval(nextItem, intervalTime);

// Perbarui jumlah item yang terlihat saat ukuran layar berubah
window.addEventListener('resize', updateVisibleItems);

// Jalankan update jumlah item yang terlihat saat halaman dimuat pertama kali
updateVisibleItems();

document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("nav").offsetHeight;

  // Smooth scroll for all nav links and angle-down icon
  document.querySelectorAll("nav a, .angle-down-icon a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // Smooth scroll for Contact Us button in About section
  document.querySelector('.contact-btn').addEventListener('click', function(event) {
    const targetElement = document.querySelector('#contact');
    const navbarHeight = document.querySelector("nav").offsetHeight;
    if (targetElement) {
      event.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight, // Scroll offset to account for the navbar height
        behavior: 'smooth'
      });
    }
  });
});
