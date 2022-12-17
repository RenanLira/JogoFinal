
export enum Objeto {
    PEDRA = 'PEDRA',
    PAPEL = 'PAPEL',
    TESOURA = 'TESOURA'
}

export interface itemInfo {
    item: Objeto,
    perdePara: Objeto
}

export class Itens {

    
    public pedra() : itemInfo {

        return {
            item: Objeto.PEDRA,
            perdePara: Objeto.PAPEL,
        }
    }

    public papel() : itemInfo {

        return {
            item: Objeto.PAPEL,
            perdePara: Objeto.TESOURA,
        }

    }

    public tesoura() : itemInfo {

        return {
            item: Objeto.TESOURA,
            perdePara: Objeto.PEDRA,
        }

    }

}