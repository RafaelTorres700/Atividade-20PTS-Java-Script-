// Peça números até o usuário digitar "fim". Calcule a média dos números inseridos com while.
function mediaAritmetica() {
    let soma = 0;
    let contador = 0;

    while (true) {
        let entrada = prompt("Digite os números para a média (ou 'fim' para encerrar):");

        if (entrada.toLowerCase() === "fim") {
            break;
        }

        let numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            soma += numero;
            contador++;
        } else {
            alert("Entrada inválida. Por favor, digite um número.");
        }
    }

    if (contador > 0) {
        let media = soma / contador;
        alert("A média dos números digitados é: " + media);
    } else {
        alert("Nenhum número válido foi digitado.");
    }
}