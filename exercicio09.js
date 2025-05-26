

//Peça um número maior que zero. Mostre contagem regressiva até 0 com while.
function contadorRegressivo() {
    let i = parseInt(prompt("Digite um número maior que zero:"));
    

    if (i > 0) {
        while (i >= 0) {
            alert(i);
            i--;
                    }
        alert("Contagem regressiva concluída!");
    } else if (i === null) {
        
    } 
}