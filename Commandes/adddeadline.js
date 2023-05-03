const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = new Command({

    name: "adddeadline",
	cooldown: 5,

    async run(bot, message, args, db){
    const name = message.options.getString("name");
    const date = message.options.getString("date");
    const time = message.options.getString("time");
    const description = message.options.getString("description");
    message.reply("⚠️ The deadline system is not available yet ! ⚠️")
}
})