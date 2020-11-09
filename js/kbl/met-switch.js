(function() {
  'use strict';

  const switches = document.querySelectorAll('.kbl-switch');
  switches[0].classList.add('current');

  let currentPage = switches[0].textContent.trim();
  console.log(currentPage);

  switches.forEach((el) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.kbl-switch').forEach((newEl) => {
        newEl.classList.remove('current');
      });

      el.classList.add('current');
      currentPage = el.textContent.trim().toLowerCase();

      document.querySelectorAll('.met-section').forEach((newEl) => {
        newEl.classList.remove('d-none');
        newEl.classList.add('d-none');
      });
      console.log('#' + currentPage);
      document.getElementById(currentPage).classList.remove('d-none');
      console.log(currentPage);
    });
  });
})();
