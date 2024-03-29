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
      url: '/resources/hardware'
    },
    {
      name: 'Software',
      url: '/resources/software'
    },
    {
      name: 'Manuals',
      url: '/resources/manuals'
    },
    {
      name: 'Getting Started',
      url: '/resources/manuals/getting-started'
    },
    {
      name: 'SSH on Windows',
      url: '/resources/manuals/ssh-windows'
    },
    {
      name: 'X11 and Mac',
      url: '/resources/manuals/x-mac'
    },
    {
      name: 'Linux Basics',
      url: '/resources/manuals/linux-basics'
    },
    {
      name: 'Using Grep',
      url: '/resources/manuals/linux-searching'
    },
    {
      name: 'Linux Command Line Editors',
      url: '/resources/manuals/textEditors'
    },
    {
      name: 'Slurm',
      url: '/resources/manuals/slurm'
    },
    {
      name: 'Online Sites',
      url: '/resources/manuals/onlineSites'
    },
    {
      name: 'Config Files',
      url: '/resources/manuals/bashrc'
    },
    {
      name: 'RStudio',
      url: 'https://bioinfo.usu.edu/rstudio/'
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

  let selectedIndex = 0;

  const searchPage = (searchTerm) => {
    const results = pages.filter(item => {
      return item.name.toLowerCase().startsWith(searchTerm.toLowerCase());
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
    selectedIndex = 0;

    if (searchTerm.length === 0) {
      document.getElementById('nav-search-dropdown').innerText = '';
      document.getElementById('nav-search-dropdown').appendChild(createNoRes());
      return;
    }

    const searchResults = searchPage(searchTerm);

    document.getElementById('nav-search-dropdown').innerText = '';

    for (let result of searchResults) {
      const newListItem = document.createElement('li');
      const newAnchor = document.createElement('a');
      const content = document.createTextNode(result.name);

      newAnchor.appendChild(content);
      newAnchor.setAttribute('href', result.url);

      newAnchor.classList.add('dropdown-item');
      newAnchor.classList.add('result');

      newListItem.appendChild(newAnchor);

      newListItem.addEventListener('click', e => {
        console.log('test')
        window.location.href = result.url;
      });

      document.getElementById('nav-search-dropdown').appendChild(newListItem);
    }
  });

  document.getElementById('nav-searchbar').addEventListener('focus', e => {
    document.getElementById('nav-search-dropdown').classList.add('show');
  });


  // Do I get fired for this awful hack?
  document.getElementById('nav-searchbar').addEventListener('focusout', e => {
    setTimeout(() => {
      document.getElementById('nav-search-dropdown').classList.remove('show');
    }, 100);
  });
})();