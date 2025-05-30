const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const conteudoCalculadora = document.getElementById("conteudo-da-calculadora");
const conteudoCardapio = document.getElementById("conteudo-do-cardapio");

function trocarConteudo() {
    // verifica qual conteúdo está visível atualmente
    if (conteudoCalculadora.classList.contains("conteudo-atual")) {
        
        conteudoCalculadora.classList.remove("conteudo-atual");
        conteudoCalculadora.classList.add("conteudo-oculto");

        
        conteudoCardapio.classList.remove("conteudo-oculto");
        conteudoCardapio.classList.add("conteudo-atual");
    } else {
        
        conteudoCardapio.classList.remove("conteudo-atual");
        conteudoCardapio.classList.add("conteudo-oculto");

        conteudoCalculadora.classList.remove("conteudo-oculto");
        conteudoCalculadora.classList.add("conteudo-atual");
    }
}

prevBtn.addEventListener("click", trocarConteudo);
nextBtn.addEventListener("click", trocarConteudo);


