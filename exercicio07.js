
function verificarPrimo() {
    let numero = parseInt(prompt("Digite um número: "))
    let primo = true

    if (numero < 2) {
        primo = false
        
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false
                break
            }
        }
    }

    if (primo) {
        alert(`${numero} é um número primo.`)
    } else {
        alert(`${numero} não é um número primo.`)
    }

}