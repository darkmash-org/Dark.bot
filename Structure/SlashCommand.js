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
        // Rank
        new SlashCommandBuilder()
        .setName("rank")
        .setDescription('Get your rank or the rank of a member')
        .addUserOption(option => option.setName("member").setDescription("The member you want to get the rank")),
        // Adddeadline
        new SlashCommandBuilder()
        .setName("adddeadline")
        .setDescription('Add a deadline')
        .addStringOption(option => option.setName("name").setDescription("The name of the deadline").setRequired(true))
        .addStringOption(option => option.setName("date").setDescription("The date of the deadline dd/mm/yyyy").setRequired(true))
        .addStringOption(option => option.setName("time").setDescription("The time of the deadline hh:mm").setRequired(true))
        .addStringOption(option => option.setName("description").setDescription("The description of the deadline").setRequired(true)),
        // Deadlines
        new SlashCommandBuilder()
        .setName("deadlines")
        .setDescription('Get your reminders'),
    ]

    const rest = new REST({ version: '10' }).setToken(token);
      
    bot.guilds.cache.forEach(async guild => {
        await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });

    })

    console.log("The slash commands have been created successfully")
 
}