//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let buscadorDeNomes = document.getElementById('amigo').value;
    if (buscadorDeNomes === '') {
        alert('Por favor, insira um nome');
    } else if (amigos.includes(buscadorDeNomes)) { 
        alert('Esse nome já foi adicionado!');
    } else {
        amigos.push(buscadorDeNomes);
        listasDeNomes();
    }
    limparCampo();
    console.log(amigos);
} 

function limparCampo() {
    let buscadorDeNomes = document.getElementById('amigo');
    buscadorDeNomes.value = '';
}

function listasDeNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let nomes = 0; nomes < amigos.length; nomes++) {
        let li = document.createElement('li');
        li.textContent = amigos[nomes];
        lista.appendChild(li);
    }
    
    console.log(lista);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSelecionado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo selecionado: ${amigoSelecionado}`;
}
    
