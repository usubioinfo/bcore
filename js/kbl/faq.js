(() => {
  const titles = document.querySelectorAll('.rt-accordion-item .title');
  const content = document.querySelectorAll('.rt-accordion-item .content');

  let totalString = '';

  titles.forEach((title, index) => {
    totalString += '{\n\tquestion: "';
    totalString += title.textContent;
    totalString += '",\n\tcontent: "';
    totalString += content[index].textContent.replace(/["]/g, '').trim();
    totalString += '"\n},\n';
  });

  console.log(totalString);
})()