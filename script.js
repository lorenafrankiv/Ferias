
// Definir a data alvo da contagem regressiva
const targetDate = new Date('2023-12-17T16:00:00').getTime();

function updateCountdown() {
    // Obter a data e hora atuais
    const currentDate = new Date().getTime();

    // Calcular a diferença entre a data alvo e a data atual
    const difference = targetDate - currentDate;

    // Calcular dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualizar os elementos HTML com os valores calculados
    document.getElementById('days').innerHTML = days + "<br>Days";
    document.getElementById('hours').innerHTML = hours + "<br>Hours";
    document.getElementById('minutes').innerHTML = minutes + "<br>Minutes";
    document.getElementById('seconds').innerHTML = seconds + "<br>Seconds";
}

function timer() {
    updateCountdown();
    console.log('antes');
    const tempoAtual = new Date().getTime();
    if (targetDate < tempoAtual) {
        document.getElementById('geral').innerHTML = "<h1>É FÉRIAS BB</h1>";
        console.log('depois');
    }
    
}

// Atualizar a contagem regressiva a cada segundo
setInterval(timer, 1000);

// Inicializar a contagem regressiva
updateCountdown();
