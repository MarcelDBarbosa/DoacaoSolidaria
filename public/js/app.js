console.log('testando app.js')
// Criando as variaveis dos botoes e dos inputs
const PForPJInput = document.getElementById('select-user-type');
const nomeInput = document.getElementById('input-name');
const emailInput = document.getElementById('input-email');
const foneInput = document.getElementById('input-phone');
const instaInput = document.getElementById('input-instagram');
const descInput = document.getElementById('input-description');
const cepInput = document.getElementById('input-cep');
const addressFields = document.getElementById('address-fields');
const lograInput = document.getElementById('input-user-street');
const numInput = document.getElementById('input-street-number');
const compInput = document.getElementById('input-complement');
const cityInput = document.getElementById('input-city');
const stateInput = document.getElementById('input-state');
const cepBtn = document.querySelector('#btn-register-form');
const endBtn = document.querySelector('#btn-register-form');     //Tera outra 'id' depois da atualizacao da pagina

function limparEndereco() {
    // Limpar os campos de endereço
    cepInput.value = '';
    lograInput.value = '';
    numInput.value = '';
    compInput.value = '';
}

// Pegar o valor dos campos e salvam no localStorage com padrão Factory
cepBtn.addEventListener('click', function(event) {
    // event.preventDefault();
    const newUser = createUser(
        PForPJInput.value,
        nomeInput.value, emailInput.value, foneInput.value,
        instaInput.value, cepInput.value, lograInput.value,
        numInput.value, compInput.value, descInput.value,
        cityInput.value, stateInput.value
    );
    setUser(newUser);
    //Chamar a funcao para validacao do cep e para consulta na api
});

// Método Factory
function createUser(pf_or_pj, nome, email, fone, instagram, cep, logradouro, numero, complemento, descricao, cidade, estado) {
    const user = {
        pf_or_pj, nome, email, fone,
        instagram, cep, logradouro,
        numero, complemento, descricao,
        cidade, estado
    }
    return user
};

// Setar a propriedade users no localStorage
function setUser(user) {
    localStorage.setItem('users', JSON.stringify(user));
};

// Obter users do localStorge
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
};

// Adicionar users no localStorage dentro de uma array
function saveUsers(user) {
    const users = getUsers();
    users.push(user);
    setUser(users);
};

// Método para o usuario digitar apenas numeros no campo telefone
document.addEventListener('DOMContentLoaded', function() {  // Para esperar carregar o conteudo HTML completamente
    foneInput.addEventListener('input', function() {  // Utilizando o evento de input para "escutar" cada digito do usuario
        this.value = this.value.replace(/\D/g, '');  // Cada digito que não for um numero, ele é substituido por vazio, ou seja, apagado
    });
});

// Auto completar o CEP utilizando conectando com o searchController.js
cepInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
    const cep = this.value

    if (cep.length === 8) {
        fetch(`buscarCep?valor=${cep}`)
            .then(result => result.json())
            .then(data => {
                if (data.erro) {
                    limparEndereco()
                    addressFields.style.display = 'none';
                    alert(data.erro)
                } else {
                    lograInput.value = data.logradouro || '';
                    cityInput.value = data.localidade || '';
                    stateInput.value = data.uf || '';
                    addressFields.style.display = 'block';
                    window.location.href = '#foo'
                }
            })
            .catch(err => {
                console.error('Erro na busca do CEP: ', err);
                alert('Erro ao buscar CEP!');
            });
    }
});