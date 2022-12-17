import { NomeVazioError } from "../execpitons/ApplicationError";
import { itemInfo } from "./Item";

export class Jogador {

    private _item: itemInfo | undefined = undefined

    constructor(
        private _username: string
    ){
        if (!_username.length) {
            throw new NomeVazioError()
        }
    }

    public escolherItem = (item: itemInfo) : itemInfo => {

        this._item = item
        
        return this._item
    }

    
    public get username() : string {
        return this._username
    }

    
    public get item() : itemInfo | undefined {
        return this._item
    }
    
    public toString() : string {
        return `| ${this._username} |`
    }

}