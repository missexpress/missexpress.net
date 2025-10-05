// Miss Express — script.js

// Año dinámico en el footer
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
