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

// Chamada inicial
escreverPalavra();
    