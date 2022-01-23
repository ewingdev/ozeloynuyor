var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "we ❤️ ewing",//değiştirebilirsiniz.
assets : {
large_image : "dcturkiye",//resim ismi
large_text : "BÜYÜK RESMİN ÜSTÜNDEKİ YAZI",//değiştirebilirsiniz.
small_image : "tick",//resim ismi
small_text : "KÜÇÜK RESMİN ÜSTÜNDEKİ YAZI"//değiştirebilirsiniz.
},
buttons : [{label : "BUTONA YAZILI OLACAK NİCK" , url : "YÖNLENDİRİLECEK URL"}],//istediğiniz gibi değiştirebilirsiniz.
}
})
})
console.log("Bağlandım")//değiştirebilirsiniz. istediğiniz gibi
client.login({ clientId : "BOTIDSİ" }).catch(console.error);//botunuzun idsini girmezseniz rpc çalışmaz.