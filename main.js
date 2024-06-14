let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active-slide"); // Add class to show the slide
    } else {
      slide.classList.remove("active-slide"); // Remove class to hide the slide
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function scrollBottom() {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_no8x2ty', 'template_0l9pxfr', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}

showSlide(currentIndex);