import PromptSync from "prompt-sync"



export const clearContinueLog = (msg: string) : void => {
    const prompt = PromptSync()
    
    console.clear()
    console.log(msg)
    prompt('Aperte Qualquer Tecla Para Continuar...')

}