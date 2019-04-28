const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    //response.sendStatus(200);
    response.sendFile(__dirname + '/site/index.html');

    app.use(morgan('combined'))
});

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var Raven = require('raven');
Raven.config(process.env.DSN_PUBLIC).install()
Raven.config(process.env.DSN_PUBLIC, {
    release: process.env.SENTRY_VERSION
});

    /*
var Sentry = require('sentry');

Sentry.init({ dsn: process.env.DSN_PUBLIC });
Sentry.init({
  release: process.env.VERSION + '_' + process.env.SENTRY_VERSION
})
    */

/**
 * Report a routing error to Sentry and show a feedback dialog to
 * the user.
 * 
 * > try {
 * >   renderRoute()
 * > } catch (err) {
 * >   handleRouteError(err);
 * > }
 */
function handleRouteError(err) {
    Raven.captureException(err);
    Raven.showReportDialog();
};

var request = require('request');

const Discord = require('discord.js');
//const discordjs = require('discord.js-music');
const client = new Discord.Client();
const Bot = new Discord.Client();
const bot = Bot;
const hook = new Discord.WebhookClient('webhook id', process.env.WEBHOOK_TOKEN);
//const Manager = new Discord.ShardingManager('./index.js');
const ShardingManager = new Discord.ShardingManager("shard.js", {
    name: "Steven Shards",
    stats: true,
    clusters: 2,
    shards: 4,
    debug: true
});
//const uptime = new Discord.Client().uptime;
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DISCORD_BOTS_LIST_TOKEN, client);
const dogFacts = require('dog-facts');
const pandaFacts = require('panda-facts');
const ffmpeg = require('ffmpeg');

const discordIRC = require('discord-irc');
const discord_irc_config = require('./discord_irc_config.json');
//DiscordIRC Settings
discordIRC.discordToken = process.env.TOKEN;
discordIRC.webhookOptions = process.env.IRC_WEBHOOK_TOKEN;

var hookcord = require('hookcord');
var Base = hookcord.Base;
//var hook = new Base("HOOK_ID/HOOK_SECRET");

//const penguinFacts = require('penguin-facts');

//var qr = require('qr-image');

var faker = require('faker');
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

const nodemailer = require('nodemailer');
var morgan = require('morgan')

const prefix = '~';

client.on('ready', () => {
    console.log('Hi, It\'s Steven!');
    console.log(`Logged in as: ${client.user.tag}!`);
    console.log(`Client Id: ${client.user.id}!`);
    console.log(`Is client Verified?: ${client.user.verified}!`);
    console.log(`Client Created on: ${client.user.createdAt}!`);
    hook.send('I am now alive!');
    client.user.setActivity({
        type: 1,
        name: "Steven Universe: Save the Light",
        url: "https://twitch.tv/jtrent238"
    });
    //client.user.setActivity(`with ${client.guilds.size} Crystal Gems`);
    //game(streamingGame);
});


var streamingGame = {
    type: 1,
    name: "Steven Universe: Save the Light",
    url: "https://twitch.tv/jtrent238"
}; // "Streaming"
// note: streaming status requires a valid twitch url:
//       ex. "http://twitch.tv/channel"

var quotes = ["quote1", "quote2", "quote3"]

var gems = [""]

var gems_img = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2FNewRoseGem.png", ""]

var episodes = ["S1E1 Gem Glow", "S1E2 Laser Light Cannon", "S1E3 Cheeseburger Backpack", "S1E4 Together Breakfast", "S1E5 Frybo", "S1E6 Cat Fingers", "S1E7 Bubble Buddies", "S1E8 Serious Steven", "S1E9 Tiger Millionaire", "S1E10 Steven's Lion", "S1E11 Arcade Mania", "S1E12 Giant Woman", "S1E13 So Many Birthdays", "S1E14 Lars and the Cool Kids", "S1E15 Onion Trade", "S1E16 Steven the Sword Fighter", "S1E17 Lion 2: The Movie", "S1E18 Beach Party", "S1E19 Rose's Room", "S1E20 Coach Steven", "S1E21 Joking Victim", "S1E22 Steven and the Stevens", "S1E23 Monster Buddies", "S1E24 An Indirect Kiss", "S1E25 Mirror Gem", "S1E26 Ocean Gem", "S1E27 House Guest", "S1E28 Space Race", "S1E29 Secret Team", "S1E30 Island Adventure", "S1E31 Keep Beach City Weird", "S1E32 Fusion Cuisine", "S1E33 Garnet's Universe", "S1E34 Watermelon Steven", "S1E35 Lion 3: Straight to Video", "S1E36 Warp Tour", "S1E37 Alone Together", "S1E38 The Test", "S1E39 Future Vision", "S1E40 On the Run", "S1E41 Horror Club", "S1E42 Winter Forecast", "S1E43 Maximum Capacity", "S1E44 Marble Madness", "S1E45 Rose's Scabbard", "S1E46 Open Book", "S1E47 Shirt Club", "S1E48 Story for Steve", "S1E49 The Message", "S1E50 Political Power", "S1E51 The Return", "S1E52 Jail Break"]

var dice = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_5i3bBsz_bMcGQ-UgDMCzQA.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_dqZhjZbsbEBDXzKQPAagXw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_DrPdeWaJON0XbtmiEZc3jw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_5w7bpE0KdwXc21zUQoOtOw.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_UYR8l1h7AI4MNtJWAugyjg.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1_15_KIo9vPHULoA98NYT9jQ.png"]

var coin = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F1200px-1879S_Morgan_Dollar_NGC_MS67plus_Obverse.png", "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2F800px-1879S_Morgan_Dollar_NGC_MS67plus_Reverse.png"]

var jtrent238_dragcave_dragons = ["https://dragcave.net/image/bWXth.gif", "https://dragcave.net/image/bNiLa.gif", "https://dragcave.net/image/2UDH4.gif", "https://dragcave.net/image/ms4Pd.gif", "https://dragcave.net/image/Ebdfu.gif", "https://dragcave.net/image/7REXG.gif", "https://dragcave.net/image/6qHBZ.gif", "https://dragcave.net/image/RBq20.gif", "https://dragcave.net/image/syXNo.gif", "https://dragcave.net/image/QaDYV.gif", "https://dragcave.net/image/fckMm.gif", "https://dragcave.net/image/G5pPJ.gif", "https://dragcave.net/image/O9i4f.gif", "https://dragcave.net/image/FHuDQ.gif", "https://dragcave.net/image/cmUnu.gif", "https://dragcave.net/image/o8uI6.gif", "https://dragcave.net/image/7YGGy.gif"]

var cookiecatmp3 = ["https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2Fcookie_cat.mp3"]
var developerids = ["204669722094993417"]
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

try {
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
try {
    // Create an event listener for new channels
    client.on('channelCreate', message => {
        message.channel.sendMessage('I see a new channel has been created! <:gem_rose:422744912182902785>');
    });
} catch (e) {
    Raven.captureException(e);
}
try {

    // Create an event listener for new guild members
    client.on('guildMemberAdd', member => {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.find('399611838490214401', 'name', 'member-log', 'bot-hell', 'bot-testing', 'jtrent238-test', 'welcome-log');
        // Do nothing if the channel wasn't found on this server
        //if (!channel) return;
        // Send the message, mentioning the member
        //channel.sendMessage('Welcome to the server, ' + member);
    });
} catch (e) {
    Raven.captureException(e);
}

try {
    client.on('message', message => {
        if (message.author === client.user) return;
        if (message.author.bot) return;

        //if you mention the bot.
        if (message.content.startsWith(client.user)) {
            //message.channel.sendMessage('this is a help command for the bot.');
            message.channel.sendMessage('<:gem_rose:422744912182902785> Use `~help` for a list of commands!');
        }

        //Help Message
        if (message.content.startsWith(prefix + 'help')) {
            //message.channel.sendMessage('this is a help command for the bot.');
            message.channel.sendMessage('<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>\n' +
                '<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> The prefix for the bot is `' + prefix + '` <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>\n' +
                '<:gem_rose:422744912182902785> `info` = Information about the bot. :exclamation: \n' +
                '<:gem_rose:422744912182902785> `help` = Shows this message. :question: \n' +
                '<:gem_rose:422744912182902785> `ping` = pong\n' +
                '<:gem_rose:422744912182902785> `uptime` = Gets the bots uptime.\n' +
                '<:gem_rose:422744912182902785> `stevenquote` = Random quote from the show.\n' +
                '<:gem_rose:422744912182902785> `stevenepisode` = Random episode.\n' +
                '<:gem_rose:422744912182902785> `stevengem` = Shows what gem Steven is. <:gem_rose:422744912182902785>\n' +
                '<:gem_rose:422744912182902785> `invitesteven` = Generates a link to invite Steven to a server.\n' +
                '<:gem_rose:422744912182902785> `github` = Gives the bots Github link. <:github:401011847538671627>\n' +
                '<:gem_rose:422744912182902785> `cookiecat` = I Love Cookie Cat! <:cookiecat:423144575650103317>\n' +
                '<:gem_rose:422744912182902785> `logo` = Steven Universe Logo!.');
            message.channel.sendMessage('<:gem_rose:422744912182902785> `roll` = I will roll a dice numberd 1-6. :game_die:\n' +
                '<:gem_rose:422744912182902785> `servercount` = How many servers am I in?\n' +
                '<:gem_rose:422744912182902785> `coin` = I will flip a coin! :coin:\n' +
                '<:gem_rose:422744912182902785> `today` = Todays Date!\n' +
                '<:gem_rose:422744912182902785> `patreon` = It\'\s My Patreon! <:patreon_logo:388799943437058059>\n' +
                '<:gem_rose:422744912182902785> `echo` = I repeat what ever you say. Echoooo!!!\n' +
                '<:gem_rose:422744912182902785> `nsfw` = You know what this is! Right?\n' +
                '<:gem_rose:422744912182902785> `srcarchivedl` = Sends an archive of the src code.\n' +
                '<:gem_rose:422744912182902785> `randomgem` = Gets a random Gem! <:gem_rose:422744912182902785> \n' +
                '<:gem_rose:422744912182902785> `randomcat` = Gets a random image of a cat! :cat: \n' +
                '<:gem_rose:422744912182902785> `randomdog` = Gets a random image of a dog! :dog: \n' +
                '<:gem_rose:422744912182902785> `catfact` = Gets a random cat fact. :cat: \n' +
                '<:gem_rose:422744912182902785> `pandafact` = Gets a random panda fact. :panda: \n' +
                '<:gem_rose:422744912182902785> `penguinfact` = Gets a random penguin fact. :penguin: \n' +
                '<:gem_rose:422744912182902785> `myavatar` = Gets a image of your avatar. \n' +
                '<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>');

        }

        //Help Message [Developer Help]
        if (message.content.startsWith(prefix + 'devhelp')) {
            if (message.member.id == developerids) {
                console.log(`Yay, its a Developer!`);
                //message.channel.sendMessage('this is a help command for the bot.');
                message.channel.sendMessage('<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>\n' +
                    '<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> The prefix for the bot is `' + prefix + '` <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>\n <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> _*Developer Commands!*_ <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> \n' +
                    '<:gem_rose:422744912182902785> `devinfo` = Information about the bot. :exclamation: \n' +
                    '<:gem_rose:422744912182902785> `devhelp` = Shows this message. :question: \n' +
                    '<:gem_rose:422744912182902785> `shutdown` = Shutsdown the bot. :desktop: (ONLY jtrent238 can use this command) \n'
                )
                message.channel.sendMessage('<:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785> <:gem_rose:422744912182902785>')
            } else {
                console.log(`Nope, noppers, nadda. (NOT a Developer!)`);
                message.channel.sendMessage('Sorry Only a Developer can use this command');
            }
        }

        //Information about the bot.
        if (message.content.startsWith(prefix + 'info')) {
            message.channel.sendMessage('<:gem_rose:422744912182902785> Bot Version: ' + process.env.VERSION + ' ' + '(' + '_*' + process.env.SENTRY_VERSION + '*_' + ')' + '<:gem_rose:422744912182902785> \n<:gem_rose:422744912182902785> Bot made by: ' + process.env.AUTHOR + ' <:gem_rose:422744912182902785>');
        }

        //Information about the bot. [Developer Information]
        if (message.content.startsWith(prefix + 'devinfo')) {
            if (message.member.id == developerids) {
                console.log(`Yay, its a Developer!`);
                message.channel.sendMessage('<:gem_rose:422744912182902785> Bot Version: ' + process.env.VERSION + ' ' + '(' + '_*' + process.env.SENTRY_VERSION + '*_' + ')' +
                    '<:gem_rose:422744912182902785> \n<:gem_rose:422744912182902785> Bot made by: ' + process.env.AUTHOR + ' <:gem_rose:422744912182902785>' + '\n <:gem_rose:422744912182902785>' +
                    `Logged in as: ${client.user.tag}!` + '<:gem_rose:422744912182902785> \n <:gem_rose:422744912182902785>' +
                    `Client Id: ${client.user.id}!` + '<:gem_rose:422744912182902785> \n <:gem_rose:422744912182902785>' +
                    `Is client Verified?: ${client.user.verified}!` + '<:gem_rose:422744912182902785> \n <:gem_rose:422744912182902785>' +
                    `Client Created on: ${client.user.createdAt}!` + '<:gem_rose:422744912182902785>');
                console.log(`Logged in as: ${client.user.tag}!`);
                console.log(`Client Id: ${client.user.id}!`);
                console.log(`Is client Verified?: ${client.user.verified}!`);
                console.log(`Client Created on: ${client.user.createdAt}!`);

            } else {
                console.log(`Nope, noppers, nadda. (NOT a Developer!)`);
                message.channel.sendMessage('Sorry Only a Developer can use this command');
            }
        }


        //Information about the bot. [Developer Information]
        if (message.content.startsWith(prefix + 'dd')) {
            if (message.member.id == developerids) {
                console.log(`Yay, its a Developer!`);
                message.channel.sendMessage('');
            } else {
                console.log(`Nope, noppers, nadda. (NOT a Developer!)`);
                message.channel.sendMessage('Sorry Only a Developer can use this command');
            }
        }

        //Information about the bot.
        if (message.content.startsWith(prefix + 'info')) {
            message.channel.sendMessage('<:gem_rose:422744912182902785> Bot Version: ' + process.env.VERSION + ' ' + '(' + '_*' + process.env.SENTRY_VERSION + '*_' + ')' + '<:gem_rose:422744912182902785> \n<:gem_rose:422744912182902785> Bot made by: ' + process.env.AUTHOR + ' <:gem_rose:422744912182902785>');
        }

        //Server Count
        if (message.content.startsWith(prefix + 'servercount')) {
            message.channel.sendMessage('Im in: ' + client.guilds.size + ' servers!');
        }

        //Server Count
        if (message.content.startsWith(prefix + 'usercount')) {
            message.channel.sendMessage('I have : ' + client.guilds.memberCount + ' users!');
        }

        //Guild Information
        if (message.content.startsWith(prefix + 'guildinfo')) {
            //message.channel.sendMessage('Here is some Info for the current Guild: ' + '\n Guild Name: ' + guild.name);
        }


        //Gets the bots ping
        if (message.content.startsWith(prefix + 'ping')) {
            message.channel.sendMessage(':ping_pong: pong!');
            message.channel.sendMessage('The Ping is: ' + client.ping);
        }


        //Gets the bots uptime in Milliseconds
        if (message.content.startsWith(prefix + 'uptime')) {
          var uptimeMilliseconds = client.uptime;
          var uptimeSeconds = uptimeMilliseconds * 0.001;
          var uptimeMinutes = uptimeSeconds / 60;
          var uptimeHours = uptimeMinutes / 60;
          var uptimeDays = uptimeHours / 24;
          var uptimeWeeks = uptimeDays / 7;
          
            message.channel.sendMessage('I have been online for: ' + uptimeMilliseconds + ' Milliseconds' + '\n' +
                                        '------------------------------------------' + '\n' +
                                        '  That is '+ '\n' + 
                                          '  ' + uptimeSeconds + ' Seconds!' + '\n' +
                                          '  ' + uptimeMinutes + ' Minutes!' + '\n' +
                                          '  ' + uptimeHours + ' Hours!' + '\n' +
                                          '  ' + uptimeDays + ' Days!' + '\n' +
                                          '  ' + uptimeWeeks + ' Weeks!' + '\n');
        }

        //Get a random quote
        if (message.content.startsWith(prefix + 'stevenquote')) {
            message.channel.sendMessage(quotes[Math.floor(Math.random() * 2) + 0]);
        }

        //Get a random episode title
        if (message.content.startsWith(prefix + 'stevenepisode')) {
            message.channel.sendMessage(episodes[Math.floor(Math.random() * 29) + 0]);
        }

        //Shows Steven's Gem
        if (message.content.startsWith(prefix + 'stevengem')) {
            message.channel.sendMessage('My Gem is: <:gem_rose:422744912182902785>, a Rose Quartz.');
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
            message.channel.sendMessage('I Love Cookie Cat! <:cookiecat:423144575650103317>\nIf you are in a Voice channel I will sing the song!<:cookiecat:423144575650103317>');
            const connection = message.member.voiceChannel.join();
            const dispatcher = connection.play('https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2Fcookie_cat.mp3');
        }

        //Steven Loves Cookie Cat
        if (message.content.startsWith(prefix + 'cookiecat')) {
            message.channel.sendMessage('I Love Cookie Cat! <:cookiecat:423144575650103317>\nIf you are in a Voice channel I will sing the song! <:cookiecat:423144575650103317>');
            const connection = message.member.voiceChannel.join();
            connection.playFile(cookiecatmp3);
            //const dispatcher = connection.play('https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2Fcookie_cat.mp3');
            //bot.voiceConnection.playFile('https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2Fcookie_cat.mp3');
            //connection.play('https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2Fcookie_cat.mp3');
        }

        //Sends a archive on the src code
        if (message.content.startsWith(prefix + 'srcarchivedl')) {
            message.channel.send("Here ya go! " + message.author, {
                file: "https://github.com/jtrent238/steven-quartz-universe/archive/glitch.zip"
            });
        }

        //Sends a image of the Steven Universe Logo
        if (message.content.startsWith(prefix + 'logo')) {
            message.channel.send("", {
                file: "https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2FSteven_Universe_logo.svg.png"
            });
        }

        //Rolls a dice.
        if (message.content.startsWith(prefix + 'roll')) {
            message.channel.send("Ohh! I rolled a: ", {
                file: dice[Math.floor(Math.random() * 5) + 0]
            });
        }

        //Flip a coin
        if (message.content.startsWith(prefix + 'coin')) {
            message.channel.send("Ohh! I flipped a: ", {
                file: coin[Math.floor(Math.random() * 2) + 0]
            });
        }

        //Gets a random Gem
        if (message.content.startsWith(prefix + 'randomgem')) {
            message.channel.send("", {
                file: gems_img[Math.floor(Math.random() * 1) + 0]
            });
        }


        //Sends a image of a random cat
        if (message.content.startsWith(prefix + 'randomcat')) {
            message.channel.send("This command does not seem to be working! <:steven_neutral:422744915823558678>");
            request('http:/random.cat/meow', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var importedJSON = JSON.parse(body);
                        console.log(body);
                        message.channel.send("Here is a random cat: ", {
                            file: importedJSON.img + body
                        });
                    }
                })
                //message.channel.send("Here is a random cat: ", {file: body});
        }

        //Sends a image of a random dog
        if (message.content.startsWith(prefix + 'randomdog')) {
            request('https://random.dog/woof', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        //     var importedJSON = JSON.parse(body);
                        console.log(body);
                        message.channel.send("Here is a random dog: ", {
                            file: "https://random.dog/" + body
                        });
                    }
                })
                //message.channel.send("Here is a random cat: ", {file: body});
                //message.channel.send("Here is a random dog: ", {file: FileReader("https://random.dog/woof")});
        }

        //Sends a random cat fact
        if (message.content.startsWith(prefix + 'catfact')) {
            //message.channel.send("Work in Progress");
            //      var catfact = require('https://catfact.ninja/fact'());
            //    console.log(catfact.fact);
            request('https://catfact.ninja/fact', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var importedJSON = JSON.parse(body);
                        //   console.log(catfact.fact);
                        message.channel.send("Did you know? " + importedJSON.fact);
                    }
                })
                //message.channel.send("Here is a random cat: ", {file: body});
                //message.channel.send("Here is a random dog: ", {file: FileReader("https://random.dog/woof")});
        }

        //Sends a random dog fact
        if (message.content.startsWith(prefix + 'dogfact')) {
            message.channel.send("Did you know? " + dogFacts.random());
        }

        //Sends a random panda fact
        if (message.content.startsWith(prefix + 'pandafact')) {
            message.channel.send("Did you know? " + pandaFacts.random());
        }

        //Sends a random penguin fact
        /*
  if (message.content.startsWith(prefix + 'penguinfact')) {
        message.channel.send("Did you know? " + penguinFacts.random());
  }
      */

        //Tells you your Location
        //  if (message.content.startsWith(prefix + 'whereami')) {
        //message.channel.send("Work in Progress");
        //      var catfact = require('https://catfact.ninja/fact'());
        //    console.log(catfact.fact);
        //    request('https://www.googleapis.com/geolocation/v1/geolocate?key=' + process.env.GOOGLE_API_KEY, function (error, response, body) {
        //  if (!error && response.statusCode == 200) {
        //     var importedJSON = JSON.parse(body);
        //   console.log(catfact.fact);
        //        message.channel.send("This is where your device says you are located: " + "\n latitude: " + importedJSON.lat + "\n longitude: " + importedJSON.lng + "\n accuracy: " + importedJSON.accuracy);
        //  }
        //})
        //message.channel.send("Here is a random cat: ", {file: body});
        //message.channel.send("Here is a random dog: ", {file: FileReader("https://random.dog/woof")});
        //  }

        //Tells you your Information
        //  if (message.content.startsWith(prefix + 'myinfo')) {
        //message.channel.send("Work in Progress");
        //      var catfact = require('https://catfact.ninja/fact'());
        //    console.log(catfact.fact);
        //    request('http://gd.geobytes.com/GetCityDetails' + process.env.GOOGLE_API_KEY, function (error, response, body) {
        //  if (!error && response.statusCode == 200) {
        //     var importedJSON = JSON.parse(body);
        //   console.log(catfact.fact);
        //        message.channel.send("This is what I found about you: " + 
        //                             "\n IP: " + importedJSON.geobytesipaddress + 
        //                             "\n RemoteIP: " + importedJSON.geobytesremoteip + 
        //                             "\n Country: " + importedJSON.geobytesregionlocationcode + 
        //                             "\n Country Code: " + importedJSON.accuracy +
        //                             "\n Region: " + importedJSON.geobytesregion +
        //                             "\n City: " + importedJSON.geobytescity +
        //                             "\n City ID: " + importedJSON.geobytescityid +
        //                             "\n fqcn: " + importedJSON.geobytesfqcn +
        //                             "\n Latitude: " + importedJSON.geobyteslatitude +
        //                             "\n Longitude: " + importedJSON.geobyteslongitude +
        //                             "\n Capital: " + importedJSON.geobytescapital +
        //                             "\n TimeZone: " + importedJSON.geobytestimezone +
        //                             "\n Nationality: " + importedJSON.geobytesnationalitysingular +
        //                             "\n Population: " + importedJSON.geobytespopulation +
        //                             "\n Conitent: " + importedJSON.geobytesmapreference +
        //                             "\n Currency: " + importedJSON.geobytescurrency +
        //                             "\n Currency Code: " + importedJSON.geobytescurrencycode +
        //                             "\n Title: " + importedJSON.geobytestitle +
        //                             "\n Location Code: " + importedJSON.geobyteslocationcode +
        //                             "\n DMA: " + importedJSON.geobytesdma +
        //                             "\n Ceratinty: " + importedJSON.geobytescertainty);
        //  }
        //})
        //  }

        /*
    //Flip a coin
  if (message.content.startsWith(prefix + 'coin2' + type)) {
    message.channel.send("Ohh! I flipped a: ", {file: coin_ + type[Math.floor(Math.random() * 2) + 0  ]});
  }
      */

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
            message.channel.sendMessage('!disboard bump');
        }

        //Shutdown the bot (jtrent238 ONLY Command!)
        if (message.content.startsWith(prefix + 'shutdown')) {
            if (message.member.id == 204669722094993417) {
                console.log(`Yay, its jtrent238!`);
                message.channel.sendMessage('Bye Bye! <:steven_neutral:422744915823558678>');
                client.disconnect;
                //client.logout;
                //Discord.logout;
                //client.disconnect((err) => {
                //  console.log(err);});
            } else {
                console.log(`Nope, noppers, nadda. (NOT jtrent238)`);
                message.channel.sendMessage('Sorry Only jtrent238 can use this command');
            }
        }

        //join a voice channel
        if (message.content.startsWith(prefix + 'vc')) {

            //  if (message.member.voiceChannel){
            //    message.channel.sendMessage("Im already in a voice channel!")
            //    }
            //else{
            const connection = message.member.voiceChannel.join();
            //}

        }

        //join a voice channel
        if (message.content.startsWith(prefix + 'vcleave')) {
            const connection = message.member.voiceChannel.leave();
        }

        //Get todays Date
        if (message.content.startsWith(prefix + 'today')) {
            message.channel.sendMessage('Today is: ' + new Date());
        }

        //Get the users avatar
        if (message.content.startsWith(prefix + 'myavatar')) {
            message.channel.send("Here ya go! " + message.author + " Its your avatar!", {
                file: message.author.avatarURL + ".png"
            });
        }

        //jtrent238's Patreon
        if (message.content.startsWith(prefix + 'patreon')) {
            message.channel.sendMessage('<:patreon_logo:388799943437058059> My Patreon is: https://www.patreon.com/jtrent238 <:patreon_logo:388799943437058059>\n Do `patreon!supporters` to see my supporters!');
        }

        //List Patreon Supportors
        if (message.content.startsWith('patreon!supporters')) {
            message.channel.sendMessage('<:patreon_logo:388799943437058059> <:patreon_logo:388799943437058059> <:patreon_logo:388799943437058059> My Patreon supporters! <:patreon_logo:388799943437058059> <:patreon_logo:388799943437058059> <:patreon_logo:388799943437058059>\n <:patreon_logo:388799943437058059> I have none! <:steven_neutral:422744915823558678>');
        }


        //Gets a player's Minecraft skin.
        //PATCH ISSUE#4 - LOOK AT MY COMMENT
        /*
      //var mcname = "jtrent238";//jtrent238's username as a test
  if (message.content.startsWith(prefix + 'mcskin' + mcname)) {
    message.channel.send(mcname + "'s Skin", {file: 'https://crafatar.com/renders/body/' + mcname});
  }
      */

        //Repeats what you say.
        if (message.content.startsWith(prefix + 'echo' + '')) {
            message.channel.sendMessage('' + message.content.text);
        }

        //Logs command
        if (message.content.startsWith(prefix + 'logs')) {
            message.channel.sendMessage('This channel has: ' + message.channel.fetchMessages.size + ' messages')
            message.channel.fetchMessages({}).then(messages => {
                console.log(`${messages.size} messages found`);
            });
        }

        //NSFW - You know what this is! Right?
        if (message.content.startsWith(prefix + 'nsfw' + '')) {
            message.channel.sendMessage('ERROR: This command is Disabled! <:steven_neutral:422744915823558678>');
        }

        //Get the users avatar
        if (message.content.startsWith(prefix + 'pilot')) {
            //message.channel.send("I will try to send the vid!");
            message.channel.send("https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2FSteven%20Universe%20-%20Pilot%20Episode%20(ENGLISH).mp4?1533949700881");
            //message.channel.send("", {file: 'https://cdn.glitch.com/3b971df8-c1b8-4b3d-8b2c-749c9e197d77%2FSteven%20Universe%20-%20Pilot%20Episode%20(ENGLISH).mp4?1533949700881'});
            //message.channel.send("https://www.youtube.com/watch?v=vNNkzy-JO8g"); //This video was taken down.
        }

        //Giveaway
        const giveawayid = ["test"]
        if (message.content.startsWith(prefix + 'giveaway' + giveawayid)) {
            if (giveawayid == "test") {
                message.channel.sendMessage("This is Giveaway " + giveawayid);
            }

        }

        //MUSIC BOMB
        if (message.content.startsWith(prefix + 'musicbomb')) {
            message.channel.sendMessage('ERROR: This command is Disabled! <:steven_neutral:422744915823558678>');
        }

        //Sends Status of Electroneum
        if (message.content.startsWith('etn!stats')) {
            request('https://api.coinmarketcap.com/v2/ticker/2137/', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var importedJSON = JSON.parse(body);
                    message.channel.send("Here is the current stats of " + "***" + importedJSON.data.name + "***" +
                        "\n ***Name:*** " + importedJSON.data.name +
                        "\n ***Symbol:*** " + importedJSON.data.symbol + " <:electroneum:478040522544644106>" +
                        "\n ***Rank:*** " + importedJSON.data.rank +
                        "\n ***Circulating Supply:*** " + importedJSON.data.circulating_supply +
                        "\n ***Total Supply:*** " + importedJSON.data.total_supply +
                        "\n ***Max Supply:*** " + importedJSON.data.max_supply +
                        "\n ***Price:*** " + importedJSON.data.quotes.USD.price + " USD" +
                        "\n ***Volume [24h]:*** " + importedJSON.data.quotes.USD.volume_24h +
                        "\n ***Market Cap:*** " + importedJSON.data.quotes.USD.market_cap +
                        "\n ***Percent Change [1h]:*** " + importedJSON.data.quotes.USD.percent_change_1h + "%" +
                        "\n ***Percent Change [24h]:*** " + importedJSON.data.quotes.USD.percent_change_24h + "%" +
                        "\n ***Percent Change [7d]:*** " + importedJSON.data.quotes.USD.percent_change_7d + "%" +
                        "\n ***Last Updated:*** " + importedJSON.data.last_updated +
                        "\n ```etnjwidQMcTDM5DQzRvEGreqVSvYXRLM6hknu7Gm11tASrain2VzuU68ffYZ4vwNhGeigg8svXBhefL9PZD9aCar1MHSX2DfQ4```");
                }
            })
        }

        //Gets a random Gem
        if (message.content.startsWith(prefix + 'fakeinfo')) {
            message.channel.send("Here is your FakeInfo: \n" + faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
        }

        //Gets a random Gem
        if (message.content.startsWith(prefix + 'sendmail')) {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: account.user, //process.env.nodemailer_USER, // generated ethereal user
                        pass: account.pass //process.env.nodemailer_PASS // generated ethereal password
                    }
                });

                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Fred Foo 👻" <foo@example.com>', // sender address
                    to: 'bar@example.com, baz@example.com', // list of receivers
                    subject: 'Hello ✔', // Subject line
                    text: 'Hello world?', // plain text body
                    html: '<b>Hello world?</b>' // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    message.channel.send("Message sent: \n" + info.messageId + "\n Preview URL: \n" + nodemailer.getTestMessageUrl(info));
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                });
            });
        }

        //In the case of an error send this message

        //Creates an invite
        /*
  if (message.content.startsWith(prefix + 'invite' + '')) {
    //client.invite.guild("241362869319499777")
    //client.invite.channel("241362869319499777")
    //client.invite.toString()
    client.invite('ndhwqfW', '241362869319499777', '241362869319499777')
    //message.channel.sendMessage('' + ${invite});
    //console.log(`Invite: ${invite}`);
  }
      */
    });
} catch (e) {
    Raven.captureException(e);
}
try {
    client.login(process.env.TOKEN);
} catch (e) {
    Raven.captureException(e);
}