// Definições dos bottões

var display = document.querySelector(".texto_display");


loteNumeros1 = []

function calcular() {

    // capturando o evento de clique
    var evento = window.event;
    var num = evento.target;
    var text = num.innerText;

    loteNumeros1.push(text); // adicionando os elementos no array

    if (text == "Del") {
        loteNumeros1.pop();
        text = document.createTextNode(loteNumeros1)
        display.appendChild(text)
    }

    if (text == "×") {
        alert('clicou no x')
    }

    var numrosJuntos = loteNumeros1.join(""); //unindo os elementos do array

    var numeroComoInt = parseInt(numrosJuntos); //convertendo para inteiro


    // inserindo valores visíveis no na tela
    text = document.createTextNode(text)
    display.appendChild(text)


}