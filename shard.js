const Discord = require('../');
//const { token } = require('./auth.json');

const client = new Discord.Client({
  shardId: process.argv[2],
  shardCount: process.argv[3],
});

client.on('message', msg => {
  if (msg.content.startsWith('?eval') && msg.author.id === '421786371183869952') {
    try {
      const com = eval(msg.content.split(' ').slice(1).join(' '));
      msg.channel.send(com, { code: true });
    } catch (e) {
      msg.channel.send(e, { code: true });
    }
  }
});

process.send(123);

client.on('ready', () => {
  console.log('Ready', client.options.shardId);
  if (client.options.shardId === 0)
    setTimeout(() => {
      console.log('kek dying');
      client.destroy();
    }, 5000);
});

client.login(process.env.TOKEN).catch(console.error);