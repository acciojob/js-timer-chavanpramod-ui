// write js code here if required
function updateTimer() {
  const now = new Date();

  // Extract date components
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are 0-indexed in JS
  const year = now.getFullYear();

  // Extract time components
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the date and time string: <day>/<month>/<year>, <hours>:<minutes>:<seconds>
  const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  // Update paragraph content
  document.getElementById('timer').textContent = formattedTime;
}

// Initial call to display timer immediately
updateTimer();

// Update timer every second
setInterval(updateTimer, 1000);