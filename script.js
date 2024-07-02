const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector(".caixa-alternativas");
const caixaResultado =document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [
    enunciado: "Quem Ganhou A Copa Do Mundo De 2022 ",
    alternativas: [
"Argentina",
"França"
]
   ];`function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativa.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

