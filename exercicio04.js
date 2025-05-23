// Descrição:
//Peça um número limite e some todos os pares de 1 até ele usando while. 
//Mostre a soma no alert  na pagina html.

function somarPareswhile() {
    let numerolimite = parseInt(prompt("Digite um número limite:"));
    let soma = 0;
    let i = 1;

    while (i <= numerolimite) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    alert("A soma dos números pares de 1 até " + numerolimite + " é: " + soma);
}