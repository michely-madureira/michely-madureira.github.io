// Seleciona todas as imagens dentro de .image-box que possuem data-src (lazy load)
const lazyImages = document.querySelectorAll(".image-box img[data-src]");

// Cria o IntersectionObserver para observar as imagens e disparar o carregamento
const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return; // Ignora se não está visível

      const img = entry.target;

      if (img.dataset.src) {
        // Começa o carregamento da imagem
        img.src = img.dataset.src;

        // Quando carregar, remove o efeito de blur
        img.onload = () => {
          console.log("OK. Imagem carregada:", img.src);
          setTimeout(() => {
            img.classList.remove("loading");
          }, 700); // mantém blur por 700ms antes de remover
        };

        // Se houver erro no carregamento, remove o blur para não travar feedback
        img.onerror = () => {
          console.warn("Erro ao carregar a imagem:", img.src);
          img.classList.remove("loading");
        };

        // Evita recarregamento, removendo o atributo data-src
        img.removeAttribute("data-src");
      }

      // Para de observar a imagem após iniciar o carregamento
      observer.unobserve(img);
    });
  },
  {
    root: null, // Observa viewport
    rootMargin: "100px", // Começa a carregar um pouco antes da imagem aparecer
    threshold: 0.1 // Considera imagem visível a partir de 10%
  }
);

// Aplica classe inicial para blur e começa a observar as imagens para lazy load
lazyImages.forEach((img) => {
  console.log("Observando imagem:", img.src);
  img.classList.add("loading");
  imageObserver.observe(img);
});
