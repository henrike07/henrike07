const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
    });
});