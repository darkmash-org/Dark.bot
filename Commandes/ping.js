const Discord = require("discord.js");
const Command = require("../Structure/Command");

module.exports = new Command({

    name: "ping",
    description: "Permet de connaitre le ping du bot",
    utilisation: "",
    permission: "",
    category: "Information",
	cooldown: 5,

    async run(bot, message, args, db){

        message.reply({ content: `🏓 Pong ! \`${bot.ws.ping}ms\`` })
    }
})