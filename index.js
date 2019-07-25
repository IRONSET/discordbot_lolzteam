const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NjAzODI3Mjc4MDAyMTI2ODQ4.XTlEww.hDO73paayZyQfc1nWljMEbKWuHY");

console.log("start");

client.on('message', (message) => {
    if(message.content == "бот")
    {
        message.channel.send("ШО НАДО, ЛОХ?");
    }
});
