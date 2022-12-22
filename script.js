const createGridItem = (row, col) => {
  const gridItem = document.createElement("div");
  gridItem.style.gridColumn = `${col} / ${col + 1}`;
  gridItem.style.gridRow = `${row} / ${row + 1}`;
  gridItem.style.backgroundColor = "rgba(0,0,0,0)";
  gridItem.setAttribute("alpha", 0);
  gridItem.addEventListener("mouseover", (e) => {
    e.target.setAttribute("alpha", +e.target.getAttribute("alpha") + 0.1);
    e.target.style.backgroundColor = `rgba(0,0,0,${e.target.getAttribute(
      "alpha"
    )}`;
  });

  return gridItem;
};

const calcGridSize = (dim) => {
  const grid = document.querySelector(".grid");

  grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
};

const clearGrid = () => {
  const grid = document.querySelector(".grid");

  while (grid.firstElementChild) {
    grid.removeChild(grid.firstElementChild);
  }
};

const createGrid = () => {
  clearGrid();

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

window.addEventListener("load", (event) => {
  const createBtn = document.querySelector(".create-btn");

  createBtn.addEventListener("click", createGrid);
});
