const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require("fs");

const intents = new Discord.IntentsBitField(3276799);

const Command = require("./Command");
const Database = require("./Database");
const Event = require("./Event");
const SlashCommand = require("./SlashCommand");

class Client extends Discord.Client {
    
    constructor(){

        super({intents})

        /**
         * @type {Discord.Collection<string, Command>}
         */
        
        this.commands = new Discord.Collection()
        this.cooldown = new Discord.Collection()
        this.db = Database;
        this.color = "#27EA32";
        this.function = {

        }   



    }

    async start(token){

        fs.readdirSync("./Commandes").filter(file => file.endsWith(".js")).forEach(async f => {

            /**
             * @type {Command}
             */
            
            const command = require(`../Commandes/${f}`);
            console.log(`${f} command loaded successfully`)
            this.commands.set(command.name, command)
        })

        
        fs.readdirSync("./Events").forEach(dirs =>{
            fs.readdirSync(`./Events/${dirs}`).filter(files => files.endsWith(".js")).forEach(async evt => {

                const event = require(`../Events/${dirs}/${evt}`);
                console.log(`${event.event}.js is loaded !`)
                this.on(event.event, event.run.bind(null, this));
            });
        });


        this.login(token)
    }
}

module.exports = Client;