const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
// Aqui selecionamos o campo de input
const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Gerar QR Code
function generatorCode() {
// E aqui adicionamos o valor inserido no input dentro de outra variável
    const qrCodeInputValue = qrCodeInput.value
// Validação para garantir que se nenhum valor for inserido, nada será gerado
    if(!qrCodeInputValue) return;
// Como valor devolvido pela api demora um certo tempo, usamos essa função abaixo para criar um texto de loading no botão
    qrCodeBtn.innerText = "Gerando código..."
// Aqui estamos inserindo o link da api geradora de qrcode,com o valor alterado no final para ser o inserido
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
// Aqui estamos fazendo com que a classe só seja ativada quando a img devolvida for carregada
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        // Aqui alteramos o valor do button quando o valor é carregado
        qrCodeBtn.innerText = "Código criado";
    })
    
    
};

// Eventos
qrCodeBtn.addEventListener("click", () => {
    generatorCode();
});
// Evento de enter para criar o qrcode também pressionando a tecla Enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generatorCode();
    }
});

// Limpar área do QR Code

qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText= "Gerar QR code";
    }
})

