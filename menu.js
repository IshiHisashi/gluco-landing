function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("show"); // Toggle the menu visibility
}

function closeMenuAndNavigate(e) {
    const menu = document.getElementById("hamburgerMenu");

    // Handle download links
    if (e.target.closest("a[_blank]")) {
        menu.classList.remove("show"); // Close the menu
        // Let the browser handle the download normally
        return;
    }

    // Prevent default for normal links
    e.preventDefault();

    // Close the menu for normal links
    menu.classList.remove("show");

    // Smooth scroll to the section
    const target = e.target.getAttribute("href");
    const section = document.querySelector(target);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
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
