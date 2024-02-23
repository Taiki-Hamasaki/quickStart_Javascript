/* OBJETOS JAVASCRIPT RELACIONADOS
 * A ELEMENTOS DOM(Tags do html)
 * Ao criar novos elementos html pelo JS, precisa adicioná-los,
 * adicionando em elementos já existentes da página 
 * como seus elementos filhos 
 * Feito com a função appendChild(node: Node)
 * 
 * 
 * IMPORTANTE
 * Variaveis não se declaram tipagem
 * mas podemos declarar a forma que será "usada"
 * var - Variavel de escopo global(pode ser usado em qualquer lugar)
 * let - Variavel de escopo de bloco(pode ser usado em blocos, perdendo-as após o fim dele, Ex: variaveis criadas dentro de funções)
 * const - Dado de valor constante
 */

// Atribuindo um elemento html em um objeto html
// a partir de um elemento que possua o id correspondente
// Caso não houver um, será uma variável undefined (nomenclatura diferente de nulo)
var audio = document.getElementById('audio');

/* document.querySelector() é uma "ferramenta" de seleção de elementos html
 * mais poderosa, que filtra pela tag html e, opcionalmente, seu id(#) e class(.)
 * além dele há também querySelectorAll() que retorna todos os elementos
 * html que tiver essa identificação
 */
var btnComecar = document.querySelector('button#start'); // No caso, selecionando um botão que tiver o id="start"



function comecar() {
    audio.src = 'GenericTutorialSong.m4a';
    audio.play();
    // Todo objeto que se aponta para um elemento html pode ter suas
    // propriedades css por meio do atributo style
    btnComecar.style.display = 'none';
    
    
    var btnVoltar = document.createElement('button'); // botão criado
    btnVoltar.id = 'voltar';
    btnVoltar.classList += ' buttons'; // adicionando uma classe ao botão criado
    btnVoltar.appendChild(document.createTextNode('Voltar')); //Adicionando um texto ao botão
    
    // Adicionando o botão na página(no caso, dentro do body)
    document.body.appendChild(btnVoltar);
    
    
    
    novosEventos();
}

function novosEventos() {
    let div = document.createElement('div');
    div.id = 'buttons-div';
    div.classList += ' disp-flex';
    let buttons = [5];
    for(let i = 0;i<5;i++) {
        buttons[i] = document.createElement('button');
        buttons[i].classList += ' buttons';
        buttons[i].appendChild(document.createTextNode(`Evento [${i+1}]`));
        div.appendChild(buttons[i]);
    }
    document.body.appendChild(div);
}

btnVoltar.addEventListener('click', voltar()); // Outra maneira(e melhor) de adicionar um evento, escolhendo o evento e adicionando quantas funções que desejar
function voltar() {
    console.log('')
    audio.pause();
    audio.currentTime = 0;
    btnComecar.style.display = 'block';
    document.body.removeChild(document.body.firstChild);
}
