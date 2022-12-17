export class ApplicationError extends Error {

    constructor(msg: string) {
        super(msg)
    }

}

export class NomeVazioError extends ApplicationError {

    constructor(msg: string = 'Nome não pode ser vazio') {
        super(msg)
    }

}

export class NomeJaExistenteError extends ApplicationError {

    constructor(msg: string = 'Jogador Com mesmo nome') {
        super(msg)
    }

}

export class MaximoJogadoresExcedidosError extends ApplicationError {

    constructor(msg: string = 'Numero maximo de jogadores excedidos') {
        super(msg)
    }

}

export class NumeroPartidasInvalidoError extends ApplicationError {

    constructor(msg: string = 'Numero de partidas não pode ser par') {
        super(msg)
    }

}

export class NumeroJogadoresInsuficenteError extends ApplicationError {

    constructor(msg: string = 'Não há jogadores suficiente na partida') {
        super(msg)
    }

}

export class JogadorNaoEncontradoError extends ApplicationError {

    constructor(msg: string = 'Jogador Escolhido não foi encontrado') {
        super(msg)
    }

}