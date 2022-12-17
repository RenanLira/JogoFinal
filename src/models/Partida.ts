import { NumeroPartidasInvalidoError } from "../execpitons/ApplicationError"
import { Jogador } from "./Jogador"



interface Vencedor {

    username: string,
    vitorias: number
}

export class Partida {

    private _totalPartidas: number
    private _vencedores: Vencedor[] = []


    constructor(numPartidas: number = 3) {

        if (numPartidas ** 2 === 0) {
            throw new NumeroPartidasInvalidoError()
        }

        this._totalPartidas = numPartidas

    }
    

    public adicionarVencedor(jogador: Jogador) {

        const outraVitoria = this._vencedores.find(v => v.username === jogador.username)

        if (outraVitoria) {
            const index = this._vencedores.findIndex(v => v.username === jogador.username)
            this._vencedores[index] = {...outraVitoria, vitorias: outraVitoria.vitorias + 1}
        }

        this._vencedores = [...this.vencedores, {username: jogador.username, vitorias: 1}]

    }


    // metodos gets
    
    public get totalPartidas() : number {
        return this._totalPartidas
    }

    
    public get vencedores() : Vencedor[] {
        return this._vencedores
    }
    
    
}