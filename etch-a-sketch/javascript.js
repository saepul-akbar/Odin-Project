const btn = document.getElementById("btn-size");

btn.addEventListener("click", changeSize);

function changeSize() {
    let userInput = prompt("Masukkan jumlah kotak per sisi (Maksimal 100): ");
    let size = parseInt(userInput);
    
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Input ga valid woy!")
    }
}

function createGrid(size) {
    const container = document.getElementById("container");

    container.innerHTML = "";
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "div-child";

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = "black";
        });

        container.appendChild(newDiv);
    }
}

createGrid(16);