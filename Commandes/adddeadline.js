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
  
    if(!date.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/)){
        return message.reply({ content: "❌ The date is not valid !", ephemeral: true });
    }
    if(!time.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)){
        return message.reply({ content: "❌ The time is not valid !", ephemeral: true });
    }
    db.query(`INSERT INTO deadline_reminder (discord_id, discord_name, name, date, time, description) VALUES ('${message.user.id}', '${message.user.username}', '${name}', '${date}', '${time}', '${description}')`, (err, result) => {
        if(err) throw err;
        if(err) {
            return message.reply({ content: "❌ An error has occurred while adding the deadline !", ephemeral: true });
        }
        else{
            return message.reply({ content: "✅ The deadline has been added successfully !", ephemeral: true });
        }
    }
    )  
}
})