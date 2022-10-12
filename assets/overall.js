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
  // element.style.background = '#6683C6'; - color bug here
}

// == FOR LOGIC GRIDS ==

// Makes the grid that we want:
function makeLogicGrid(nrow, ncol, decrementBy, tableID) {
  let table = document.getElementById(tableID), rowCounter = 0, tableContents = '';
  let id = 0;

  for (let y = nrow ; y > 0 ; y--) {
    let rowBegin = '<tr>', rowEnd = '</tr>';

    for (let x = 0 ; x < ncol ; x++) {
      rowBegin += `<td class = "logicCell" id = "${x} ${y}" onclick = "clickCell('${x} ${y}')">  </td>`;
    }

    rowBegin += ` ${rowEnd}`;

    rowCounter++;
    if (rowCounter === decrementBy) {
      ncol -= decrementBy;
      rowCounter = 0;
    }
    tableContents += rowBegin.concat(' ', rowEnd);
  }
  table.innerHTML += tableContents;
}

// Handles mouse clicking for logic grid:
function clickCell(cellID) {
  let selectedCell = document.getElementById(cellID);

  switch(selectedCell.className) {
    case "logicCell":
      selectedCell.className = 'selectedCell';
      break;
    case "selectedCell":
      selectedCell.className = 'cancelCell';
      break;
    case "cancelCell":
      selectedCell.className = 'logicCell';
      break;
  }
  return selectedCell;
}
