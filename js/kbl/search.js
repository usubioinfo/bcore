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
    },
    {
      name: 'Contact',
      url: '/contact'
    },
    {
      name: 'RNA-Seq',
      url: '/services/rnaseq'
    },
    {
      name: 'VAR-Seq',
      url: '/services/varseq'
    },
    {
      name: 'Methyl-Seq',
      url: '/services/methylation'
    },
    {
      name: 'miRNA-Seq',
      url: '/services/mirna'
    },
    {
      name: 'ChIP-Seq',
      url: '/services/chipseq'
    },
    {
      name: 'GBS',
      url: '/services/gbs'
    },
    {
      name: 'Amplicon Analysis',
      url: '/services/amplicon'
    },
    {
      name: 'Metagenomics',
      url: '/services/metagenomics'
    },
    {
      name: 'Eukaryotes Assembly',
      url: '/services/eukassembly'
    },
    {
      name: 'Prokaryotes Assembly',
      url: '/services/prokassembly'
    }
  ];

  const searchPage = (searchTerm) => {
    const results = pages.filter(item => {
      return item.name.toLowerCase().startsWith(searchTerm);
    });

    return results
  }

  const createNoRes = () => {
    const newAnchor = document.createElement('a');
    const content = document.createTextNode('No Results');

    newAnchor.appendChild(content);
    newAnchor.href = '#';

    newAnchor.classList.add('dropdown-item');
    newAnchor.classList.add('no-res');
    newAnchor.setAttribute('id', 'no-res');

    return newAnchor;
  }

  document.getElementById('nav-searchbar').addEventListener('keyup', e => {
    const searchTerm = document.getElementById('nav-searchbar').value;

    if (searchTerm.length === 0) {
      document.getElementById('nav-search-dropdown').innerText = '';
      document.getElementById('nav-search-dropdown').appendChild(createNoRes());
      return;
    }

    const searchResults = searchPage(searchTerm);

    document.getElementById('nav-search-dropdown').innerText = '';

    for (let result of searchResults) {
      const newAnchor = document.createElement('a');
      const content = document.createTextNode(result.name);

      newAnchor.appendChild(content);
      newAnchor.setAttribute('href', result.url);

      newAnchor.classList.add('dropdown-item');
      newAnchor.classList.add('result');

      document.getElementById('nav-search-dropdown').appendChild(newAnchor);
    }
  });
})();