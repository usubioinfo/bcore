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

(() => {
  const moduleCardContainer = document.getElementById('module-card-container');

  console.log('test')
  axios.get('http://bioinfocore.usu.edu/api/modfiles/modules').then(res => {
    console.log(res.data);

    for (let module of res.data.payload) {
      // I should be arrested for doing this but it's okay
      let kblCard = nodeChainAddClass(nodeChainAddClass(document.createElement('DIV'), 'col-sm-4'), 'kbl-card hover mx-2 my-3');

      let anchorTitle = document.createElement('a')
      anchorTitle.classList.add('module-title');
      anchorTitle.setAttribute('href', module.link);
      anchorTitle.appendChild(document.createTextNode(module.name));

      kblCard.appendChild(nodeChainAppend(nodeChainAddClass(document.createElement('DIV'), 'mb-2'), anchorTitle));

      moduleCardContainer.appendChild(kblCard);
    }
  });

})();
