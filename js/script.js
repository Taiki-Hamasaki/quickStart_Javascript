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
var audio;

/* document.querySelector() é uma "ferramenta" de seleção de elementos html
 * mais poderosa, que filtra pela tag html e, opcionalmente, seu id(#) e class(.)
 * além dele há também querySelectorAll() que retorna todos os elementos
 * html que tiver essa identificação
 */
var btnVoltar;
var btnComecar;

var div;


// Uma maneira de se criar um novo evento em um elemento(melhor e mais recomendado, 
// principalmente por poder adicionar mais de uma função no mesmo evento)
// EVENTO: Carregamento total da página
window.addEventListener('load', () => { // HÁ DOIS TIPOS DE DECLARAÇÃO DE FUNÇÕES:
    // FUNÇÕES "DECLARADAS": function nomeFuncao() {Seu código aqui}

    // FUNÇÕES ANÔNIMAS: () => {Seu código aqui} -- UMA ALTERNATIVA ÀS FUNÇÕES DECLARADAS
    // AO ADICIONÁ-LAS COMO FUNÇÃO "ANÔNIMA" USA-SE DA SEGUINTE MANEIRA: function() {Seu código aqui}

    // Utilizaremos esse evento de carregamento da página para criar e estilizar as variáveis de escopo global

    btnComecar = document.querySelector('button#start'); // No caso, selecionando um botão que tiver o id="start"

    btnVoltar = document.createElement('button'); //botão criado
    btnVoltar.id = 'voltar';
    btnVoltar.classList += ' buttons'; // adicionando uma classe ao botão criado
    btnVoltar.appendChild(document.createTextNode('Voltar')); //Adicionando um texto ao botão
    btnVoltar.addEventListener('click', () => {
        let corpoPagina = document.querySelector('body');

        document.body.style.background = '#fff';
        document.getElementById('btn1').style.position = 'initial';

        corpoPagina.removeChild(document.querySelector('div#buttons-div')); // Está removendo o elemento da página
        corpoPagina.removeChild(document.querySelector('button#voltar')); // Está removendo o elemento da página
        
        btnComecar.style.display = 'block';
        audio.pause();
        audio.currentTime = 0;
    });

    audio = document.getElementById('audio');

    div = document.createElement('div');
    novosEventos();
})



function comecar() {
    audio.src = 'GenericTutorialSong.m4a';
    audio.play();
    
    // Abrirá uma janelinha com mensagem
    window.alert('Música adicionada por JAVASCRIPT');
    
    // Todo objeto que se aponta para um elemento html pode ter suas
    // propriedades css por meio do atributo style
    btnComecar.style.display = 'none';
    
    

    // Adicionando o botão na página(no caso, dentro do body)
    document.body.appendChild(btnVoltar);
    document.body.appendChild(div); // Referente a div com os eventos
}

function novosEventos() {
    // Criação dos btn's
    div.id = 'buttons-div';
    div.classList += ' disp-flex';
    let buttons = [4];
    for(let i = 0;i<4;i++) {
        buttons[i] = document.createElement('button');
        buttons[i].classList += ' buttons btnEvents';
        buttons[i].id = 'btn' + (i+1);
        buttons[i].appendChild(document.createTextNode(`Evento [${i+1}]`));
        div.appendChild(buttons[i]);
    }
    addEvents(buttons);
}

function addEvents(elementos) {
    for(let i = 0;i<elementos.length;i++) {
        elementos[i].addEventListener('click', (event) => {
            let disparador = event.target;

            if(disparador.id === 'btn1') {
                console.log('Evento 1 disparado');
                
                // Evento mudará a posição do botão
                disparador.style.position = 'absolute';

                disparador.style.left = (Math.random() * 100) + 'vw';
                disparador.style.top = (Math.random() * 100) + 'vh';
            } else if(disparador.id === 'btn2') {
                document.body.style.background = 'linear-gradient(90deg, rgba(203,222,34,1) 14%, rgba(255,143,0,1) 82%)';
                disparador.addEventListener('dblclick', (event) => {
                    window.alert('Evento de clique duplo disparado');
                    document.body.style.background = '#000';
                });
            } else if(disparador.id === 'btn3') {
                document.getElementById('voltar').style.display = 'none';
                document.getElementById('buttons-div').style.display = 'none';
                document.getElementById('pop_upJS').style.display = 'block';

                document.getElementById('fechar').addEventListener('click', () => {
                    document.getElementById('voltar').style.display = 'block';
                    document.getElementById('buttons-div').style.display = 'flex';
                    document.getElementById('pop_upJS').style.display = 'none';
                })  
            } else if(disparador.id === 'btn4') {
                document.getElementById('voltar').style.display = 'none';
                document.getElementById('buttons-div').style.display = 'none';
                document.getElementById('pop_upForm').style.display = 'block';

                document.getElementById('fecharForm').addEventListener('click', () => {
                    window.alert('Exemplo de máscara pego pronto da comunidade');
                    document.getElementById('voltar').style.display = 'block';
                    document.getElementById('buttons-div').style.display = 'flex';
                    document.getElementById('pop_upForm').style.display = 'none';
                });
            }
        })
    }
}
