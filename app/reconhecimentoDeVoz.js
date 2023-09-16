 const elementoChute = document.getElementById('chute')
 const toPlay = document.getElementById('iniciar')
 const louncher = document.getElementById('louncher')
 
 window.SpeechRecognition = window. SpeechRecognition || window.webkitSpeechRecognition; // acessando a API pela porta de entrada 

 // especificando como serão retornados os dados  
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)


function onSpeak(e) {
    chute = e.results[0][0].transcript

    porExtenso = numeros.find(numero => numero.name === chute)
    if (porExtenso){
        chute = porExtenso.value 
    } 

    gameStart(chute);
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function gameStart(chute) {
    if (chute === 'jogar') {
        toPlay.classList.toggle('inicio');
        louncher.classList.add('louncher');
    }
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())





