const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (".");

bot.on('ready', ()=> {
    console.log("Le Bot SkgBot à été connecter sur le discord !");
    bot.user.setGame("SkgBot, .help");
});



bot.login('NDg2MTUzODkzMDE3OTQ0MDY0.Dm691A._leNbaOzTK2EVNyDODwaJ4tpuW4')



bot.on('message', message =>{
    if (message.content === 'Le serveur Ouvre quand ?'){
        message.reply("Le staff de nuagia n'a pas encore de date !");
    }
})


bot.on('message', message =>{
    if (message.content === prefix +  "ping"){
        message.reply(" Pong");
    }
})

bot.on('message', message =>{
    if (message.content === "Ntm"){
        message.reply("Tu n'as pas le droit d'insulter !");
    }
})

bot.on('message', message =>{
    if (message.content === "ntm"){
        message.reply("Tu n'as pas le droit d'insulter !");
    }
})
bot.on('message', message =>{
    if (message.content === "tg"){
        message.reply("Tu n'as pas le droit d'insulter !");
    }
    if (message.content === "Nick ta mere"){
        message.reply("Tu n'as pas le droit d'insulter !")
    }
})
