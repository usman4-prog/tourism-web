// Auto year update
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Booking Alert
document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thank you for booking! We will contact you shortly.");
  });
});

// Countdown Timer (Offer ends in 7 days)
const countdown = document.getElementById("countdown");
const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 7);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = offerEndDate - now;

  if (distance < 0) {
    countdown.textContent = "Offer expired!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
