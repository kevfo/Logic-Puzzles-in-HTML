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

function makeIDs(tableID) {
  switch(tableID) {
    case 'logicGrid1':
      return 10;
      break;
    case 'logicGrid2':
      return 40;
      break;
    case 'logicGrid3':
      return 70;
      break;
  }
}

// Makes the grid that we want:
function makeLogicGrid(nrow, ncol, decrementBy, tableID, levelData) {
  let table = document.getElementById(tableID), rowCounter = 0, tableContents = '';
  let id = 0, headerBegin = '<tr> <td> </td>', headerEnd = '</tr>';
  let cellContent = 0, multi = makeIDs(tableID);

  for (let i = levelData.colTitles.length - 1 ; i >= 0 ; i--) {
    headerBegin += `<td class = "colTitle"> ${levelData.colTitles[i]} </td>`;
  }

  headerBegin += headerEnd; tableContents += headerEnd;
  tableContents += headerBegin;

  for (let y = nrow ; y > 0 ; y--) {
    let rowBegin = '<tr>', rowEnd = '</tr>';
    rowBegin += `<td class = "rowTitle"> ${levelData.rowTitles[y - 1]} </td>`;

    for (let x = 0 ; x < ncol ; x++) {
      rowBegin += `<td class = "logicCell" id = "${x * multi + multi} ${y * multi + multi}" onclick = "clickCell('${x * multi + multi} ${y * multi + multi}')">  </td>`;
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

// == WINNING CONDITIONS ==

// Checks to see the grid in question has been won.  If it is won, then the modal
// is shown; otherwise, nothing happens.
function hasWonPuzzle(tableID, solution, numSelections) {
  let tableChoices = document.querySelectorAll(`.selectedCell`);
  let selectionCount = tableChoices.length, correctCount = 0;

  for (let i = 0 ; i < tableChoices.length ; i++) {
    if (solution.includes(tableChoices[i].id)) {
      console.log(tableChoices[i].id)
      correctCount++;
    }
  }

  correctCount === numSelections ? alert("Congratulations!  You have solved the puzzle!") : alert("Check your answers again - there are still incorrect answers!");
}
