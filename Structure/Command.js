/** @format */

const Client = require("./Client");
const Discord = require("discord.js");
const mysql = require("mysql");

/**
 * 
 * @param {Client} bot 
 * @param {Discord.Message | Discord.CommandInteraction} message 
 * @param {string[] | Discord.InteractionDeferUpdateOptions} args 
 * @param {mysql.Connection} db
 */

function RunFunction(bot, message, args, db){}

class Command {

    /**
     * @typedef {{name: string, description: string, utilisation: string, permission: bigint, category: string, cooldown: number, run: RunFunction}}
     * @param {CommandOptions} options 
     */

    constructor(options){

        this.name = options.name;
        this.description = options.description;
        this.utilisation = options.utilisation;
        this.permission = options.permission;
        this.category = options.category;
        this.subcategory = options.subcategory;
        this.cooldown = options.cooldown;
        this.run = options.run;

    }
}
module.exports = Command;