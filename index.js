function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");
  
    hoursSpan.textContent = padZero(hours);
    minutesSpan.textContent = padZero(minutes);
    secondsSpan.textContent = padZero(seconds);
  }
  
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  
  setInterval(updateClock, 1000);