
function classificaridade() {

    let idade = parseInt(prompt("Digite sua idade"));
    


    console.log("Sua idade é: " + idade);


    if (idade <= 12) {
        alert("Você é Criança.");
    } else if (idade >= 13 && idade <= 17) {
        alert("Você é Adolescente.");
    } else if (idade >= 18 && idade <= 59) {
        alert("Você é Adulto.");
    } else {
        alert("Você é Idoso.");
    }



}
