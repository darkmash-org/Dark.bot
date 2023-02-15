const Discord = require("discord.js");
const Command = require("../Structure/Command");

module.exports = new Command({

    name: "deletedeadline",
	cooldown: 5,

    async run(bot, message, args, db){
        const name = message.options.getString("name");
        db.query(`SELECT * FROM deadline_reminder WHERE discord_id = '${message.user.id}' AND name = '${name}'`, (err, result) => {
            if(err) throw err;
            if (result.length < 1){
            return message.reply({ content: "❌ You don't have any deadline with this name !", ephemeral: true });
            }
            else {
                db.query(`DELETE FROM deadline_reminder WHERE discord_id = '${message.user.id}' AND name = '${name}'`, (err, result) => {
                    if(err) throw err;
                    if(err) {
                        return message.reply({ content: "❌ An error has occurred while deleting the deadline !", ephemeral: true });
                    }
                    else{
                        return message.reply({ content: "✅ The deadline has been deleted successfully !", ephemeral: true });
                    }
                }
                )  
            }            
        })
    }
})