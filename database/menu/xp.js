const xp = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefixo* : 「  ${prefix}  」
   ┠≽ *O Criador* : ${ownerName}
   ┠≽ *VERSÃO* : 「  2.4.9  」
   ╿
┯┷ *〈 BOT NABUTO 〉*
╽
┠≽ *${prefix}info* 
┃ *Desc*: Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* 
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}totaluser*
┃ *Desc* : Mostrar bot de uso de todos os usuários
┠──────────────╼
┠≽ *${prefix}request*
┃ *Desc* : Solicitar Fiture ao Proprietário do Bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Verifique o seu nível
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Ativando / Desativando Recursos de Nivelamento
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mining XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Ativando / Desativando Recursos de Eventos
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Nota: você pode ganhar XP e subir de nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivelamento.`
}
exports.xp = xp
