document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    fetch(el.getAttribute('data-include'))
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
      });
  });
});
// include.js
document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  const loginDropdown = loginBtn.nextElementSibling;

  // Toggle login dropdown on icon click
  loginBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    loginDropdown.classList.toggle("show");
  });

  // Hide login dropdown when clicking outside
  window.addEventListener("click", function() {
    if (loginDropdown.classList.contains("show")) {
      loginDropdown.classList.remove("show");
    }
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const resp = await fetch(file);
    const html = await resp.text();
    el.innerHTML = html;
  });
});
