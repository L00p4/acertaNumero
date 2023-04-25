function validaChute (chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Ganhou!!!</h2>
            <h3>O número secreto é ${numeroSecreto}!</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
