// PRELOADER
document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("preloader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 4000);
});

// NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Close the nav links if clicked outside the navbar area
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });

  // Hide the navigation links if window width is more than 400px on load
  function handleNavDisplay() {
    if (window.innerWidth > 400) {
      navLinks.classList.remove("show");
    }
  }

  // Listen for window resize and update navigation links display accordingly
  window.addEventListener("resize", handleNavDisplay);

  // Initially check the window width to show/hide navigation links
  handleNavDisplay();
});

// Check if there is a theme preference stored in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);

  // If in dark mode, move the switch to the dark mode position
  if (savedTheme === 'dark-mode') {
    moveSwitch();
  }

  // Update the background image based on the theme
  updateBackgroundImage(savedTheme);
}

function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');

  // Save the current theme preference to local storage
  const currentTheme = element.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('theme', currentTheme);

  // Call the new function to handle switch movement
  moveSwitch();

  // Update the background image based on the theme
  updateBackgroundImage(currentTheme);
}

function moveSwitch() {
  const switchImage = document.querySelector('.switch');
  switchImage.classList.toggle('switched');
}

function updateBackgroundImage(theme) {
  const lightBackImg = document.getElementById('LightBackImg');
  const darkBackImg = document.getElementById('DarkBackImg');

  if (theme === 'dark-mode') {
    lightBackImg.style.display = 'none';
    darkBackImg.style.display = 'block';
  } else {
    lightBackImg.style.display = 'block';
    darkBackImg.style.display = 'none';
  }
}

// Detect scroll events and update the width of the scroll indicator
window.addEventListener("scroll", function () {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const scrollPosition = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / documentHeight) * 100;
  
    scrollIndicator.style.width = scrolled + "%";
  });


// INVITE FRIENDS 
  // Function to copy the website link
  function copyWebsiteLink() {
    var websiteLink = "https://mihirkhetalpar.github.io/BooksHub/";

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = websiteLink;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select and copy the text inside the input element
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Alert the user that the link has been copied
    alert("Website link copied!");
  }