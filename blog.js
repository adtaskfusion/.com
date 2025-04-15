
  // Load the current coins from localStorage
  document.addEventListener("DOMContentLoaded", function() {
    loadCoins();
  });

  function loadCoins() {
    const coins = localStorage.getItem("coins") || 0;
    document.getElementById("coins").innerText = coins;
  }

  function saveCoins(coins) {
    localStorage.setItem("coins", coins);
    document.getElementById("coins").innerText = coins;
  }

  // Open the Blogger link and track reading time
  function startReading(blogUrl) {
    const startTime = Date.now();
    const newWindow = window.open(blogUrl, '_blank');

    // After 1 minute of reading, award 10 coins
    setTimeout(function() {
      const endTime = Date.now();
      const timeSpent = (endTime - startTime) / 1000; // Time in seconds

      // Award coins for reading
      if (timeSpent >= 60) {
        const currentCoins = parseInt(localStorage.getItem("coins")) || 0;
        const newCoins = currentCoins + 10; // Award 10 coins
        saveCoins(newCoins);

        alert(`You earned 10 coins for reading this blog!`);
      } else {
        alert("You need to read for at least 1 minute to earn coins.");
      }
    }, 60000); // 1 minute timer
  }

