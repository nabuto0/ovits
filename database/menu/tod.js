const tod = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefixo* : 「  ${prefix}  」
   ┠≽ *O Criador* : ${ownerName}
   ┠≽ *Versão* : 「  2.4.9  」
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* 
┃ *Desc*: Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc*: Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* 
┃ *Desc*: Mostrar todos os usuários do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc*: Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}totaluser*
┃ *Desc*: Mostrar todos os bots de uso do usuário
┠──────────────╼
┠≽ *${prefix}request*
┃ *Desc* : Solicitar Fiture ao Proprietário do Bot
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 VERDADE OU DESAFIO 〉*
   ╽
   ┠≽ *${prefix}truth*
   ┃ *Desc *: verdade aleatória
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ * Desc*: Random Dare
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.tod = tod
