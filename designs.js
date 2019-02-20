// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.addEventListener('submit', function makeGrid () {
  const inputHeight = document.getElementById('inputHeight'); // height of grid input by user
  const inputWidth = document.getElementById('inputWidth'); // width of grid input by user
  const canvas = document.getElementById('pixelCanvas'); // table that acts as grid
  const color = document.getElementById('colorPicker'); // color input by user

  event.preventDefault(); // suppresses automatic refresh of grid upon submit

  // loop to remove all child elements of the table to clear Grid
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  // loop to create rows
  for (let row = 1; row <= inputHeight.value; row += 1) {
    const newRow = document.createElement('tr');
    canvas.appendChild(newRow);

    // loop to create cells within rows
      for (let column = 1; column <= inputWidth.value; column +=1) {
        // add td element (cell) to its parent tr element (row)
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
        // add event listener to each cell
        newCell.addEventListener('click', function (event) {
          event.target.style.backgroundColor = color.value;
        })
      }
  }
  })
