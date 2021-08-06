(() => {
  document.querySelectorAll('.menu-item.dropdown').forEach(menuItem => {
    const dropDownMenu = document.getElementById(`${menuItem.id}-dropdown`);
    const container = document.getElementById(`${menuItem.id}-col`);
    
    menuItem.addEventListener('mouseover', e => {
      dropDownMenu.classList.add('selected');
    });

    dropDownMenu.addEventListener('mouseover', e => {
      dropDownMenu.classList.add('selected');
    });

    dropDownMenu.addEventListener('mouseleave', e => {
      dropDownMenu.classList.remove('selected');
    });

    container.addEventListener('mouseleave', e => {
      dropDownMenu.classList.remove('selected');
    });
  });
})();