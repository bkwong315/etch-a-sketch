const createGridItem = (row, col) => {
  const gridItem = document.createElement("div");
  gridItem.style.gridColumn = `${col} / ${col + 1}`;
  gridItem.style.gridRow = `${row} / ${row + 1}`;

  return gridItem;
};

const calcGridSize = (dim) => {
  const grid = document.querySelector(".grid");

  grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
};
