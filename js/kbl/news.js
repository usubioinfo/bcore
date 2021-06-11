

(() => {
  const articleCards = document.getElementsByClassName('article-card');

  articleCards[0].classList.add('selected');

  document.getElementById(articleCards[0].dataset.articleId).classList.remove('d-none');

  function unselectCards() {
    for (let card of articleCards) {
      card.classList.remove('selected');
    }
  }

  for (let card of articleCards) {
    card.addEventListener('click', (e) => {
      for (let article of document.getElementsByClassName('article')) {
        article.classList.add('d-none');
      }

      unselectCards();


      const cardId = card.dataset.articleId;
      document.getElementById(cardId).classList.remove('d-none');
      card.classList.add('selected');
    });
  }
})();
