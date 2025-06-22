// SELEÇÃO DE ELEMENTOS
const createPasswordButton = document.querySelector("#create-password");

const createdPasswordElement = document.querySelector("#created-password");

const openCloseButton = document.querySelector("#open");

const createPasswordContainer = document.querySelector("#create-options");

const lengthInput = document.querySelector("#length");

const lettersInput = document.querySelector("#letters");

const numbersInput = document.querySelector("#numbers");

const symbolsInput = document.querySelector("#symbols");

const copyPasswordButton = document.querySelector("#copy-password");

// FUNÇÕES
// Letras minúsculas
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Letras maiúsculas
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Números
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

// Símbolos
const getSymbol = () => {
  const symbols = "~!@#$%^&*?<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Função que une todos as Letras (maiusculas e minusculas), números e Símbolos
const createPassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordLength = +lengthInput.value;

  const creators = [];

  if (lettersInput.checked) {
    creators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    creators.push(getNumber);
  }

  if (symbolsInput.checked) {
    creators.push(getSymbol);
  }

  if (creators.length === 0) {
    return;
  }

  for (i = 0; i < passwordLength; i = i + creators.length) {
    creators.forEach(() => {
      const randomValue =
        creators[Math.floor(Math.random() * creators.length)]();

      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);

  createdPasswordElement.style.display = "block";
  createdPasswordElement.querySelector("h4").innerText = password;
};

// EVENTOS
// Evento 1. Gerar senha
createPasswordButton.addEventListener("click", () => {
  createPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

// Evento 2. Abrir gerador de senhas
openCloseButton.addEventListener("click", () => {
  createPasswordContainer.classList.toggle("hide");
});

// Evento 3. Copiar senha
copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = createdPasswordElement.querySelector("h4").innerText;
  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada com sucesso";

    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar";
    }, 1000);
  });
});
