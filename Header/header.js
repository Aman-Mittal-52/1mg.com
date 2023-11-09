const slider = document.querySelector(".slider");
 const slideWidth = slider.offsetWidth;
 let currentSlide = 1;
  function nextSlide() {
      if (currentSlide < 4) {
          currentSlide++;
      } else {
          currentSlide = 1;
          slider.scrollBy({ left: (3 * slideWidth), behavior: "auto" });
      }
       slider.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
 // Auto-slide every 5 seconds
 setInterval(nextSlide, 1000);