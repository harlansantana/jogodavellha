




// declarando variavel jogador com valor nulo
var jogador = null;
var vencedor = null;
// selecionando tag do html que tem o id 'jogador-selecionado'
var jogadorselecionado = document.getElementById('jogador-selecionado')
//chamando a funcao mudarjogador com o valor 'x'
mudarjogador('x');


var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

// criando a funcao escolherQuadrado
function escolherQuadrado(id) {
    if (vencedor !== null)
        return;

    //deçlarando a variavel quadrado com valor do tag do html chamando a funcao document.getElementById    
    var quadrado = document.getElementById(id);
    // se o sibolo do quadrado for diferente de if retorna ir nao executa as funcoes de baixo
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'x') {
        jogador = 'o';
    } else {
        jogador = 'x';
    }

    mudarjogador(jogador);
    checaVencedor();
}

//declarando/criando funcao mudarjogador que recebe parametro valor
function mudarjogador(valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarcorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarcorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarcorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarcorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarvencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarcorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarcorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarcorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarcorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado1);
        return;
    }
}

function mudarvencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarcorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() 
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i= 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador('x')
}

