import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `ā *š® Script SilenceBOT*\nāā¢ *Script :*\nāā³ https://github.com/eabdalmufid/Silence-Soft\nāā¢ *Node_Modules:*\nāā³ https://semawur.com/mwuPPdYT\nāā³ Atau tekan *npm  i/yarn install*\nāā¢ *Base :* \nāā³ github.com/bochilgaming/games-wabot-md/\nāāāāāāāāāāāāāāāāāāāāāāāā\n\nš *N o t e :* \nā¢ Script ada di Github:v\nā¢ Jangan Lupa kasih star, follow & kasih credit\nā¢ *Dilarang menjual* Script Ini!\nā¢ Jika menemukan bug di script, harap lapor owner\nā¢ Github SilenceBOT: https://github.com/eabdalmufid Jangan, lupa follow github\nā¢ Bot ini free untuk digunakan di grup ini, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)`
let kled = `https://telegra.ph/file/ff053a2dff6c14bcb0578.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'š¦šŗš¶š¹š²ššš¼šš~',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'https://www.instagram.com/eabdalmufid_'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
