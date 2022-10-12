// Navigates between the tabs in the sidebar.
function navigateBetween(tabID, element) {
  let sidebarContents = document.getElementsByClassName("tabContent");
  for (let i = 0 ; i < sidebarContents.length ; i++) {
    sidebarContents[i].style.display = 'none';
  }

  let menuButtons = document.getElementsByClassName("menuItem");
  for (let i = 0 ; i < menuButtons.length ; i++) {
    menuButtons[i].style.backgroundColor = '#8EA3D5';
  }

  document.getElementById(tabID).style.display = 'block';
  element.style.background = '#6683C6';
}
