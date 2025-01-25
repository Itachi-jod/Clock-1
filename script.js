
function updateNepalTime() {
    // Get current UTC time
    let now = new Date();
    
    // Convert to Nepal Time (UTC +5:45)
    let nepalOffset = 5.75 * 60 * 60 * 1000;  // 5 hours 45 minutes in milliseconds
    let nepalTime = new Date(now.getTime() + nepalOffset);

    let hours = nepalTime.getUTCHours();
    let minutes = nepalTime.getUTCMinutes();
    let seconds = nepalTime.getUTCSeconds();

    // Add leading zeros if necessary
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;

    setTimeout(updateNepalTime, 1000);
}

// Start the clock when the page loads
document.addEventListener("DOMContentLoaded", updateNepalTime);
