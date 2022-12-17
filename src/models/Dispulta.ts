import { JogadorNaoEncontradoError, MaximoJogadoresExcedidosError, NomeJaExistenteError, NumeroJogadoresInsuficenteError } from "../execpitons/ApplicationError";
import { itemInfo } from "./Item";
import { Jogador } from "./Jogador";


export class Dispulta {

    private _jogadores: Jogador[] = []
    private _vencedor: Jogador | undefined


    public adicionarJogadores(jogador: Jogador) : void {

        if (this._jogadores.find((v, i) => v.username === jogador.username)) {
            throw new NomeJaExistenteError()
        }
        if (this._jogadores.length>=2) {
            throw new MaximoJogadoresExcedidosError()
        }

        this._jogadores = [...this._jogadores, jogador]


    }

    public removerJogadores(username: string) : void {

        const jogadorEncontrado = this._jogadores.findIndex(v => v.username === username)

        if (jogadorEncontrado === -1) {
            throw new JogadorNaoEncontradoError()
        }

        this._jogadores.splice(jogadorEncontrado, 1)

    }


    public batalhar() : Jogador | undefined {

        if(this._jogadores.length !== 2) {
            throw new NumeroJogadoresInsuficenteError()
        }

        const empate = this._jogadores[0].item?.item === this._jogadores[1].item?.item

        if(empate) {
            return undefined
        }

        const vencedor = this._jogadores.reduce((p, c) => {
            if (p.item?.perdePara === c.item?.item) {
                return c
            }
            return p
        })

        this._vencedor = vencedor

        return this._vencedor


    }

    //metodos gets...
    
    public get jogadores() : Jogador[] {

        return this._jogadores
    }
    
    
    public get vencedor() : Jogador | undefined {

        return this._vencedor
    }
    


}