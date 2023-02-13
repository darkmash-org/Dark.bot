const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command({

    name: "deadlines",
	cooldown: 5,

    async run(bot, message, args, db){
        db.query(`SELECT * FROM deadline_reminder WHERE discord_id = '${message.user.id}'`, (err, result) => {
            if(err) throw err;
            if (result.length < 1){
            return message.reply({ content: "❌ You don't have any deadlines !", ephemeral: true });
            }
            else {
                //verify if there are more than 1 deadline
                if(result.length == 1){
                const deadline = new EmbedBuilder()
                .setTitle("Your deadline")
                .setColor("DARK")
                .setDescription("Here are your deadlines:")
                .addFields(
                    { name: "Name", value: result[0].name },
                    { name: "Description", value: result[0].description },
                    { name: "Date", value: result[0].date },
                    { name: "Time", value: result[0].time },
                )

                return message.reply({ embeds: [deadline], ephemeral: true })
                }   
                else {
                 const deadlines = new EmbedBuilder()
                 .setTitle("Your deadlines")
                 .setColor("DARK")
                 .setDescription("Here are your deadlines:")
                 .addFields(
                    { name: "Name", value: result[0].name },
                    { name: "Description", value: result[0].description },
                    { name: "Date", value: result[0].date },
                    { name: "Time", value: result[0].time },
                    )
                    for (let i = 1; i < result.length; i++){
                        deadlines.addFields(
                            { name: "Name", value: result[i].name },
                            { name: "Description", value: result[i].description },
                            { name: "Date", value: result[i].date },
                            { name: "Time", value: result[i].time },
                        )
                    }

                 return message.reply({ embeds: [deadlines], ephemeral: true })
                }
            }            
        })
           
    }
})