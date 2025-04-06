let creditos = 100;
const creditosDisplay = document.getElementById("creditos");
const resultadoDiv = document.getElementById("resultado");
const historial = document.getElementById("historial");
const numeroElegidoInput = document.getElementById("numeroElegido");
const ruleta = document.getElementById("ruleta");
const sonidoGiro = document.getElementById("sonidoGiro");
const sonidoGana = document.getElementById("sonidoGana");
const sonidoPierde = document.getElementById("sonidoPierde");

const numerosRojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const numerosNegros = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

document.getElementById("girarBtn").addEventListener("click", () => {
    if (creditos <= 0) {
        alert("¡Sin créditos! Recarga para seguir jugando.");
        return;
    }

    const numeroElegido = parseInt(numeroElegidoInput.value);

    if (isNaN(numeroElegido) || numeroElegido < 0 || numeroElegido > 36) {
        alert("Por favor ingresa un número válido entre 0 y 36.");
        return;
    }

    const numeroGanador = Math.floor(Math.random() * 37);
    let color = "green";
    if (numerosRojos.includes(numeroGanador)) color = "red";
    else if (numerosNegros.includes(numeroGanador)) color = "black";

    const gradosPorNumero = 360 / 37;
    const rotacion = 360 * 5 + (360 - (numeroGanador * gradosPorNumero));
    ruleta.style.transform = `rotate(${rotacion}deg)`;

    sonidoGiro.currentTime = 0;
    sonidoGiro.play();

    setTimeout(() => {
        creditos--;
        creditosDisplay.textContent = creditos;

        let mensaje = `🎯 Número: <span class="${color}">${numeroGanador}</span>`;

        if (numeroGanador === numeroElegido) {
            mensaje += `<br>🎉 ¡Adivinaste!`;
            sonidoGana.play();
        } else {
            mensaje += `<br>😢 No acertaste.`;
            sonidoPierde.play();
        }

        resultadoDiv.innerHTML = mensaje;

        const itemHistorial = document.createElement("li");
        itemHistorial.innerHTML = `<span class="${color}">${numeroGanador}</span>`;
        historial.prepend(itemHistorial);
    }, 4000);
});
