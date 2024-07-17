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
        alert("Message sent successfully!");
        
        const classNames = ["contact-name", "contact-email", "contact-message"];
        
        classNames.forEach(className => {
          const elements = document.querySelectorAll('.' + className);
          elements.forEach(element => {
            element.value = ''; // Clear the value of each element
          });
        });
        
        console.log("Form fields cleared!");
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  });
}

function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

function orientationAlert() {
  if (isMobile() && window.innerHeight > window.innerWidth) { 
    alert("Please turn device to landscape mode for best experience");
  }
}

window.addEventListener('load', orientationAlert)

showSlide(currentIndex);