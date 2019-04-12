'use strict';

const Discord = require('discord.io');
const raiderIO = require('../src/repositories/raiderIO');
const sample = require('lodash.sample')
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
      const command = cmd.toLowerCase();

      switch(command) {
        case 'slurp':
          bot.sendMessage({
            to: channelId,
            message: '*sluuuurp*'
          });
        break;
        case 'affixes':
          const affixes = await raiderIO.getAffixes();
          bot.sendMessage({
            to: channelId,
            message: affixes
          });
          break;
        case 'schedule':
        bot.sendMessage({
          to: channelId,
          message: "Thursday = Jordan @Goose; \n Friday = Spencer @YaBoiBangz; \n Saturday = Seth @VomitCat; \n Sunday = Mikkel @hamtaro; \n Monday = Froob @McFroob; \n Tuesday = Adam @T0x1x; \n Wednesday = Ross @Minz. "
        });
        break;
        case 'dotd':
        const people = ['Spencer', 'Jordan', 'Seth', 'Brandon', 'Richie', 'Mikkel', 'Adam', 'Ross', 'Sam']
        const random = sample(people);
        bot.sendMessage({
          to: channelId,
          message: `Dingus of the day: ${random}`
        });
        break;
        case 'help':
        bot.sendMessage({
          to: channelId,
          message: 'List of commands: slurp, affixes, schedule, dodt'
        });
        break;
      }
    } else if (message.toLowerCase().match(/dad/)) {
      bot.sendMessage({
        to: channelId,
        message: '*smirks*'
      });
    }
    else if (message.toLowerCase().match(/seth/) && user !== 'Dad') {
      bot.sendMessage({
        to: channelId,
        message: "Seth is studying. Please don't bother him."
      });
    }
  });

};

start();
