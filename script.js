const createGridItem = (row, col) => {
  const gridItem = document.createElement("div");
  gridItem.style.gridColumn = `${col} / ${col + 1}`;
  gridItem.style.gridRow = `${row} / ${row + 1}`;

  return gridItem;
};
