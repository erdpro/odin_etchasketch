// Create divs based on input
function createGrid(number) {
    for (i = 0; i < number; i++) {
        console.log("in row");
        const divrow = document.createElement("div");
        divrow.className = "row";
        for (j = 0; j < number; j++) {
            const divcolumn = document.createElement("div");
            divcolumn.className = "column";
            divcolumn.style.backgroundColor = "black";
            divcolumn.style.opacity = 0;
            divrow.appendChild(divcolumn);
        }
        container.appendChild(divrow);
    }
    const divs = document.querySelectorAll(".column");

    // Mouseover effect for darkening squares
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            let currentopacity = div.style.opacity;
            currentopacity = +currentopacity + 0.2;
            div.style.opacity = currentopacity.toString();
        });
    });
}

function deleteGrid() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    };
}

// Create intial grid
const container = document.querySelector(".container");
createGrid(16);
const divs = document.querySelectorAll(".column");

// Call function to change grid size if user selects button
const button = document.querySelector("button");
button.addEventListener("click", () => {
    number = prompt("Select size of grid between 16 and 100");
    if (number => 16 && number <= 100) {
        deleteGrid();
        createGrid(number);
    } else {
        alert("Input not valid");
    }
});