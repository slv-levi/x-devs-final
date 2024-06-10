const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function (){
    const ehUltimocartao = cartaoAtual === cartoes.length - 1
    if(ehUltimocartao) return;

    esconderCartoeSelecionado();

    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener("click", function (){
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartoeSelecionado();

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}
function esconderCartoeSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
