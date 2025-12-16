// Load header and footer dynamically
window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
  
    fetch("footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
  
        const yearSpan = document.getElementById("year");
        if (yearSpan) {
          yearSpan.textContent = new Date().getFullYear();
        }
      });
  
    // Show current time
    const datetime = document.getElementById("datetime");
    if (datetime) {
      setInterval(() => {
        datetime.textContent = "Current Time: " + new Date().toLocaleString();
      }, 1000);
    }
  });
  
