function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute === 'game over') {
            document.body.style.cssText = 'transition: 0.4s;'
            document.body.style.backgroundColor = '#CD1818'
            document.body.innerHTML = `
            <h2>GAME OVER!!!</h2>
            <h3>Pressione o botão para jogar novamente.</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        } else if (chute === 'restart' || chute === 'Restart') {
            window.location.reload()
        } else {
            elementoChute.innerHTML += `<div>Valor inválido</div>`
            return
        }
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>O número deve estar entre ${menorValor} e ${maiorValor} </div>` 
        return
    }

    if (numero === numerSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numerSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numerSecreto) {
        elementoChute.innerHTML+= `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML+= `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

