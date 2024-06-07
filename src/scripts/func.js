const palavras = ['azul', 'sustentável'];
let indicePalavra = 0;
let indiceLetra = 0;
let delay = false;

function escreverPalavra() {
    if (delay) {
        setTimeout(() => {
            delay = false;
        }, 3000); // Atraso de 3 segundos
    } else {
        const palavraAtual = palavras[indicePalavra];
        const textoDigitado = document.getElementById('textoDigitado');
        textoDigitado.textContent = palavraAtual.substring(0, indiceLetra);
        indiceLetra++;

        if (indiceLetra > palavraAtual.length) {
            delay = true;
            indiceLetra = 0;
            indicePalavra = (indicePalavra + 1) % palavras.length;
        }
    }
}

setInterval(escreverPalavra, 150); // Altera a palavra a cada 150 milissegundos

escreverPalavra();
    
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados dos campos de entrada
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    // Cria uma mensagem de confirmação
    const confirmationMessage = `
        Por favor, confirme seus dados:
        Nome: ${nome}
        Sobrenome: ${sobrenome}
        E-mail: ${email}
        Telefone: ${tel}
    `;

    // Exibe uma mensagem de confirmação
    const userConfirmed = window.confirm(confirmationMessage);

    // Se o usuário confirmar, prossiga com o envio dos dados
    if (userConfirmed) {
        // Salva os dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('sobrenome', sobrenome);

        // Redireciona para a página de agradecimento
        window.location.href = 'perfil.html';
    }
});

