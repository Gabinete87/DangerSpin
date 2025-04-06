let creditos = 100;
const creditosDisplay = document.getElementById("creditos");
const resultadoDiv = document.getElementById("resultado");
const historial = document.getElementById("historial");

const numerosRojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const numerosNegros = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

document.getElementById("girarBtn").addEventListener("click", () => {
    if (creditos <= 0) {
        alert("¡Sin créditos! Recarga para seguir jugando.");
        return;
    }

    const numero = Math.floor(Math.random() * 37);
    let color = "green";

    if (numerosRojos.includes(numero)) color = "red";
    else if (numerosNegros.includes(numero)) color = "black";

    creditos--;
    creditosDisplay.textContent = creditos;

    resultadoDiv.innerHTML = `🎯 Número: <span class="${color}">${numero}</span>`;

    const itemHistorial = document.createElement("li");
    itemHistorial.innerHTML = `<span class="${color}">${numero}</span>`;
    historial.prepend(itemHistorial);
});
