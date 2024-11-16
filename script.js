// Smooth Scroll to Sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Toggle "Read More" in About Section
function showMoreAbout() {
  const moreAbout = document.getElementById("moreAbout");
  if (moreAbout.classList.contains("hidden")) {
    moreAbout.classList.remove("hidden");
  } else {
    moreAbout.classList.add("hidden");
  }
}

// Contact Form Submission with Feedback (Thank You Message or GIF)
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear existing response message
    const responseMessage = document.getElementById("responseMessage");

    // Show a Thank You message
    responseMessage.innerHTML = "Thank you! Your message has been sent. 😊";

    // Optionally, add a GIF
    const gifElement = document.createElement("img");
    gifElement.src = "thank-you.gif"; // Replace with your gif URL
    gifElement.alt = "Thank you!";
    responseMessage.appendChild(gifElement);

    // Reset form
    document.getElementById("contactForm").reset();
  });
