const botoes = document.querySelectorAll('.botoes button');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    personagens.forEach(personagem => {
        personagem.classList.remove("selecionado");
    });
}

function desselecionarBotao() {
    botoes.forEach(botao => {
        botao.classList.remove("selecionado");
    });
}


