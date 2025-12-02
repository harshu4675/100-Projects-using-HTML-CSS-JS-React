// Must wait for DOM so libraries (AOS/Swiper) are loaded and DOM is available
document.addEventListener("DOMContentLoaded", function () {
  // 1) Initialize AOS
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  } else {
    console.warn("AOS not found — check CDN");
  }

  // 2) Initialize Swiper
  if (window.Swiper) {
    const swiper = new Swiper(".mySwiper", {
      // core settings
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // responsive breakpoints
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });
  } else {
    console.warn("Swiper not found — check CDN");
  }

  // 3) Buy buttons - simple demo behaviour
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name =
        btn.parentElement.querySelector("h3")?.innerText || "Product";
      // small popup: use confirm to demo cart add
      if (confirm(`Add "${name}" to cart?\nClick OK to simulate add.`)) {
        // simulate success
        alert(`✅ "${name}" added to cart.`);
      }
    });
  });
});
