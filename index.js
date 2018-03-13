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
const ShardingManager = new Discord.ShardingManager("shard.js", {name: "Steven Shards", stats: true, clusters: 2, shards: 4, debug: true});
//const uptime = new Discord.Client().uptime;


client.on('ready',() => {
  console.log('Hi, It\'s Steven!');
});

var streamingGame = {type: 1, name: "Steven Universe: Save the Light", url: "https://twitch.tv/jtrent238"}; // "Streaming"
// note: streaming status requires a valid twitch url:
//       ex. "http://twitch.tv/channel"
var quotes = ["quote1", "quote2", "quote3"]
var episodes = ["S1E1 Gem Glow", "S1E2 Laser Light Cannon", "S1E3 Cheeseburger Backpack", "S1E4 Together Breakfast", "S1E5 Frybo", "S1E6 Cat Fingers", "S1E7 Bubble Buddies", "S1E8 Serious Steven", "S1E9 Tiger Millionaire", "S1E10 Steven's Lion", "S1E11 Arcade Mania", "S1E12 Giant Woman", "S1E13 So Many Birthdays", "S1E14 Lars and the Cool Kids", "S1E15 Onion Trade", "S1E16 Steven the Sword Fighter", "S1E17 Lion 2: The Movie", "S1E18 Beach Party", "S1E19 Rose's Room", "S1E20 Coach Steven", "S1E21 Joking Victim", "S1E22 Steven and the Stevens", "S1E23 Monster Buddies", "S1E24 An Indirect Kiss", "S1E25 Mirror Gem", "S1E26 Ocean Gem", "S1E27 House Guest", "S1E28 Space Race", "S1E29 Secret Team", "S1E30 Island Adventure"] 

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// Create an event listener for new channels
client.on('channelCreate', message => {
  message.channel.sendMessage('I see a new channel has been created! <:NewRoseGem:422744912182902785>');
});


const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  
    //Help Message
  //if (message.content.startsWith(prefix + 'help')) {
    //message.channel.sendMessage('this is a help command for the bot.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> The prefix for the bot is `~` <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> info = Information about the bot.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> help = Shows this message.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> ping = pong');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> uptime = Gets the bots uptime.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenquote = Random quote from the show.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenepisode = Random episode.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevengem = Shows what gem Steven is.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> invitesteven = Generates a link to invite Steven to a server.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> github = Gives the bots Github link.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    
  //}
  
  //Help Message
  if (message.content.startsWith(prefix + 'help')) {
    //message.channel.sendMessage('this is a help command for the bot.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>\n<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> The prefix for the bot is `~` <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>\n<:NewRoseGem:422744912182902785> info = Information about the bot.\n<:NewRoseGem:422744912182902785> help = Shows this message.\n<:NewRoseGem:422744912182902785> ping = pong\n<:NewRoseGem:422744912182902785> uptime = Gets the bots uptime.\n<:NewRoseGem:422744912182902785> stevenquote = Random quote from the show.\n<:NewRoseGem:422744912182902785> stevenepisode = Random episode.\n<:NewRoseGem:422744912182902785> stevengem = Shows what gem Steven is.\n<:NewRoseGem:422744912182902785> invitesteven = Generates a link to invite Steven to a server.\n<:NewRoseGem:422744912182902785> github = Gives the bots Github link.\n<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    
  }

  //Information about the bot.
  if (message.content.startsWith(prefix + 'info')) {
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot Version: ' + process.env.VERSION + ' <:NewRoseGem:422744912182902785>');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot made by: ' + process.env.AUTHOR + ' <:NewRoseGem:422744912182902785>');
  }
  
  
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong!');
    message.channel.sendMessage('The Ping is: ' + client.ping);
  }
  
  
  //Gets the bots uptime
  if (message.content.startsWith(prefix + 'uptime')) {
    message.channel.sendMessage('I have been online for: ' + client.uptime + 'Milliseconds');
  }
  
  //Get a random quote
  if (message.content.startsWith(prefix + 'stevenquote')) {
    message.channel.sendMessage(quotes[Math.floor(Math.random() * 2) + 0  ]);
  }
  
  //Get a random episode title
  if (message.content.startsWith(prefix + 'stevenepisode')) {
    message.channel.sendMessage(episodes[Math.floor(Math.random() * 29) + 0  ]);
  }
  
  //Shows Steven's Gem
  if (message.content.startsWith(prefix + 'stevengem')) {
    message.channel.sendMessage('My Gem is: <:NewRoseGem:422744912182902785>, a Rose Quartz.');
  }
  
  //Generate invite link to invite Steven to a server
  if (message.content.startsWith(prefix + 'invitesteven')) {
    message.channel.sendMessage('Invite me with: ' + client.generateInvite(['ADMINISTRATOR']));
  }
  
  //Post a link to Github
  if (message.content.startsWith(prefix + 'github')) {
    message.channel.sendMessage('Here is my source code on Github: https://github.com/jtrent238/steven-quartz-universe');
  }
  
  //Generate invite link to invite Steven to a server
  //if (message.content.startsWith(prefix + 'invitesteven')) {
    //message.channel.sendMessage('Invite me with: ' + client.generateInvite(['ADMINISTRATOR', 'CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_ROLES_OR_PERMISSIONS', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS']));
  //}
  
  //Steven Loves Cookie Cat
  if (message.content.startsWith('Cookie Cat')) {
    message.channel.sendMessage('I Love Cookie Cat!');
  }
  
  //In the case of an error send this message
  //if (message.content.startsWith('')) {
  //  message.channel.sendMessage('There seems to have been an error processing your command! <:steven_neutral:422744915823558678>');
  //}
  
});

client.login(process.env.TOKEN);