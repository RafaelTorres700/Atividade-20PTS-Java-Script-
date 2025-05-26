// 

function verificarMultiplos() {
    let inicio = prompt("Digite o número inicial:");
    if (inicio === null) return;

    let fim = prompt("Digite o número final:");
    if (fim === null) return;

    inicio = parseInt(inicio);
    fim = parseInt(fim);

    if (isNaN(inicio) || isNaN(fim)) {
        alert("Por favor, insira apenas números válidos.");
        return;
    }

    let encontrou = false;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            alert("O número " + i + " é par e também múltiplo de 3.");
            encontrou = true;
        }
    }

    if (!encontrou) {
        alert("Nenhum número satisfaz a condição.");
    }
}
