// Questão 10 – Verificação de múltiplos critérios com for e operadores lógicos
// Peça ao usuário um número inicial e um número final. Use um laço for para percorrer esse intervalo e:
// Exibir apenas os números que sejam pares e múltiplos de 3 ao mesmo tempo.
// Exiba uma mensagem se nenhum número satisfizer a condição.
// Utilize os operadores lógicos (&&, ||) para aplicar a regra.
// Exemplo:
// Se o usuário informar início = 1 e fim = 15, o script deve exibir:
// 6 e 12 (são pares e múltiplos de 3).

function verificarMultiplos() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let fim = parseInt(prompt("Digite o número final:"));
    let encontrou = false;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            alert("Este numero é par e também múltiplo de 3 " + i);
            encontrou = true;
        }
    }

    if (!encontrou) {
        alert("Nenhum número satisfaz a condição.");
    }
}