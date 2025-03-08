function fazerCalculo(){
    let valorPeso = parseFloat (document.getElementById('peso').value);
    let valorAltura = parseFloat (document.getElementById('altura').value);
    let valorIdade = parseFloat (document.getElementById('idade').value);
    
    // verifica se os valores são números válidos
    if (isNaN(valorPeso) || isNaN(valorAltura) || isNaN(valorIdade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let valorResultado = 88 + (13.397 * valorPeso) + (4.799 * valorAltura) - (5.677 * valorIdade);
    document.getElementById('resultado').innerHTML = "Resultado: " + valorResultado.toFixed(2) + "<br>";
    document.getElementById('resultado').innerHTML += "Com base nos seus resultados, fizemos um cardápio especial para você. Clique no botão abaixo para visualizar.";
    
    let botaoSugestao = document.createElement('button'); // cria o botão de sugestão no HTML
    botaoSugestao.textContent = "Visualizar cardápio";
    botaoSugestao.id = "exibirCardapio"; // id para editar no css
    resultado.appendChild(botaoSugestao); // método que adiciona "botaoSugestao" na div "resultado" 
    botaoSugestao.addEventListener('click', function(){
        if(valorResultado <= 2000){
            window.open("cardapio1.html"); // abre cardapio1.html em outra guia
        }   else if (valorResultado > 2000 && valorResultado <= 2500){
            window.open("cardapio2.html"); // abre cardapio2.html em outra guia
        }
        });
    }    
    
document.getElementById('exibirResultado').addEventListener('click', fazerCalculo);
