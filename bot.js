const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (msg.content === '!customclass') {
    msg.author.send("Hi! Before buying a Custom Class you should read this: https://coldrpofficial.com/CustomClasses \n If you are purchasing you also agree to these TOS : https://coldrpofficial.com/CustomClassesTOS \n If you have read both of these you agree to the TOS by purchasing a custom class, Message the Custom Class Manager if you are interested in buying a custom class, If they do not respond, message the Owner or someone such as the head admin.")
  }
  else if (msg.content === '!serverinfo') {
    msg.author.send("Hi, Here is the information about the server \n Forums : https://coldrpofficial.com \n Store : https://coldrpofficial.com/Store \n MOTD : https://coldrpofficial.com/Motd \n I hope that is all you need!")
  }
});

client.login(process.env.BOT_TOKEN);
