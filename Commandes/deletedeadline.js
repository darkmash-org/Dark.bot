const Discord = require("discord.js");
const Command = require("../Structure/Command");

module.exports = new Command({

    name: "deletedeadline",
	cooldown: 5,

    async run(bot, message, args, db){
        message.reply("⚠️ The deadline system is not available yet ! ⚠️")
    }
})