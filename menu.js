function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("show"); // Toggle the menu visibility
}

// Close menu and navigate to the section
function closeMenuAndNavigate(e) {
  e.preventDefault(); // Prevent default anchor behavior

  const menu = document.getElementById("hamburgerMenu");
  menu.classList.remove("show"); // Close the menu

  const target = e.target.getAttribute("href"); // Get the href value
  const section = document.querySelector(target); // Find the target section

  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
  }
}

// Add event listeners to links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".hamburger-menu a"); // Select all links in the menu
  links.forEach((link) => {
    link.addEventListener("click", closeMenuAndNavigate);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add 'show' class to trigger animation
          observer.unobserve(entry.target); // Stop observing after the animation
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Select all sections to animate (add 'hidden' class initially)
  document
    .querySelectorAll(
      ".image-right, .left-image-container-yellow, .right-text-column1, .insights, .gamification"
    )
    .forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section); // Start observing the section
    });
});
