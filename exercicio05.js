//Peça uma senha via prompt(). Permita até 3 tentativas. Senha correta: "senai123". Mostre "Acesso permitido" ou
//"Acesso bloqueado".
function validasenha() {
    const senhaCorreta = "senai123";
    let tentativas = 0;
    const maxTentativas = 3;

    while (tentativas < maxTentativas) {
        const senha = prompt("Por favor, digite a senha:");
        if (senha === senhaCorreta) {
            alert("Acesso permitido");
            break;
        } else {
            tentativas++;
            const tentativasRestantes = maxTentativas - tentativas;
            if (tentativasRestantes > 0) {
                alert(`Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            }
        }
    }
}

if (tentativas === maxTentativas) {
    alert("Acesso bloqueado");
}