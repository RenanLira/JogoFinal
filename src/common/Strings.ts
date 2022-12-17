
export const menu = (numRestantes: number) => `
1 - Adicionar Jogador 
2 - Ver Jogador
3 - Remover Jogador
4 - Começar Partida (${numRestantes} jogadores restantes para começar)

0 - Sair

` 

export const itensMenu = (username: string) => `
${username}: Escolha seu item\n
1 - PEDRA
2 - PAPEL
3 - TESOURA

` 