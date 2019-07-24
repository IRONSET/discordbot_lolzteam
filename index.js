const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NTk5Mjc2ODAyMTMyOTM0NjU2.XTf3_A.VKzwNcB7YiFWDE6oofb2-zmvFaA");

console.log("start");

client.on('message', (message) => {
    if(message.content == "бот")
    {
        message.channel.send("#моя_статья");
    }
});
