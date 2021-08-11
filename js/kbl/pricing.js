(function() {
  'use strict';

  const pricing = {
    rnaseq: 400,
    mirna: 500,
    snpseq: 600,
    chip: 600,
    methyl: 700,
    genome: 50
  }

  const switches = document.querySelectorAll('.kbl-switch.s2');
  switches[0].classList.add('current');

  let currentPage = switches[0].textContent.trim().toLowerCase();
  console.log(currentPage);

  switches.forEach((el) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.kbl-switch.s2').forEach((newEl) => {
        newEl.classList.remove('current');
      });

      el.classList.add('current');
      currentPage = el.textContent.trim().toLowerCase();

      document.querySelectorAll('.pricing-section').forEach((newEl) => {
        newEl.classList.remove('d-none');
        newEl.classList.add('d-none');
      });
  
      document.getElementById(currentPage).classList.remove('d-none');
    });
  });

  document.querySelectorAll('.kbl-pricing-item').forEach(el => {
    el.addEventListener('click', e => {
      document.querySelectorAll('.kbl-pricing-item').forEach(newEl => {
        newEl.classList.remove('selected')
      });

      el.classList.add('selected');

      const pricingId = el.id;
      const price = document.querySelector(`#${pricingId} .price-data`).textContent;
      const priceEl = document.querySelector('#price');
      priceEl.textContent = price;
    });
  });
})();
  