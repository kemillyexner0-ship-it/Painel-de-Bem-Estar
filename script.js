const humorForm = document.getElementById('humorForm');
const humorInput = document.getElementById('humorInput');
const humorRegistrado = document.getElementById('humorRegistrado');
const mensagemBtn = document.getElementById('mensagemBtn');
const mensagemMotivacional = document.getElementById('mensagemMotivacional');
const imagemHumor = document.getElementById('imagemHumor');
 
// Mensagens e imagens por humor
const dadosHumor = {
  feliz: {
    mensagens: [
      "Continue espalhando alegria!",
      "Sua felicidade é contagiante!",
      "Aproveite cada momento bom!"
    ],
    imagens: [
      "https://i.imgur.com/1Sm8x7r.jpg",
      "https://i.imgur.com/ZyI1VwD.jpg"
    ]
  },
  triste: {
    mensagens: [
      "Tudo bem se sentir triste às vezes.",
      "Você é mais forte do que imagina.",
      "Momentos difíceis também passam."
    ],
    imagens: [
      "https://i.imgur.com/tlEdXTv.jpg",
      "https://i.imgur.com/S3N1dXZ.jpg"
    ]
  },
  ansioso: {
    mensagens: [
      "Respire fundo. Vai ficar tudo bem.",
      "Você está no controle.",
      "Um passo de cada vez."
    ],
    imagens: [
      "https://i.imgur.com/Hh8Qow9.jpg",
      "https://i.imgur.com/Xj9rCeE.jpg"
    ]
  }
};
 
// Armazena humor no LocalStorage e exibe
humorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const humor = humorInput.value.trim().toLowerCase();
  localStorage.setItem('humorAtual', humor);
  humorRegistrado.textContent = `Humor registrado: ${humor}`;
  mensagemMotivacional.textContent = '';
  imagemHumor.src = '';
});
 
// Exibe mensagem e imagem com base no humor
mensagemBtn.addEventListener('click', () => {
  const humor = localStorage.getItem('humorAtual');
 
  if (!humor || !dadosHumor[humor]) {
    mensagemMotivacional.textContent = "Humor não reconhecido. Tente algo como 'feliz', 'triste' ou 'ansioso'.";
    imagemHumor.src = '';
    return;
  }
 
  const mensagens = dadosHumor[humor].mensagens;
  const imagens = dadosHumor[humor].imagens;
 
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
 
  mensagemMotivacional.textContent = mensagemAleatoria;
  imagemHumor.src = imagemAleatoria;
  imagemHumor.alt = `Imagem relacionada ao humor: ${humor}`;
});
 