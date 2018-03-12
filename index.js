const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});
var quotes = ["quote1", "quote2", "quote3"]
var episodes = ["S1E1 Gem Glow", "S1E2 Laser Light Cannon", "S1E3 Cheeseburger Backpack", "S1E4 Together Breakfast", "S1E5 Frybo", "S1E6 Cat Fingers", "S1E7 Bubble Buddies", "S1E8 Serious Steven", "S1E9 Tiger Millionaire", "S1E10 Steven's Lion", "S1E11 Arcade Mania", "S1E12 Giant Woman", "S1E13 So Many Birthdays", "S1E14 Lars and the Cool Kids", "S1E15 Onion Trade"] 

const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  
  //Help Message
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('this is a help command for the bot.');
  }
  
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  }
  
  //Get a random quote
  if (message.content.startsWith(prefix + 'stevenquote')) {
    message.channel.sendMessage(quotes[Math.floor(Math.random() * 2) + 0  ]);
  }
  
  //Get a random episode title
  if (message.content.startsWith(prefix + 'stevenepisode')) {
    message.channel.sendMessage(episodes[Math.floor(Math.random() * 14) + 0  ]);
  }
  
});

client.login(process.env.TOKEN);