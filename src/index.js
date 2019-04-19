'use strict';

const Discord = require('discord.io');
const { command } = require('./handlers/commandHandler');
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
    await command(bot, user, userId, channelId, message, evt);
  });

};

start();
