

// Função para validar login
function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Lógica de verificação de login fictícia
    if (email === 'jvbfs123@gmail.com' && senha === 'senha123') {
        alert('Login bem-sucedido!');
        // Redirecionar para a página de reservar corridas
        window.location.href = "./reserve.html";
        return true;
    } else {
        alert('Credenciais inválidas. Tente novamente.');
        return false;
    }
}


function reservarCarona() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const data = document.getElementById('data').value;
    const qtdVagas = document.getElementById('qtdVagas').value;

    if (origem === '' || destino === '' || data === '' || qtdVagas === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Simulação de reserva de carona
    alert('Carona reservada com sucesso para ' + qtdVagas + ' pessoa(s)!');
    return true;

    // Simulação de reserva de carona
    alert('Carona reservada com sucesso para ' + qtdVagas + ' pessoa(s)!');
    return true;
}

// Função para oferecer carona
function oferecerCarona() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const data = document.getElementById('data').value;
    const qtdVagas = document.getElementById('qtdVagas').value;
    const preco = document.getElementById('preco').value;

    if (origem === '' || destino === '' || data === '' || qtdVagas === '' || preco === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Simulação de oferecimento de carona
    alert('Carona oferecida com sucesso!');
    return true;
}

// Função para redirecionar para a página de reserva ao clicar no botão de cadastro
function redirecionarParaReserva() {
    window.location.href = "./reserve.html";
}

// Função para mostrar mensagem de sucesso ao reservar carona
function mostrarMensagemReserva() {
    alert("Caronas reservadas com sucesso!");
}

// Função para evitar a propagação de eventos ao clicar no botão de redirecionamento
function evitarPropagacao(event) {
    event.stopPropagation();
}

// Função para exibir a hora atual
function exibirHoraAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    alert('Hora atual: ' + hora + ':' + (minutos < 10 ? '0' : '') + minutos);
}

// Função para exibir uma mensagem de boas-vindas personalizada
function exibirMensagemBoasVindas() {
    const nome = prompt('Qual é o seu nome?');
    alert('Olá, ' + nome + '! Bem-vindo(a) à nossa página!');
}

// Função para ocultar um elemento HTML
function ocultarElemento() {
    const elemento = document.getElementById('elementoParaOcultar');
    elemento.style.display = 'none';
}

// Função para exibir um elemento HTML oculto
function exibirElementoOculto() {
    const elemento = document.getElementById('elementoOculto');
    elemento.style.display = 'block';
}

// Função para rolar suavemente até o topo da página
function rolarParaOTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para exibir uma mensagem de confirmação ao clicar em um botão
function exibirMensagemConfirmacao() {
    if (confirm('Tem certeza de que deseja prosseguir?')) {
        alert('Ação confirmada!');
    } else {
        alert('Ação cancelada.');
    }
}
