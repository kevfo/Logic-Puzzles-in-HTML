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
function makeLogicGrid(nrow, ncol, decrementBy, tableID, levelData) {
  let table = document.getElementById(tableID), rowCounter = 0, tableContents = '';
  let id = 0, headerBegin = '<tr> <td> </td>', headerEnd = '</tr>';
  let cellContent = 0;

  for (let i = levelData.colTitles.length - 1 ; i >= 0 ; i--) {
    headerBegin += `<td class = "colTitle"> ${levelData.colTitles[i]} </td>`;
  }

  headerBegin += headerEnd; tableContents += headerEnd;
  tableContents += headerBegin;

  for (let y = nrow ; y > 0 ; y--) {
    let rowBegin = '<tr>', rowEnd = '</tr>';
    rowBegin += `<td class = "rowTitle"> ${levelData.rowTitles[y - 1]} </td>`;

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

// == WINNING CONDITIONS ==

// Checks to see the grid in question has been won:
function hasWonPuzzle(tableID, solution, numSelections) {
  let table = document.getElementById(tableID);
  let selectedChoices = [], hasWon = false, selectionCount = 0, correctCount = 0;

  table.innerHTML.split('<tr>').forEach(element => {
    element.split(' ').forEach(subele => {
      console.log(subele);
    })
  })

  // selection counter here:
  if (selectionCount < numSelections) {
    console.log("You still haven't chosen 9 cells.");
  } else if (selectionCount === numSelections) {
    for (let i = 0 ; i < selectedChoices.length ; i++) {
      if (!solution.includes(selectedChoices[i])) {
        break;
      }
      correctCount++;
    }
  } else {
    console.log("You've selected too many choices!");
  }

  hasWon = correctCount === solution.length;

  // Replace this wiht a modal tag afterwards!
  console.log(hasWon ? "You've won" : "Nope, not yet!");
}

// Displays text for the modal:
