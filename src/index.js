'use strict';

const Discord = require('discord.io');
const raiderIO = require('../src/repositories/raiderIO');
require('dotenv').config();

async function start() {

  const bot = new Discord.Client({
    token: process.env.DISCORD_KEY,
    autorun: true
  });

  bot.on('ready', () => {
    console.log('Connected and ready');
    console.log(`Logged in as ${bot.username} - ${bot.id}`);
  });

  bot.on('message', async (user, userId, channelId, message, evt) => {
    if (message.substring(0, 1) === '!') {
      let args = message.substring(1).split(' ');
      const cmd = args[0];
      args = args.splice(1);


      switch(cmd) {
        case 'slurp':
          bot.sendMessage({
            to: channelId,
            message: 'slop'
          });
        break;
        case 'affixes':
          const affixes = await raiderIO.getAffixes();
          bot.sendMessage({
            to: channelId,
            message: affixes
          });
          break;
      }
    }
  });

};

start();
