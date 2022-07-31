const btnProximo = document.getElementById('btnProximo');
const btnAnterior = document.getElementById('btnAnterior');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnProximo.addEventListener('click', function () {
    if (cartaoAtual < cartoes.length - 1) {
        cartoes[cartaoAtual].classList.remove('selecionado')
        cartaoAtual++;
        cartoes[cartaoAtual].classList.add('selecionado');
        if (cartaoAtual === cartoes.length - 1) {
            document.getElementById('btnProximo').classList.remove('main-btn-ativo');
        }
        document.getElementById('btnAnterior').classList.add('main-btn-ativo');
    }
}
)

btnAnterior.addEventListener('click', function () {
    if (cartaoAtual > 0) {
        cartoes[cartaoAtual].classList.remove('selecionado')
        cartaoAtual--;
        cartoes[cartaoAtual].classList.add('selecionado');
        if (cartaoAtual === 0) {
            document.getElementById('btnAnterior').classList.remove('main-btn-ativo');
        }
        document.getElementById('btnProximo').classList.add('main-btn-ativo');
    }
}
)