const themeToggle = document.querySelector("#themeToggle");
const body = document.querySelector('body');
let currmode = "light_mode"; // Start with light mode

themeToggle.addEventListener("click", () => {
    if (currmode !== 'dark_mode') {
        themeToggle.textContent = currmode; // Change button text to indicate dark mode
        currmode = 'dark_mode'; // Update current mode
        body.classList.add('dark_mode'); // Add dark mode class
        body.classList.remove('light_mode'); // Remove light mode class
    } else {
        themeToggle.textContent = currmode; // Change button text to indicate light mode
        currmode = 'light_mode'; // Update current mode
        body.classList.add('light_mode'); // Add light mode class
        body.classList.remove('dark_mode'); // Remove dark mode class
    }
    console.log(`switched to ${currmode}`); // Log the current mode
});
