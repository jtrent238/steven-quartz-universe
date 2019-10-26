const Discord = require('discord.js');
const client = new Discord.Client();

const http = require('http');
const express = require('express');
const app = express();

//const settings = require('./settings.json');

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
  //response.sendFile(__dirname + '/site/index.html');
  
  //app.use(morgan('combined'))
});

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});

var request = require('request');

client.on('message', message => {
  
  if (message.content.includes(client.user)) {
  request('https://catfact.ninja/fact', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var importedJSON = JSON.parse(body);
                        //   console.log(catfact.fact);
                        message.channel.send("Did you know? " + importedJSON.fact);
                    }
                })
  }
});

client.login(process.env.TOKEN);