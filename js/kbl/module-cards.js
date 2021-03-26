const nodeChainAddClass = (node, className) => {
  for (let c of className.split(' ')) {
    node.classList.add(c);
  }

  return node;
}

const nodeChainAddAttr = (node, attr, value) => {
  node.setAttribute(attr, value);

  return node;
}

const nodeChainAppend = (node, child) => {
  node.appendChild(child);

  return node;
}

const nodeChainAppendChild = (node, child) => {
  node.appendChild(child);

  return child;
}

const createEl = (nodeType, classes, text) => {
  const node = document.createElement(nodeType);

  // I use c to avoid namespace conflicts
  if (classes && classes.length) {
    for (let c of classes) {
      node.classList.add(c);
    }
  }

  if (text) {
    node.appendChild(document.createTextNode(text))
  }

  return node;
}

const createModules = (modules) => {
  let modString = '';

  for (let mod of modules) {
    modString += mod + ' ';
  }

  let container = createEl('DIV', ['mb-1', 'module'], modString.trim());

  return container;
}

(() => {
  const moduleCardContainer = document.getElementById('module-card-container');

  axios.get('http://bioinfocore.usu.edu/api/modfiles/modules').then(res => {
    console.log(res.data);

    for (let module of res.data.payload) {
      // I should be arrested for doing this but it's okay
      let column = createEl('DIV', ['col-sm-4']);
      let kblCard = createEl('DIV', ['kbl-card', 'hover', 'mx-2', 'my-3']);

      column.appendChild(kblCard);

      let anchorTitle = document.createElement('a')
      anchorTitle.classList.add('module-title');
      anchorTitle.setAttribute('href', module.link);
      anchorTitle.appendChild(document.createTextNode(module.name));

      kblCard.appendChild(nodeChainAppend(nodeChainAddClass(document.createElement('DIV'), 'mb-2'), anchorTitle));

      let availModules = createEl('DIV', ['avail-mods', 'no-select'], 'Available Modules: ');

      kblCard.appendChild(availModules);
      kblCard.appendChild(createModules(module.versions));

      moduleCardContainer.appendChild(column);
    }

    document.getElementById('load-container').classList.add('d-none');
    moduleCardContainer.classList.add('loaded');
  });

})();
