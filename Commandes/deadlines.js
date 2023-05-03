const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command({

    name: "deadlines",
	cooldown: 5,

    async run(bot, message, args, db){
        message.reply("⚠️ The deadline system is not available yet ! ⚠️")
}
})