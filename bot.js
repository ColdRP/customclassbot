const Discord = require('bot.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (msg.content === '!customclass') {
    msg.author.send("Hi! Before buying a Custom Class you should have read and agreed to the following terms: \n https://coldrpofficial.com/CustomClasses \n https://coldrpofficial.com/CustomClassesTOS")
  }
});

client.login(process.env.BOT_TOKEN);
