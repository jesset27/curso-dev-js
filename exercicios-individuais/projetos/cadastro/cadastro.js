let usuarios = JSON.parse(localStorage.getItem("cadastro_usuarios")) || [];

// Telas
const telaLista = document.querySelector("#tela-lista");
const telaCadastro = document.querySelector("#tela-cadastro");

// Botões
const btnAdicionar = document.querySelector("#btn-adicionar");
const btnVoltarLista = document.querySelector("#btn-voltar-lista");

// Inputs
const inputId = document.querySelector("#user-id");
const inputNome = document.querySelector("#user-nome");
const inputSobrenome = document.querySelector("#user-sobrenome");
const inputEmail = document.querySelector("#user-email");
const inputCep = document.querySelector("#user-cep");
const inputRua = document.querySelector("#user-rua");
const inputNumero = document.querySelector("#user-numero");
const inputComplemento = document.querySelector("#user-complemento");
const inputBairro = document.querySelector("#user-bairro");
const inputCidade = document.querySelector("#user-cidade");
const inputEstado = document.querySelector("#user-estado");
const inputObs = document.querySelector("#user-obs");
const form = document.querySelector("#user-form");


function mostrarTelaLista() {
    telaLista.classList.remove('d-none');
    telaCadastro.classList.add('d-none');
}

function mostrarTelaCadastro() {
    telaLista.classList.add('d-none');
    telaCadastro.classList.remove('d-none');
}

function salvarUsuario(){
    const id = Number(inputId.value);
    const nome = inputNome.value;
    const sobrenome = inputSobrenome.value;
    const email = inputEmail.value;
    const rua = inputRua.value;
    const numero = inputNumero.value;
    const complemento = inputComplemento.value;
    const bairro = inputBairro.value;
    const cidade = inputCidade.value;
    const estado = inputEstado.value;
    const obs = inputObs.value;


    const usuario = {
        id: id || Date.now(), nome, sobrenome, email, rua, numero, complemento, bairro, cidade, estado, obs
    }
    usuarios.push(usuario);
    salvarStorage();
}
function salvarStorage(){
    localStorage.setItem("cadastro_usuarios", JSON.stringify(usuarios));
}
salvarStorage()

function renderizarTabela(){
    tabelaCorpo.innerHTML = "";
    usuarios.forEach(user =>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>Email</td>
            <td>
                botão editar cor laranja
                botao excluir cor vermelha
            </td>
        `;
    })
}

function inicializar() {
    btnAdicionar.addEventListener('click', mostrarTelaCadastro);
    btnVoltarLista.addEventListener('click', mostrarTelaLista);
    form.addEventListener('submit', salvarUsuario);
}
inicializar();