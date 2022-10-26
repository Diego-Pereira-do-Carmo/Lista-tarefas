// selecionando os elementos do HTML
const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');
const elementoBotaoLimpar = document.getElementById('clear');
//____________________________________________________________________________________


// Criando o arrey para guardar as tarefas
let tarefas = JSON.parse(localStorage.getItem('task')) || [];
// ____________________________________________________________________________________


// função para pegar os elementos salvos no localstorage e renderizar na tela como
//  um elemento li
onload = function () {
       
    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);
        const elementoBtsRemove = document.createElement('button');
        const posicao = tarefas.indexOf(tarefa);
        const textoBtsRemove = document.createTextNode('X');
        // const underline = document.createElement('hr');


        elementoBtsRemove.appendChild(textoBtsRemove);
        elementoBtsRemove.setAttribute('onclick', `deletaTarefa(${posicao})`);
        elementoTarefa.appendChild(textoTarefa);
        elementoLista.appendChild(elementoTarefa);
        elementoTarefa.appendChild(elementoBtsRemove);
        // elementoTarefa.appendChild(underline);
    }
}
// _________________________________________________________________________________________

// Função responsável por criar as linhas da lista e renderizar na tela,
// Essa função também adiciona o botão responsável por remover uma determinada tarefa
function mostraTarefas() {

    elementoLista.innerHTML = null;

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);
        const elementoBtsRemove = document.createElement('button');
        const posicao = tarefas.indexOf(tarefa);
        const textoBtsRemove = document.createTextNode('X');
        // const underline = document.createElement('hr');
        

        elementoBtsRemove.appendChild(textoBtsRemove);
        elementoBtsRemove.setAttribute('onclick', `deletaTarefa(${posicao})`);
        elementoTarefa.appendChild(textoTarefa);
        elementoLista.appendChild(elementoTarefa);
        elementoTarefa.appendChild(elementoBtsRemove);
        // elementoTarefa.appendChild(underline);
    }
    localStorage.setItem('task', JSON.stringify(tarefas));
}
// ___________________________________________________________________________________


// função responsável por adicionar tarefas no arrey, a cada adição de tarefa a
//  função de renderizar tarefas na tela é chamada, mantendo a tela atualizada
//   com o arrey
function addTarefas() {
    const textTarefa = elementoInput.value;
    tarefas.push(textTarefa);
    elementoInput.value = null;
    mostraTarefas();
}
// ______________________________________________________________________________________

function limparLista (){
    localStorage.clear();
    location.reload();
}



// Colocando atributo de click no botão adicionar, para ele ser capaz de chamar a função
// quando o usuário clicar em adicionar
elementoBotao.setAttribute('onclick', 'addTarefas()');
// ______________________________________________________________________________________

// Adicionando atributo de click no botão limpar, para que a lista de tarefas seja 
// zerada
elementoBotaoLimpar.setAttribute('onclick', 'limparLista()');
// _______________________________________________________________________________________


// Função para deletar uma tarefa e renderizar a lista de tarefas atualizadas
function deletaTarefa(posicao) {
    tarefas.splice(posicao, 1)
    mostraTarefas();
}
// ______________________________________________________________________________________
