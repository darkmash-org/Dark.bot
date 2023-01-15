const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = new Command({

    name: "about",
	cooldown: 5,

    async run(bot, message, args, db){
        const about = new EmbedBuilder()
        .setTitle("About Darkmash")
        .setColor("DARK")
        .setDescription("Work the way around.")
        .setThumbnail('https://avatars.githubusercontent.com/u/122222995?s=200&v=4')
        .addFields(
            { name: "Since:", value: "<t:1673175600:D>" },
            { name: "Owner:", value: "<@912731803658362920> and <@1023153441624821791>" }
        )
        const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Website")
            .setStyle(5)
            .setURL("https://darkmash-org.github.io/")
        )
        .addComponents(
            new ButtonBuilder()
            .setLabel("GitHub")
            .setStyle(5)
            .setURL("https://github.com/Darkmash-org")
        )
        message.reply({ embeds: [about], components: [buttons] })
    }
})