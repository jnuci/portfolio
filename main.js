let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const container = document.querySelector('.slide-indicator');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active-slide");  // Add class to show the slide
    } else {
      slide.classList.remove("active-slide"); // Remove class to hide the slide
    }
  });
}

function showIndicator(index) {
  const indicators = document.querySelectorAll(".indicator-icon")
  indicators.forEach((icon, i) => {
    if (i === index) {
      icon.classList.add("active-icon");  // Add class to show the slide
    } else {
      icon.classList.remove("active-icon"); // Remove class to hide the slide
    }
  })
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  showIndicator(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
  showIndicator(currentIndex);
}

function scrollBottom() {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

window.onload = function() {
  
  slides.forEach((slide, i) => {
      const newDiv = document.createElement('div');
      newDiv.classList.add(`indicator-icon`)
      if (i == 0) {
        newDiv.classList.add("active-icon")
      }
      if (container) {
        container.appendChild(newDiv);
      } else {
        console.log("no container");
      }
  })

  const indicators = document.querySelectorAll(".indicator-icon")
  indicators.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      showIndicator(currentIndex);
    })
  })

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
  };
  
showSlide(currentIndex);
showIndicator(currentIndex);

// function isMobile() {
//   const userAgent = navigator.userAgent || window.opera;
//   return /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
// }

// function orientationAlert() {
//   if (isMobile() && window.innerHeight > window.innerWidth) { 
//     alert("Please turn device to landscape mode for best experience");
//   }
// }

// window.addEventListener('load', orientationAlert)
