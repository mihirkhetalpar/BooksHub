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

// Function to set the theme based on user preference
function setTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  document.body.classList.value = savedTheme;

  // If in dark mode, move the switch to the dark mode position
  if (savedTheme === 'dark-mode') {
    moveSwitch(true); // Pass true to move the switch immediately
  }

  // Update the background image based on the theme
  updateBackgroundImage(savedTheme);
}

// Check if there is a theme preference stored in local storage on page load
setTheme();

// Function to toggle dark mode
function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle('dark-mode');

  // Save the current theme preference to local storage
  const currentTheme = element.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);

  // Call the new function to handle switch movement
  moveSwitch();

  // Update the background image based on the theme
  updateBackgroundImage(currentTheme);

  // Trigger the storage event to notify other open pages
  triggerStorageEvent();
}

// Function to move the switch
function moveSwitch(immediate = false) {
  const switchImage = document.querySelector('.switch');
  if (immediate) {
    switchImage.classList.add('switched');
  } else {
    switchImage.classList.toggle('switched');
  }
}

// Function to update the background image based on the theme
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

// Function to trigger the storage event
function triggerStorageEvent() {
  const event = new Event('storage');
  window.dispatchEvent(event);
}

// Listen for the storage event in other open pages
window.addEventListener('storage', (event) => {
  // If the theme has changed, update the theme on this page
  if (event.key === 'theme') {
    setTheme();
  }
});

// Listen for page visibility change to ensure synchronization when tabs are switched
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // When the page becomes visible, update the theme
    setTheme();
  }
});


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

  var categories = [
    { name: "Manga", link: "../Books-PagesHtml/Manga.html" },
    { name: "Comic", link: "../Books-PagesHtml/Comics.html" },
    { name: "Kid Stories", link: "../Books-PagesHtml/KidStories.html" },
    { name: "Poem", link: "../Books-PagesHtml/Poetry.html" },
    { name: "Coding", link: "../Books-PagesHtml/coding.html" },
    { name: "Science", link: "../Books-PagesHtml/Science.html" },
    { name: "Romance", link: "../Books-PagesHtml/Romance.html" },
    { name: "Fantasy", link: "../Books-PagesHtml/Fantasy.html" },
    { name: "Mystery", link: "../Books-PagesHtml/MYSTERY.html" },
    { name: "Action&Adventure", link: "../Books-PagesHtml/ActionAdventure.html" },
    { name: "Thriller", link: "../Books-PagesHtml/THRILLER.html" },
    { name: "History", link: "../Books-PagesHtml/History.html" },
  ];
  
  function handleSearchInput() {
    var userInput = document.getElementById('searchInput').value.toLowerCase();
    var categoryListContainer = document.getElementById('categoryList');
  
    if (userInput.trim() === '') {
      // If the search input is empty, hide the suggestions
      categoryListContainer.innerHTML = '';
      return;
    }
  
    var matchingCategories = categories.filter(function(category) {
      return category.name.toLowerCase().includes(userInput);
    });
  
    // Display matching suggestions
    categoryListContainer.innerHTML = '';
    matchingCategories.forEach(function(category) {
      var suggestion = document.createElement('div');
      suggestion.classList.add('Suggestion-Div'); 
  
      var link = document.createElement('a');
      link.href = category.link;
      link.target = '_blank';
      link.textContent = category.name;
      link.classList.add('Suggestion-Links'); 
  
      suggestion.appendChild(link);
      categoryListContainer.appendChild(suggestion);
    });
  }
  
  

   