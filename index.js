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

var Raven = require('raven');
Raven.config('https://16a411477217428c877a6250da068c20@sentry.io/363976').install()

const Discord = require('discord.js');
//const discordjs = require('discord.js-music');
const client = new Discord.Client();
const Bot = new Discord.Client();
//const Manager = new Discord.ShardingManager('./index.js');
const ShardingManager = new Discord.ShardingManager("shard.js", {name: "Steven Shards", stats: true, clusters: 2, shards: 4, debug: true});
//const uptime = new Discord.Client().uptime;
const prefix = '~';

client.on('ready',() => {
  console.log('Hi, It\'s Steven!');
  console.log(`Logged in as ${client.user.tag}!`);
});

var streamingGame = {type: 1, name: "Steven Universe: Save the Light", url: "https://twitch.tv/jtrent238"}; // "Streaming"
// note: streaming status requires a valid twitch url:
//       ex. "http://twitch.tv/channel"
var quotes = ["quote1", "quote2", "quote3"]
var gems = [""]
var episodes = ["S1E1 Gem Glow", "S1E2 Laser Light Cannon", "S1E3 Cheeseburger Backpack", "S1E4 Together Breakfast", "S1E5 Frybo", "S1E6 Cat Fingers", "S1E7 Bubble Buddies", "S1E8 Serious Steven", "S1E9 Tiger Millionaire", "S1E10 Steven's Lion", "S1E11 Arcade Mania", "S1E12 Giant Woman", "S1E13 So Many Birthdays", "S1E14 Lars and the Cool Kids", "S1E15 Onion Trade", "S1E16 Steven the Sword Fighter", "S1E17 Lion 2: The Movie", "S1E18 Beach Party", "S1E19 Rose's Room", "S1E20 Coach Steven", "S1E21 Joking Victim", "S1E22 Steven and the Stevens", "S1E23 Monster Buddies", "S1E24 An Indirect Kiss", "S1E25 Mirror Gem", "S1E26 Ocean Gem", "S1E27 House Guest", "S1E28 Space Race", "S1E29 Secret Team", "S1E30 Island Adventure"] 
var dice = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_5i3bBsz_bMcGQ-UgDMCzQA.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_dqZhjZbsbEBDXzKQPAagXw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_DrPdeWaJON0XbtmiEZc3jw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_5w7bpE0KdwXc21zUQoOtOw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_UYR8l1h7AI4MNtJWAugyjg.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_15_KIo9vPHULoA98NYT9jQ.png"]
var coin = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1200px-1879S_Morgan_Dollar_NGC_MS67plus_Obverse.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F800px-1879S_Morgan_Dollar_NGC_MS67plus_Reverse.png"]

	/**
	 * Checks if a user is an admin.
	 *
	 * @param {GuildMember} member - The guild member
	 * @returns {boolean} -
	 */
	try {
  function isAdmin(member) {
		return member.hasPermission("ADMINISTRATOR");
	}
    } catch (e) {
    Raven.captureException(e);
    }

try{
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log', 'public', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
} catch (e) {
    Raven.captureException(e);
}
try{
// Create an event listener for new channels
client.on('channelCreate', message => {
  message.channel.sendMessage('I see a new channel has been created! <:NewRoseGem:422744912182902785>');
});
} catch (e) {
    Raven.captureException(e);
}

try{
client.on('message', message => {
  if (message.author === client.user) return;
  
    //Help Message
  //if (message.content.startsWith(prefix + 'help')) {
    //message.channel.sendMessage('this is a help command for the bot.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> The prefix for the bot is `' + prefix + '` <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> info = Information about the bot.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> help = Shows this message.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> ping = pong');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> uptime = Gets the bots uptime.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenquote = Random quote from the show.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevenepisode = Random episode.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> stevengem = Shows what gem Steven is.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> invitesteven = Generates a link to invite Steven to a server.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> github = Gives the bots Github link.');
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> cookiecat = I Love Cookie Cat! <:cookiecat:423144575650103317>'); 
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> logo = Steven Universe Logo!.'); 
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> roll = I will roll a dice numbered 1-6.'); 
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> coin = I will flip a coin!'); 
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> servercount = How many servers am I in?'); 
  
    //message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    
  //}
  
  //Help Message
  if (message.content.startsWith(prefix + 'help')) {
    //message.channel.sendMessage('this is a help command for the bot.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>\n<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> The prefix for the bot is `' + prefix + '` <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>\n<:NewRoseGem:422744912182902785> info = Information about the bot.\n<:NewRoseGem:422744912182902785> help = Shows this message.\n<:NewRoseGem:422744912182902785> ping = pong\n<:NewRoseGem:422744912182902785> uptime = Gets the bots uptime.\n<:NewRoseGem:422744912182902785> stevenquote = Random quote from the show.\n<:NewRoseGem:422744912182902785> stevenepisode = Random episode.\n<:NewRoseGem:422744912182902785> stevengem = Shows what gem Steven is.\n<:NewRoseGem:422744912182902785> invitesteven = Generates a link to invite Steven to a server.\n<:NewRoseGem:422744912182902785> github = Gives the bots Github link.\n<:NewRoseGem:422744912182902785> cookiecat = I Love Cookie Cat! <:cookiecat:423144575650103317>\n<:NewRoseGem:422744912182902785> logo = Steven Universe Logo!.');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> roll = I will roll a dice numberd 1-6.\n<:NewRoseGem:422744912182902785> servercount = How many servers am I in?\n<:NewRoseGem:422744912182902785> coin = I will flip a coin!\n<:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785> <:NewRoseGem:422744912182902785>');
    
  }

  //Information about the bot.
  if (message.content.startsWith(prefix + 'info')) {
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot Version: ' + process.env.VERSION + ' <:NewRoseGem:422744912182902785>');
    message.channel.sendMessage('<:NewRoseGem:422744912182902785> Bot made by: ' + process.env.AUTHOR + ' <:NewRoseGem:422744912182902785>');
  }
  
  //Server Count
    if (message.content.startsWith(prefix + 'servercount')) {
    message.channel.sendMessage('Im in: ' + client.servers + ' servers!');
  }
  
  
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong!');
    message.channel.sendMessage('The Ping is: ' + client.ping);
  }
  
  
  //Gets the bots uptime
  if (message.content.startsWith(prefix + 'uptime')) {
    message.channel.sendMessage('I have been online for: ' + client.uptime + ' Milliseconds');
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
    message.channel.sendMessage('I Love Cookie Cat! <:cookiecat:423144575650103317>');
  }  
  
  //Steven Loves Cookie Cat
  if (message.content.startsWith(prefix + 'cookiecat')) {
    message.channel.sendMessage('I Love Cookie Cat! <:cookiecat:423144575650103317>');
  }
  
  //Sends a archive on the src code
  if (message.content.startsWith(prefix + 'srcarchivedl')) {
    message.channel.send("Here ya go! " + message.author, {file: "https://github.com/jtrent238/steven-quartz-universe/archive/glitch.zip"});
  }
  
    //Sends a image of the Steven Universe Logo
  if (message.content.startsWith(prefix + 'logo')) {
    message.channel.send("", {file: "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2FSteven_Universe_logo.svg.png"});
  }
  
  //Rolls a dice.
  if (message.content.startsWith(prefix + 'roll')) {
    message.channel.send("Ohh! I rolled a: ", {file: dice[Math.floor(Math.random() * 5) + 0  ]});
  }
  
  //Flip a coin
  if (message.content.startsWith(prefix + 'coin')) {
    message.channel.send("Ohh! I flipped a: ", {file: coin[Math.floor(Math.random() * 2) + 0  ]});
  }
  
    //Create Invite
  /*
  if (message.content.startsWith(prefix + 'createinvite')) {
    client.createinvite(client.channel, 0, 0, true, true)
    message.channel.send('Invite Created: ' + invite);
  }
  */
  
  //Bump the other bots (Specicaly for jtrent238 server)
  if (message.content.startsWith(prefix + 'bump')) {
    message.channel.sendMessage('=bump');
    message.channel.sendMessage(';;bump');
    message.channel.sendMessage('dlm!bump');
    message.channel.sendMessage('dc!bump');
  }
  
  //Shutdown the bot
  if (message.content.startsWith(prefix + 'shutdown')) {
    if(message.member.id == 204669722094993417) {
      console.log(`Yay, the author of the message has the role!`);
      message.channel.sendMessage('Bye Bye! <:steven_neutral:422744915823558678>');
      client.logout;
      } 
    else {
      console.log(`Nope, noppers, nadda.`);
      message.channel.sendMessage('Sorry Only jtrent238 can use this command');
}
  }
  
  //join a voice channel
  if (message.content.startsWith(prefix + 'vc')) {
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>{
      const dispatcher = connection.playFile('./audiofile.mp3');
      dispatcher.on("end", end => {voiceChannel.leave();});}).catch(err => console.log(err));
    
    message.channel.sendMessage('Joined :' + message.member.voiceChannel);
  }
  
  //In the case of an error send this message
  //if (message.content.startsWith('')) {
  //  message.channel.sendMessage('There seems to have been an error processing your command! <:steven_neutral:422744915823558678>');
  //}
  
});
} catch (e) {
    Raven.captureException(e);
}
try{
client.login(process.env.TOKEN);
  } catch (e) {
    Raven.captureException(e);
  }