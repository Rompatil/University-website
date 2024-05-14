// Get all the navigation items
const navItems = document.querySelectorAll('.navbar-nav .nav-item');

// Function to handle the click event
function handleNavClick(event) {
    // Remove 'active' class from all items
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked item
    event.currentTarget.classList.add('active');
}

// Add click event listener to each navigation item
navItems.forEach(item => {
    item.addEventListener('click', handleNavClick);
});
