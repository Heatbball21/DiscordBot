
/*TODO
  -add command for adding admins and blacklists
	-add command for removing admins and blacklists
	-add toggleable command for auto skipping songs from given user
	-add command that changes someones nickname
*/


const Discord = require('discord.js');
const Kick = require("./kick.js");
require('dotenv').config();
const client = new Discord.Client();
const guild = new Discord.Guild();
const guildID = "766521258178510889";
const channelID = "766521258178510893";
const BOT = "Angela Mueller";
const admins = process.env.ADMIN.split(" ");
const blacklist = process.env.BLACKLIST.split(" ");




client.once('ready', () => {
	console.log('Ready!\n\n');
});

//if a message is sent to the correct channel and server execute code
client.on("message", async (msg) => {
  if(msg.guild.id === guildID && msg.channel.id === channelID && msg.author.username != BOT){
		if(msg.content.startsWith("-")){
			const args = msg.content.split(" ");
			const command = args.shift().substr(1);

			//console.log(msg);

			console.log("command: " + command);

			if(command === "kick"){
				Kick.kick(msg, args, client, admins, blacklist);
		}

	}
    //await msg.channel.send("Stop talking!");

//log some useful data
    console.log("Guild: " + msg.guild.name);
    console.log("Channel: " + msg.channel.name);
    console.log("Author: " + msg.author.username);
    console.log("Content: " + msg.content + "\n\n");





}
});




client.login(process.env.BOT_TOKEN);
