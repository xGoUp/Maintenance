window.onload = function() {
    // Set the target date for the end of maintenance
    const targetDate = new Date("2023-06-20T08:00:00Z");
  
    // Update the countdown every second
    const countdownElement = document.getElementById("countdown");
    const countdownInterval = setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const currentDate = new Date();
      const remainingTime = targetDate - currentDate;
  
      // Check if the maintenance period has ended
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Maintenance Completed!";
        return;
      }
  
      // Calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      // Display the countdown
      countdownElement.innerHTML = `Maintenance Ends In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  };
  