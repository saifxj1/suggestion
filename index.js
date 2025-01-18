const express = require('express');
const app = express();
app.get('/', (req, res) => {	res.send('Hello Express app!');
});
app.listen(3000, () => {
	console.log('\033[32m SERVER STARTED');
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});

//=================================

const Discord = require('discord.js'); 
const client = new Discord.Client();
const ms = require('ms')
const fs = require('fs')
const disbut = require('discord-buttons')
disbut(client)
const axios = require('axios');

//=================================

client.on('ready', () => {
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`[PING] ${client.ws.ping}`)
client.user.setStatus("online")
function msg() { 
 let status = [`Falcon into the high`];/// هنا تغير الحالة 
 let S = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[S],{ type : 'WATCHING'})
};

setInterval(msg,7000)
}) 

//=================================

let sug = ['1283379165504081941','','']; ///ايدي روم الاقتراحات

let link = "https://cdn.discordapp.com/attachments/1282764752858386534/1323426228530839584/falcon_dividier.png?ex=678cdbf8&is=678b8a78&hm=bb522edf9f9cfb9d1f80f486ae4364a3c1a078891c6139368e3f3e25169a8093&";///خطك

//=================================

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`\<a:yes:1330207952275243049>`).then(() => {
 msg.react('\<a:noemoji:1330208036287152289>')
      })
    message.channel.send({files: [link]});
    })
message.author.send(`Thank you for <#${message.channel.id}>`).catch(console.error) 
  }
});  

//=================================

client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})
