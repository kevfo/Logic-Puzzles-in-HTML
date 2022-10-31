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
function hasWonPuzzle(tableID, modalClass, solution, numSelections) {
  let tableChoices = document.querySelectorAll(`.selectedCell`);
  // let modal = document.getElementById(winningModal);
  let selectedChoices = [], hasWon = false, selectionCount = 0, correctCount = 0;
  let modal = document.querySelector(`.${modalClass}`);

  // esting purposes


  // selection counter here:
  if (selectionCount < numSelections) {
    // modal.innerText = "You have not selected enough choices!"
  } else if (selectionCount === numSelections) {
    for (let i = 0 ; i < selectedChoices.length ; i++) {
      if (!solution.includes(selectedChoices[i])) {
        break;
      }
      correctCount++;
    }
  } else {
    // modal.innerText = "You have selected too many choices!";
    console.log("Too many things!");
  }

  hasWon = correctCount === solution.length;

  // Replace this wiht a modal tag afterwards!
  // console.log(hasWon ? "Congratulations: you have won" : "Nope, not yet!");
  if (hasWon) {
    // modal.innerText = "Congratulations: you won!";
    console.log("I've won!");
  } else {
    // modal.innerText = "You have some wrong answers - check again!"
    console.log("I have not won!");
  }
}

// Displays text for the modal:
