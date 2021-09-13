(function() {
  'use strict';

  const pricing = {
    rnaseq: 400,
    mirna: 500,
    snpseq: 600,
    chipseq: 600,
    metseq: 700,
    gbs: 500,
    amplicon: 500,
    metagenomics: 500,
    genome: 50
  }

  const groupPricing = {
    usu: 1,
    academic: 1.5,
    commercial: 2
  }

  let currentGroup = 'usu';

  const switches = document.querySelectorAll('.kbl-switch.s2');
  const orgSwitches = document.querySelectorAll('.switch');
  switches[0].classList.add('current');

  const pricingItems = document.querySelectorAll('.kbl-pricing-item');

  let currentPage = switches[0].id;
  console.log(currentPage);

  const priceEl = document.querySelector('#price');

  orgSwitches.forEach(el => {
    el.addEventListener('click', e => {
      document.querySelectorAll('.switch').forEach(newEl => {
        newEl.classList.remove('selected');
      });

      for (let priceItem of pricingItems) {
        if (priceItem.id === 'genome') {
          continue;
        }

        const pricingId = priceItem.id;
        console.log(pricingId);
        const price = document.querySelector(`#${pricingId} .price-data`).textContent = pricing[pricingId] * groupPricing[el.id];
      }

      el.classList.add('selected');
      currentGroup = el.id;
    });
  });

  switches.forEach((el) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.kbl-switch.s2').forEach((newEl) => {
        newEl.classList.remove('current');
      });

      el.classList.add('current');
      currentPage = el.id;

      document.querySelectorAll('.pricing-section').forEach((newEl) => {
        newEl.classList.remove('d-none');
        newEl.classList.add('d-none');
      });
  
      document.getElementById(`${currentPage}-content`).classList.remove('d-none');
    });
  });

  pricingItems.forEach(el => {
    el.addEventListener('click', e => {
      document.querySelectorAll('.kbl-pricing-item').forEach(newEl => {
        newEl.classList.remove('selected')
      });

      el.classList.add('selected');

      const pricingId = el.id;
      const price = document.querySelector(`#${pricingId} .price-data`).textContent;
      priceEl.textContent = priceCheck(noSamples[pricingId], pricingId);
    });
  });

  const noSamples = {
    rnaseq: 10,
    mirna: 10,
    snpseq: 10,
    chipseq: 10,
    metseq: 10,
    genome: 10,
    gbs: 10,
    amplicon: 10,
    metagenomics: 10
  }

  // Plus Minus buttons

  const plusButtons = document.querySelectorAll('.plus');
  const minusButtons = document.querySelectorAll('.minus');

  const priceCheck = (numSamples, id) => {
    const tens = parseInt(numSamples / 10);
    const ones = numSamples % 10;

    const price = document.querySelector(`#${id} .price-data`).textContent;

    if (tens === 0) {
      return price;
    }

    let total = tens * price;
    total += ones * 50 * groupPricing[currentGroup];

    return total;
  }

  plusButtons.forEach(el => {
    el.addEventListener('click', e => {
      const id = el.id.split('-')[0];

      noSamples[id] += 1;

      document.getElementById(`${id}-input`).value = noSamples[id];
      priceEl.textContent = priceCheck(noSamples[id], id);
    });

  });

  minusButtons.forEach(el => {
    el.addEventListener('click', e => {
      const id = el.id.split('-')[0];

      noSamples[id] -= 1;

      if (noSamples[id] < 1) {
        noSamples[id] = 1;
      }

      document.getElementById(`${id}-input`).value = noSamples[id];
      priceEl.textContent = priceCheck(noSamples[id], id);
    });

  });
})();
  