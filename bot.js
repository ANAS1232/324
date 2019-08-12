const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("610236464088875013")
setInterval(function() {
channel.send(`anas the best`);
}, 1000)
})

client.login(process.env.BOT_TOKEN);