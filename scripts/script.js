// Display the current year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var displayYear = document.getElementById('displayYear');
    var currentYear = new Date().getFullYear();
    displayYear.textContent = currentYear;
  });

  function toggleNavbar() {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle i");

    navbar.classList.toggle("show");

    // Toggle icon between bars and close
    if (navbar.classList.contains("show")) {
        menuToggle.classList.replace("fa-bars", "fa-times");
    } else {
        menuToggle.classList.replace("fa-times", "fa-bars");
    }
}

function viewResume() {
      // Redirect to resume.html
      window.location.href = "resume.html";
    }
