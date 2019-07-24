const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NTk5Mjc2ODAyMTMyOTM0NjU2.XTieQA.t5rMHsh9af8rKJoPGfVXJ-NHmB0");

console.log("start");

client.on('message', (message) => {
    if(message.content == "бот")
    {
        message.channel.send("#моя_статья");
    }
});
