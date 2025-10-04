document.querySelector(".seu-nome").textContent = "Jessé Willian";
const PRECO_POR_PAGINA = 500;
const PRECO_DESIGN_ADICIONAL = 1000;

const inputPaginas = document.querySelector("#qtd-paginas");
const inputDesconto = document.querySelector("#desconto");
const checkboxDesign = document.querySelector("#inclui-design");
const inputPrazo = document.querySelector("#prazo-entrega"); 
const resumoSubtotal = document.querySelector("#resumo-subtotal");
const resumoAdicional = document.querySelector("#resumo-adicional"); 
const resumoUrgencia = document.querySelector("#resumo-urgencia"); 
const resumoDesconto = document.querySelector("#resumo-desconto");
const resumoTotal = document.querySelector("#resumo-total"); 

const calcularSubtotal = (quantidade) => quantidade * PRECO_POR_PAGINA;
const calcularValorDesconto = (valor, porcentagem) => valor * (porcentagem / 100);
function calcularTaxaDeUrgencia(valor, prazo){
    if (prazo < 5) {
       return valor * 0.1
    } else if (prazo >= 5 && prazo < 15) {
        return valor * 0.05;
    }else{
        return 0;
    }
}

function atualizarOrcamento() {
    const qtdPaginas = Number(inputPaginas.value);
    const porcentagemDesconto = Number(inputDesconto.value);
    const prazo = Number(inputPrazo.value);
    const designIncluido = checkboxDesign.checked;
    const subtotal = calcularSubtotal(qtdPaginas);
    const adicionalDesign = designIncluido ? PRECO_DESIGN_ADICIONAL : 0;
}