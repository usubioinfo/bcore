(() => {
  document.querySelector('.php-card').addEventListener('click', e => {
    const nodeEl = document.querySelector('.node');
    if (!nodeEl.classList.contains('d-none')) {
      nodeEl.classList.add('d-none');
    }

    document.querySelector('.php7').classList.remove('d-none');
  });

  document.querySelector('.node-card').addEventListener('click', e => {
    const phpEl = document.querySelector('.php7');
    if (!phpEl.classList.contains('d-none')) {
      phpEl.classList.add('d-none');
    }

    document.querySelector('.node').classList.remove('d-none');
  });
})();
