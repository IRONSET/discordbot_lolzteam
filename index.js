const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NDIzMjM4OTcxMDExNzYwMTMx.DYnbhw.eRF3BeObgx6BAkFi8PoeLILFuBU");

console.log("start");

client.on('message', (message) => {
    if(message.content == "бот")
    {
        message.channel.send("#моя_статья");
    }
});