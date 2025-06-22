// Seleção
const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");


// Funções:
// Função para Gerar Qr Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; //Aqui foi usada uma API para gerar QrCode
   
    container.classList.add("active");

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código criado!"
    })
}

// Eventos
// Eventos para criar QRCode
qrCodeBtn.addEventListener("click", () => { // "click" é um evento que é acionado quando o usuário clica em um botão.
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => { // "keydown" é um evento que ocorre quando uma tecla do teclado é pressionada.
    if(e.code === "Enter") {
        generateQrCode();
    }
});

// Eventos para limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => { //"keyup" é um tipo de evento que ocorre quando uma tecla é solta após ter sido pressionada.
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});