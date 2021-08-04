(() => {
  const pages = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Services',
      url: '/services'
    },
    {
      name: 'News',
      url: '/news'
    },
    {
      name: 'Hardware',
      url: '/hardware'
    },
    {
      name: 'Software',
      url: '/software'
    },
    {
      name: 'Manuals',
      url: '/manuals'
    },
    {
      name: 'FAQ',
      url: '/faq'
    },
    {
      name: 'Pricing',
      url: '/pricing'
    }
  ];

  const searchPage = (searchTerm) => {
    const results = pages.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    });

    return results
  }

  document.getElementById('nav-searchbar').addEventListener('onkeyup', e => {
    console.log(searchPage(document.getElementById('nav-searchbar').value));
  });
})();