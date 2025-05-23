

//Peça um número maior que zero. Mostre contagem regressiva até 0 com while.
function contadorRegressivo() {
    let i = parseInt(prompt("Digite um número maior que zero:"));

    if (i > 0) {
        while (i >= 0) {
            alert(i);
            i--;
        }
    } else {
        alert("Número inválido. Por favor, digite um número maior que zero.");
    }
}
