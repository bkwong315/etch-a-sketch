const createGridItem = (row, col) => {
  const gridItem = document.createElement("div");
  gridItem.style.gridColumn = `${col} / ${col + 1}`;
  gridItem.style.gridRow = `${row} / ${row + 1}`;
  gridItem.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "orange";
  });

  return gridItem;
};

const calcGridSize = (dim) => {
  const grid = document.querySelector(".grid");

  grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
};

const init = () => {
  let dim;
  let isValid = false;

  while (!isValid) {
    dim = prompt("Enter grid size (e.g. 1 - 100):");
    if (dim <= 100 && dim >= 1) isValid = true;
  }

  const grid = document.querySelector(".grid");

  calcGridSize(dim);

  let newGridItem;
  for (let row = 1; row <= dim; row++) {
    for (let col = 1; col <= dim; col++) {
      newGridItem = createGridItem(row, col);
      grid.appendChild(newGridItem);
    }
  }
};
