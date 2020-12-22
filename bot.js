const Discord = require('discord.js');
const bot = new Discord.Client();
const {token, prefix} = require("./config");

bot.on("ready", () => {
    console.log(bot.user.tag + " prêt à pif");
});

bot.on("message", msg => {
    if (msg.content.startsWith(prefix) && msg.member) {
        commandProcess(msg);
    }
})

function commandProcess(msg){
    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let primaryCommand = splitCommand[0];

    switch (primaryCommand.toLowerCase()) {
        case 'between':
            commandBetween(msg);
            break;
        case 'entre':
            commandBetween(msg);
            break;
        case 'for':
            commandFor(msg);
            break;
        case 'headstails':
            commandHeadsTails(msg);
            break;
        case 'pileface':
            commandHeadsTails(msg);
            break;
        default:
            msg.reply("fdp.");
    }
}

function commandBetween(msg) {

    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let number1 = parseInt(splitCommand[1]);
    let number2 = parseInt(splitCommand[2]);

    let result;

    if (number1 > number2) result = getRandomIntInclusive(number2, number1);
    else if (number1 < number2) result = getRandomIntInclusive(number1, number2);
    else result = number1;

    msg.channel.send("le resultat est : " + result).catch(console.error);
}

function commandFor(msg) {

    let rawCommand = msg.content;
    let fullCommand = rawCommand.substr(prefix.length);
    let splitCommand = fullCommand.split(' ');
    splitCommand = splitCommand.filter(function(e){return e});
    let number = parseInt(splitCommand[1]);

    let result = Math.floor(Math.random() * Math.floor(number+1));
    msg.channel.send("le resultat est : " + result).catch(console.error);
}

function commandHeadsTails(msg) {
    let result = Math.floor(Math.random() * Math.floor(2));
    let pile = "https://cdn.discordapp.com/attachments/790915412762165268/790925318042550282/pile.gif";
    let face = "https://cdn.discordapp.com/attachments/790915412762165268/790926059016814602/face.gif";
    if (result === 0) msg.channel.send(face).catch(console.error);
    else if (result === 1) msg.channel.send(pile).catch(console.error);
    else msg.reply("c'est buggé").catch(console.error);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

bot.login(token).catch(console.error);