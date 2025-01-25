// Function to update the time on the clock
function updateClock() {
	const now = new Date(); // Get the current date and time
	const hours = now.getHours().toString().padStart(2, '0'); // Format hours (always 2 digits)
	const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes (always 2 digits)
	const seconds = now.getSeconds().toString().padStart(2, '0'); // Format seconds (always 2 digits)

	const timeString = `${hours}:${minutes}:${seconds}`; // Combine the time parts into a string
	document.getElementById('clock').textContent = timeString; // Display the time in the clock element
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update of the clock when the page loads
updateClock();
