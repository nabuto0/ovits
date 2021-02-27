exports.wait = () => {
        return `⌛ Durante o processo, seja paciente⌛`
}

exports.timeEnd = () => {
        return `Waktu Habis Cuy`
}

exports.succsess = () => {
        return `✔️ Funcionou ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *nivelamento está habilitado*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *nivelamento está desabilitado*`
}

exports.levelnol = () => {
        return `*A* 0 °-°`
}

exports.stick = () => {
        return `[❗] falhou, ocorreu um erro ao alterar a imagem para o adesivo ❌`
}

exports.Iv = () => {
        return `❌ O link não é válido no modem ❌`
}

exports.group = () => {
        return `[❗]  ISTO É ESPECIAL NO GRUPO ❌`
}

exports.ownerG = () => {
        return `[❗]não é o dono do grupo`
}

exports.ownerB = () => {
        return `[❗]  que foda❌`
}

exports.admin = () => {
        return `[❗] Ehh ... Antlink, você é apenas um membro, então não funfa❌`
}

exports.Badmin = () => {
        return `[❗] Jadiin gw admin dulu lah ngentod ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NÃO ESTÁ REGISTADO 」── \ nOlá você ainda não está registrado no bot, se registre primeiro! \ncomando: ${prefix}register seunome|idade\nExemplo : ${prefix}register nabuto|14`
}

exports.daftarD = () => {
        return `*「 JÁ SE REGISTRE 」*\n\n*Você se registrou com o *`
}

exports.wrongf = () => {
        return`*formato incorreto/texto simples danta lu dick*`
}

exports.clears = () => {
        return`*limpar todo o sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nto para saber se você se inscreveu ou não, verifique a mensagem que enviei \n\nNOTA:\n*Se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nlu udah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING TOD`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* ainda não encontrado \ tente escrever *${prefix}menu* bego lu`
}

exports.owneresce = (pushname) => {
        return`*ngentod lu ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*ngentod ${pushname} limit lu hari ini udah habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}


