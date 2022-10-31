// This file is used to store data on levels:
const levelOne = {
  rowTitles : [
    'Pong Pong',
    'Hard Milkwood',
    'Indian Rubber Tree',
    'Poisonous Fruits',
    'Thick Leaves',
    'Spoon-shaped Leaves'
  ],
  colTitles : [
    'Pong Pong',
    'Hard Milk-\n wood',
    'Indian Rubber Tree',
    'Makes Tables',
    'Orna-\n mental Plant',
    'Makes Fish Poison'
  ],
  // Not best practice, but works well enough for now.
  winningSelections : [
    `<td id="30 70" class="selectedCell" onclick="clickCell('30 70')">`,
    `<td id="50 70" class="selectedCell" onclick="clickCell('50 70')">`,
    `<td id="20 60" class="selectedCell" onclick="clickCell('20 60')">`,
    `<td id="40 60" class="selectedCell" onclick="clickCell('40 60')">`,
    `<td id="10 50" class="selectedCell" onclick="clickCell('10 50')">`,
    `<td id="20 40" class="selectedCell" onclick="clickCell('20 40')">`,
    `<td id="30 30" class="selectedCell" onclick="clickCell('30 30')">`,
    `<td id="10 20" class="selectedCell" onclick="clickCell('10 20')">`,
    `<td id="60 50" class="selectedCell" onclick="clickCell('60 50')">`
  ]
}

const levelTwo = {
  rowTitles : [
    'Freezable',
    'Dryable',
    "Stored in water",
    "Sauteed",
    "Sweets",
    "Soup",
    "Thai Basil",
    "Chocolate Mint",
    "Watercress"
  ],
  colTitles : [
    'Freeza- \n ble',
    'Dryable',
    "Stored in water",
    "Sauteed",
    "Sweets",
    "Soups",
    "Moist \n soil",
    "Some water",
    "Sunny weather"
  ],
  winningSelections : [

  ]
}

const levelThree = {
  rowTitles : [
    'Monitor Lizard',
    'White-Breasted Waterhen',
    'Plantain Squirrel',
    'Common Kingfisher',
    'Insects',
    'Small Mammals',
    'Nuts',
    'Fish',
  ],
  colTitles : [
    'Monitor Lizard',
    'White-Breasted Waterhen',
    'Plantain Squirrel',
    'Common Kingfisher',
    'Treetops',
    'Marshes',
    'Rivers',
    'Wetlands'
  ],
  winningSelections : [

  ]
}
