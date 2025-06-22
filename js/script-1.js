console.log("olá  mundo"); // teste

// 1. Turns the menu hamburguer into a "X"

// 1.1 Selecting elements
const menuHamburguer = document.querySelector(".menu-hamburguer");

// 1.2 Function
function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");

  menuHamburguer.classList.toggle("change");

  // Muda a visibilidade do menu
  if (menuHamburguer.classList.contains("change")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

// 1.3 Event
menuHamburguer.addEventListener("click", () => {
  toggleMenu(); // Invoca a função
});

// 2. Implement the functionality of displaying the full text when clicking the "Leia mais..." button

// 2.1 Selecting elements
const readMore = document.querySelector(".about-content .btn");
const aboutText = document.querySelector(".about-content p");

// 2.2 Function:
// Função para alternar entre expandir e contrair o texto
function toggleText() {
  aboutText.classList.toggle("expanded");

  // Atualiza o texto do botão
  if (aboutText.classList.contains("expanded")) {
    readMore.textContent = "Leia menos...";
  } else {
    readMore.textContent = "Leia mais...";
  }
}

// 2.3 Event
readMore.addEventListener("click", (event) => {
  event.preventDefault(); // Previne o comportamento padrão do link
  toggleText(); // Invoca a função
});
