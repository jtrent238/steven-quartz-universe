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

var streamingGame = {type: 1, name: "Steven Universe: Save the Light", url: "https://twitch.tv/jtrent238"}; // "Streaming"
// note: streaming status requires a valid twitch url:
//       ex. "http://twitch.tv/channel"
var quotes = ["quote1", "quote2", "quote3"]
var episodes = ["S1E1 Gem Glow", "S1E2 Laser Light Cannon", "S1E3 Cheeseburger Backpack", "S1E4 Together Breakfast", "S1E5 Frybo", "S1E6 Cat Fingers", "S1E7 Bubble Buddies", "S1E8 Serious Steven", "S1E9 Tiger Millionaire", "S1E10 Steven's Lion", "S1E11 Arcade Mania", "S1E12 Giant Woman", "S1E13 So Many Birthdays", "S1E14 Lars and the Cool Kids", "S1E15 Onion Trade"] 


const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  
  //Help Message
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('this is a help command for the bot.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> The prefix for the bot is `~` <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> ping = pong');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenquote = Random quote from the show.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenepisode = Random episode.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevengem = Shows what gem Steven is.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    
  }

  //Information about the bot.
  if (message.content.startsWith(prefix + 'info')) {
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot Version:' + process.env.VERSION);
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot made by: ' + process.env.AUTHOR);
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
  
  //Shows Steven's Gem
  if (message.content.startsWith(prefix + 'stevengem')) {
    message.channel.sendMessage('My Gem is: <:NewRoseGem:422744912182902785>, a Rose Quartz.');
  }
  
  //Steven Loves Cookie Cat
  if (message.content.startsWith('Cookie Cat')) {
    message.channel.sendMessage('I Love Cookie Cat!');
  }
  
});

client.login(process.env.TOKEN);