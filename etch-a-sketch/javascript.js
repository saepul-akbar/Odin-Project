function createGrid() {
    const container = document.getElementById("container");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "div-child";

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = "black";
        });

        container.appendChild(newDiv);
    }
}

createGrid()