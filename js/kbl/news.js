(() => {
  document.querySelector('.php-card').addEventListener('click', e => {
    const nodeEl = document.querySelector('.node');
    if (!nodeEl.classList.contains('d-none')) {
      nodeEl.classList.add('d-none');
    }
    const phpEl = document.querySelector('.php7');
    phpEl.classList.remove('d-none');

    const phpCard = document.querySelector('.php-card');
    const nodeCard = document.querySelector('.node-card');

    if (!phpCard.classList.contains('selected')) {
      phpCard.classList.add('selected');
    }

    nodeCard.classList.remove('selected');
  });

  document.querySelector('.node-card').addEventListener('click', e => {
    const phpEl = document.querySelector('.php7');
    if (!phpEl.classList.contains('d-none')) {
      phpEl.classList.add('d-none');
    }

    document.querySelector('.node').classList.remove('d-none');

    const nodeCard = document.querySelector('.node-card');
    const phpCard = document.querySelector('.php-card');

    if (!nodeCard.classList.contains('selected')) {
      nodeCard.classList.add('selected');
    }

    phpCard.classList.remove('selected');
  });
})();
