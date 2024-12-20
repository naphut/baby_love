const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const playButton = document.getElementById('play-video');
const video = document.getElementById('bg-video');

// Move "No" button randomly
noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

// Show popup when "Yes" is clicked
yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Hide popup when clicked
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Show video when the background is clicked
document.body.addEventListener('click', (event) => {
    // Check if the click was on the background image area (not on buttons or video)
    if (event.target === document.body) {
        // Hide the background image
        document.body.style.backgroundImage = 'none';
        // Show the video
        video.style.display = 'block';
        // Play the video
        video.play();
        // Hide the play button
        playButton.style.display = 'none';
    }
});

// Play the video when the button is clicked (if the user prefers to start it manually)
playButton.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
    playButton.style.display = 'none'; // Hide the play button once video starts
});
