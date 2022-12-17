
import { itensMenu, menu } from "./common/Strings"
import PromptSync from "prompt-sync"
import { Jogador } from "./models/Jogador";
import { Dispulta } from "./models/Dispulta";
import { Partida } from "./models/Partida";
import { Itens } from "./models/Item";
import { clearContinueLog } from "./common/ClearContinueLog";


const cadastrarJogador = (nome: string, dispulta: Dispulta) => {

    const jogador = new Jogador(nome.toUpperCase())

    dispulta.adicionarJogadores(jogador)

    

}

const removerJogador = (nome: string, dispulta: Dispulta) => {

    dispulta.removerJogadores(nome.toUpperCase())


}

const escolherItens = (dispulta: Dispulta) => {
    const prompt = PromptSync()
    const itens = new Itens()

    for (const jogador of dispulta.jogadores) {
        console.clear()
        
        console.log(itensMenu(jogador.username))

        const item = Number(prompt('> '))

        switch (item) {
            case 1:
                jogador.escolherItem(itens.pedra())
                break;
            
            case 2:
                jogador.escolherItem(itens.papel())
                break;

            case 3:
                jogador.escolherItem(itens.tesoura())
                break;
        
            default:
                break;
        }
    }

    

        


}

const bootstrap = async () => {
    let option = -1
    const prompt = PromptSync()
    const dispulta = new Dispulta()

    while(option != 0) {

        console.clear()

        console.log(menu(2-dispulta.jogadores.length))
        
        option = Number(prompt('> '))
        try {
            switch (option) {
                case 1:
                    console.clear()
                    const nome = prompt('Nome do Jogador: ')
                    cadastrarJogador(nome, dispulta)
                    break;

                case 2:
                    clearContinueLog(`${dispulta.jogadores}`)
                    break;
                
                case 3:
                    console.clear()
                    const jogadorRemovido = prompt('Nome do Jogador: ')
                    removerJogador(jogadorRemovido, dispulta)
                    break;

                case 4:
                    const jogo = new Partida()

                    while (!jogo.vencedores.find(v => v.vitorias > jogo.totalPartidas / 2)) {
                        escolherItens(dispulta)
                        const vencedorRodada = dispulta.batalhar()
                        if (vencedorRodada) {
                            console.log(`${vencedorRodada.username} ganhou`)
                            prompt('Aperte Qualquer tecla para continuar...')
                            jogo.adicionarVencedor(vencedorRodada)
                        }
                    }
                    const campeao = jogo.vencedores.find(v => v.vitorias > jogo.totalPartidas / 2)
                    clearContinueLog(`O Player ${campeao?.username} foi o Ganhador da Partida`)
                    break;

                default:
                    break;
            }
        } catch(e: any) {
            clearContinueLog(e.message)
        }

    }

}

bootstrap()


