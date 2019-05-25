const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (msg.content === '!customclass') {
    msg.author.send("Hi! Before buying a Custom Class you should read this: https://coldrpofficial.com/CustomClasses \n If you are purchasing you also agree to these TOS : https://coldrpofficial.com/CustomClassesTOS \n If you have read both of these you agree to the TOS by purchasing a custom class, Message the Custom Class Manager if you are interested in buying a custom class, If they do not respond, message the Owner or someone such as the head admin.")
  }
  else if (msg.content === '!nib') {
    msg.author.send("Hello")
  }
});

client.login(process.env.BOT_TOKEN);
