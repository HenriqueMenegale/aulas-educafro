function sorteiaNumero(numeroMaximo) {
    //Math.random gera um número de 0 a 1;
    var numeroAleatorio = Math.random();
    numeroAleatorio *= numeroMaximo;

    //Math.floor arredonda
    numeroAleatorio = Math.round(numeroAleatorio);

    return numeroAleatorio;
}

/**
 * Esta função irá sortear números até que o numero na variável "numeroProcurado" seja encontrado. Então ele diz quantos numeros foram sorteados e quais,
 */
function encontraNumero(numeroProcurado, numeroMaximo){
    var numerosSorteados = [];
    var contador = 0;

    do {
        // .includes verifica se a array possui determinado valor
        novoNumero = sorteiaNumero(numeroMaximo);
        contador++;
        //verifica se a array de numeros sorteados não tem o número sorteado agora
        if(!numerosSorteados.includes(novoNumero)){
            // .push adiciona um valor no final da array
            numerosSorteados.push(novoNumero)
        }
    } while(novoNumero != numeroProcurado)

    console.log(`Total de sorteios ${contador}.`)
    console.log(`Numeros unicos sorteados: ${numerosSorteados}`);
}

encontraNumero(5, 60);