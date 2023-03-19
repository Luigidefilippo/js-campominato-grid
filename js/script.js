// Otteniamo l'elemento HTML della griglia
const grid = document.getElementById("grid");

// Creiamo le 100 celle della griglia e le aggiungiamo alla griglia
for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;
  grid.appendChild(cell);
}

// Aggiungiamo l'evento di click a tutte le celle della griglia
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // Cambiamo il colore della cella cliccata in azzurro
    cell.style.backgroundColor = "blue";
    // Stampiamo il numero della cella cliccata nella console
    console.log(`Cella cliccata: ${cell.textContent}`);
  });
});