const Discord = require("discord.js");
const Event = require("../../Structure/Event")
const db = require("../../Structure/Database")

module.exports = new Event("guildMemberAdd", async (bot, member) => {
bot.channels.cache.get("1045394906253893755").send(`Welcome ${member} to **${member.guild.name}** !`)
})