const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const guildID = "766521258178510889";
const channelID = "766521258178510893";
const BOT = "Angela Mueller";


client.once('ready', () => {
	console.log('Ready!');
});

//if a message is sent to the correct channel and server execute code
client.on("message", async (msg) => {
  if(msg.guild.id === guildID && msg.channel.id === channelID){

    if(msg.author.username != BOT){
    await msg.channel.send("Stop talking!");

//log some useful data
    console.log(msg.guild.name);
    console.log(msg.channel.name);
    console.log(msg.author.username);
    console.log(msg.content);



    }
  }
});




client.login(process.env.BOT_TOKEN);
