function tabuadapersonalizada() {


let numerobase = parseInt(prompt("Digite o numero que quer multiplicar"));
let numerofinal = parseInt(prompt("multiplicar até que numero : "));

  console.log("Tabuada do " + numerobase + ":");


  for (let i = 1; i <= numerofinal; i++) {
    const resultado = i * numerobase;
    alert(numerobase + " x " + i + " = " + resultado);

  }
}

