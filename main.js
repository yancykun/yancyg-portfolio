async function smoothScroll(event, targetId) {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    await new Promise((resolve) => {
        setTimeout(() => {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        resolve();
        }, 300); // Adjust the timeout value if needed
    });
    }
}



// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar li a');

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
  // Loop through each navbar link
navbarLinks.forEach(link => {
    // Get the target section ID from the href attribute
    const sectionId = link.getAttribute('href');

    // Get the corresponding section element
    const section = document.querySelector(sectionId);

    // Check if the section is in the viewport
    const isInViewport = isElementInViewport(section);

    // Add or remove the "active" class based on the section's visibility
    if (isInViewport) {
    link.classList.add('active');
    } else {
    link.classList.remove('active');
    }
});
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
var rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
);
}

// Function to add/remove active class to navigation links
function updateActiveLink() {
var navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function (link) {
    var sectionId = link.getAttribute('href').substring(1);
    var section = document.getElementById(sectionId);

    if (section && isElementInViewport(section)) {
    link.classList.add('active');
    } else {
    link.classList.remove('active');
    }
});
}

// Event listener for scrolling
window.addEventListener('scroll', updateActiveLink);
