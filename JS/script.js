// Banner Auto Slide
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = 4000; // 4 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, slideInterval);

// Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous message
  formMessage.textContent = "";
  formMessage.style.color = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const destination = form.destination.value.trim();

  if (!name) {
    formMessage.textContent = "Please enter your name.";
    formMessage.style.color = "red";
    form.name.focus();
    return;
  }

  if (!email) {
    formMessage.textContent = "Please enter your email.";
    formMessage.style.color = "red";
    form.email.focus();
    return;
  }

  // Simple email regex validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    form.email.focus();
    return;
  }

  if (!destination) {
    formMessage.textContent = "Please enter your travel destination.";
    formMessage.style.color = "red";
    form.destination.focus();
    return;
  }

  // If all validations pass
  formMessage.textContent =
    "Thank you for your inquiry! We will get back to you soon.";
  formMessage.style.color = "green";

  // Optionally, reset the form
  form.reset();
});
