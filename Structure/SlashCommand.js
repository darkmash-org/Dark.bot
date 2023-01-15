const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { token } = require('../config');

module.exports = async(bot) => {
      
    const commands = [
        
        // Ping
        new SlashCommandBuilder()
        .setName("ping")
        .setDescription('Get the ping of the bot'),
        // About
        new SlashCommandBuilder()
        .setName("about")
        .setDescription('Get information about the organization'),
    ]

    const rest = new REST({ version: '10' }).setToken(token);
      
    bot.guilds.cache.forEach(async guild => {
        await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });

    })

    console.log("The slash commands have been created successfully")
 
}