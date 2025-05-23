
function classificaridade() {

    let idade = parseInt(prompt("Digite sua idade"));
    document.writeln(`Sua idade é: ${idade}`);


    console.log("A idade é: " + idade);


    if (idade <= 12) {
        alert("Voce é Criança.");
    } else if (idade >= 13 && idade <= 17) {
        alert("Voce é Adolescente.");
    } else if (idade >= 18 && idade <= 59) {
        alert("Voce é Adulto.");
    } else {
        alert("Voce é Idoso.");
    }



}
