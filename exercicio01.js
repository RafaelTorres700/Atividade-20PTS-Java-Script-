// // Questão 1 – Calculadora Avançada
// // Função: calculadoraAvancada()
// // Descrição:
// // Peça dois números e a operação desejada (+, -, *, /, %, **). Use if/else para realizar a operação. Mostre o resultado com
// // document.write().

function calculadoraAvancada() {
    let num1 = parseFloat(prompt("Digite o primeiro número:")); //parseFloat() converte uma string e retorna um número
    let operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):"); //prompt() exibe caixa de diálogo para o usuário digitar algo 
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    
    let resultado;


    if (operacao === "+") {
        resultado = num1 + num2;


    } else if (operacao === "-") {
        resultado = num1 - num2;
    }

    else if (operacao === "*") {
        resultado = num1 * num2;
    }

    else if (operacao === "/") {
        resultado = num1 / num2;
    }

    else if (operacao === "%") {
        resultado = num1 % num2;
    }

    else if (operacao === "**") {
        resultado = num1 ** num2;
    }



    alert(`O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);
}